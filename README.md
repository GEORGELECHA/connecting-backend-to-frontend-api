# connecting-backend-to-frontend-api

## User Authentication System with Express and MySQL
##Description:
This project is a simple User Authentication System built with Node.js, Express, MySQL, and bcryptjs for password hashing. It allows users to register, log in, and securely store credentials in a MySQL database. The application consists of an Express server that handles routes for registration and login, along with a frontend interface for user interactions.

##Features:
User Registration: Allows new users to register with a name, email, and password. The password is hashed for security.
User Login: Allows registered users to log in using their email and password.
Frontend Interface: A simple HTML form for registration and login, with JavaScript to handle form submissions via AJAX.
Database Interaction: Uses MySQL to store and retrieve user data securely.
Password Hashing: Uses bcryptjs to hash and compare passwords securely.

## Project Structure:
/project-root
├── config
│   └── db.js            # MySQL database connection setup
├── controllers
│   └── authController.js # Functions for user registration and login
├── routes
│   └── auth.js          # Routes for handling user authentication
├── public
│   └── index.html       # Registration form (frontend)
│   └── login.html       # Login form (frontend)
├── server.js            # Main entry point for the server
└── script.js            # JavaScript file handling AJAX requests for login and registration


##Setup Instructions:
#Prerequisites:
Node.js installed on your system.
MySQL server running with a database to store user data.

##Steps:
1.Clone the repository:
   git clone <repository-url>
   cd <project-directory>
   
2.  Install dependencies: Run the following command to install required Node.js packages:
       npm install
3. Set up environment variables: Create a .env file in the root of the project and add the following configuration:
      DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
PORT= # Or any available port

4. Create the database: In MySQL, create a database and a users table with the following schema:
     CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
5. Start the server: Run the following command to start the server:
      node server.js

6. Access the application:

Open your browser and visit http://localhost:6100 to view the registration form.
Navigate to http://localhost:6100/login to access the login form.

##API Routes:
#POST /auth/register:

##Registers a new user.
#Body Parameters:
name (string): User's name.
email (string): User's email.
password (string): User's password (plain text, will be hashed).
#Response:
201: Success message on successful registration.
400: Error message if the user already exists.
POST /auth/login:

##Logs in an existing user.
#Body Parameters:
email (string): User's email.
password (string): User's password (plain text).
#Response:
200: Success message with a welcome message upon successful login.
400: Error message if the credentials are invalid.
## File Descriptions:
#config/db.js: Contains the database connection setup using the mysql2 package and environment variables.
#controllers/authController.js: Includes the registerUser and loginUser functions to handle user registration and login logic.
#routes/auth.js: Contains the routes that handle POST requests for registration and login, linking them to the appropriate controller functions.
#index.html: Frontend registration form that collects the user's name, email, and password.
#login.html: Frontend login form for users to sign in using their email and password.
#script.js: Handles AJAX form submissions for registration and login. It sends data to the server and displays appropriate messages based on the server's response.
##Security Considerations:
#Passwords are hashed using bcryptjs before being stored in the database to ensure security.
#MySQL queries use prepared statements to prevent SQL injection attacks.
## Troubleshooting:
Ensure that your MySQL server is running and accessible.
Double-check the .env configuration to make sure that the database credentials are correct.
Ensure all dependencies are installed by running npm install.
Credits:
Node.js: JavaScript runtime environment used for building the backend.
Express.js: Web framework for Node.js used to handle HTTP requests.
MySQL: Database used to store user data.
bcryptjs: A library used to hash and compare passwords securely.
