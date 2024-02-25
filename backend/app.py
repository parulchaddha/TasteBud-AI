from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin
import pymysql
import secrets
from flask_session import Session

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_hex(16)
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
Session(app)
CORS(app, supports_credentials=True)

# MySQL Configuration
db = pymysql.connect(
    host="localhost",
    user="krupesh",
    password="krupesh",
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
global_username = None
global_email = None
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
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    query = "INSERT INTO users (username, email, password) VALUES (%s, %s, %s)"
    try:
        execute_query(query, (username, email, password))
        session['username'] = username
        session['email'] = email
        return jsonify({"status": "success", "message": "Signup successful"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

# Endpoint to get user session data
@app.route('/user')
def user():
    # Check if the user is logged in
    if 'email' in session:
        email = session['email']
        username = session['username']
        return jsonify({'email': email, 'username': username})
    else:
        return jsonify({'error': 'Not logged in'}), 401
def handle_preflight():
    response = jsonify({'status': 'success'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')  # Important for including credentials
    return response
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
