from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)

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
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    query = "SELECT * FROM users WHERE email=%s AND password=%s"
    result = execute_query(query, (email, password))

    if result:
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

    # Check if the email is already registered
    query = "SELECT * FROM users WHERE email=%s"
    result = execute_query(query, (email,))
    if result:
        return jsonify({"status": "error", "message": "Email is already registered"})

    # Insert new user into the database
    query = "INSERT INTO users (email, password, name, username) VALUES (%s, %s, %s, %s)"
    execute_query(query, (email, password, name, username))

    return jsonify({"status": "success", "message": "Signup successful"})

#get user details
@app.route('/user-info', methods=['GET'])
def get_user_info():
    try:
        # Check if the user is logged in (using a session identifier)
        if 'userid' not in session:
            return jsonify({"status": "error", "message": "User not logged in"})

        user_id = session['userid']

        # Query the database for user information based on user_id
        query = "SELECT name, email FROM user WHERE userid=%s"
        result = execute_query(query, (user_id,))

        if result:
            user_info = result[0]
            return jsonify({"status": "success", "user_info": user_info})
        else:
            return jsonify({"status": "error", "message": "User not found"})

    except Exception as e:
        print(e)
        return jsonify({"status": "error", "message": "Internal server error"})

if __name__ == '__main__':
    app.run(debug=True)
