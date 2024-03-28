from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
import pymysql
import secrets
from flask_session import Session
import re

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_hex(16)
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
Session(app)
CORS(app, supports_credentials=True)

# MySQL Configuration
db = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="tastebud",
    cursorclass=pymysql.cursors.DictCursor
)

# Helper function to execute SQL queries
def execute_query(query, params=None):
    with db.cursor() as cursor:
        cursor.execute(query, params)
        result = cursor.fetchall()
    db.commit()
    return result

# Login endpoint
@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    query = "SELECT * FROM users WHERE email=%s AND password=%s"
    result = execute_query(query, (email, password))

    if result:
        session['username'] = result[0]['username']
        session['email'] = email
        print(session['username'])
        print(session['email'])
        return jsonify({"status": "success", "message": "Login successful"})
    else:
        return jsonify({"status": "error", "message": "Invalid email or password"})

# Signup endpoint
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    username = data.get('username')

    # Check for valid email
    if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
        return jsonify({"status": "error", "message": "Invalid email address!"})

    # Check for valid username
    if not re.match(r'[A-Za-z0-9]+', username):
        return jsonify({"status": "error", "message": "Username must contain only characters and numbers!"})

    # Check for empty fields
    if not username or not password or not email:
        return jsonify({"status": "error", "message": "Please fill out the form!"})

    # Password rules validation
    if not (len(password) >= 8 and re.search(r'[A-Z]', password) and re.search(r'[a-z]', password) and re.search(r'\d', password) and re.search(r'[^A-Za-z0-9]', password)):
        return jsonify({"status": "error", "message": "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character!"})

    # Check if email already exists
    try:
        query = "SELECT * FROM users WHERE email = %s"
        result = execute_query(query, (email,))
        if result:
            return jsonify({"status": "error", "message": "Email already exists!"})

        # Check if username already exists
        query = "SELECT * FROM users WHERE username = %s"
        result = execute_query(query, (username,))
        if result:
            return jsonify({"status": "error", "message": "Username already exists!"})

        # If email, username, and password rules are satisfied, proceed with signup
        query = "INSERT INTO users (username, email, password, name) VALUES (%s, %s, %s, %s)"
        cursor = db.cursor()
        cursor.execute(query, (username, email, password, name))
        db.commit()
        user_id = cursor.lastrowid  # Get the auto-incremented user ID
        cursor.close()
        session['user_id'] = user_id  # Store user ID in session
        return jsonify({"status": "success", "message": "Signup successful", "user_id": user_id, "username": username, "name": name, "email": email})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/setcookies', methods=['POST'])
def set_cookies():
    data = request.get_json()
    email = data.get('email')
    username = data.get('username')
    user_id = data.get('user_id')
    name = data.get('name')

    if not (email and username and user_id and name):
        return jsonify({"status": "error", "message": "Missing user data"})

    resp = make_response("Cookies have been set.")
    resp.set_cookie('email', email)
    resp.set_cookie('username', username)
    resp.set_cookie('user_id', str(user_id))
    resp.set_cookie('name', name)
    return resp   
# Endpoint to get user session data
@app.route('/user')
def user():
    # Check if the user is logged in
    if 'email' in session:
        email = session['email']
        username = session['username']
        print(email)
        print(username)
        return jsonify({'email': email, 'username': username})
    else:
        return jsonify({'error': 'Not logged in'}),401
def handle_preflight():
    response = jsonify({'status': 'success'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')  # Important for including credentials
    return response

@app.route('/like_recipe', methods=['POST'])
def like_recipe():
    data = request.get_json()
    userid = data['user_id']
    recipeid = data['recipe_id']
    try:
        cursor = db.cursor()
        query = "INSERT INTO user_favourite (userid, recipeid) VALUES (%s, %s)"
        cursor.execute(query, (userid, recipeid))
        db.commit()
        cursor.close()
        return jsonify({'message': 'Recipe liked successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/dislike_recipe', methods=['POST'])
def dislike_recipe():
    data = request.get_json()
    userid = data['user_id']
    recipeid = data['recipe_id']
    try:
        cursor = db.cursor()
        query = "DELETE FROM user_favourite WHERE userid = %s AND recipeid = %s"
        cursor.execute(query, (userid, recipeid))
        db.commit()
        cursor.close()
        return jsonify({'message': 'Recipe disliked successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username', None)
    session.pop('email', None)
    return jsonify({"status": "success", "message": "Logout successful"})
    
@app.route('/')
def index():
    return 'Welcome to the Flask User Dashboard!'
if __name__ == "__main__":
    app.run(debug=True)
