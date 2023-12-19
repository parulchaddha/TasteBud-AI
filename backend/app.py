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

if __name__ == '__main__':
    app.run(debug=True)
