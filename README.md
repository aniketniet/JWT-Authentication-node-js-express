# JWT Authentication

This is a simple JWT (JSON Web Token) authentication project built using Node.js and Express. It demonstrates how to generate and verify JWT tokens for user authentication.

## Features

- User login with JWT token generation
- Protected route accessible only with a valid token
- Simple and clean code structure

## Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- dotenv

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jwt-authentication.git
Navigate to the project directory:
bash
Copy code
cd jwt-authentication
Install the dependencies:
bash
Copy code
npm install
Environment Variables
Create a .env file in the root directory of your project and add your secret key:

makefile
Copy code
SECRET_KEY=your-secret-key
If you do not provide a secret key in the .env file, a default secret key will be used.

Running the Application
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:3000.

Usage
API Endpoints
1. Login
Endpoint: /login
Method: POST
Description: Generates a JWT token for a user with a valid username and password.
Request Body:

json
Copy code
{
  "username": "your-username",
  "password": "your-password"
}
Response:

json
Copy code
{
  "token": "your-jwt-token"
}
2. Protected Route
Endpoint: /protected
Method: GET
Description: Accesses a protected route that requires a valid JWT token.
Headers:

makefile
Copy code
Authorization: your-jwt-token
Response:

json
Copy code
{
  "message": "You are authorized",
  "user": {
    "username": "your-username",
    "iat": timestamp,
    "exp": timestamp
  }
}
3. Home
Endpoint: /
Method: GET
Description: Displays instructions on how to use the API.

Project Structure
bash
Copy code
.
├── jwtUtils.js          # Contains functions to generate and verify JWT tokens
├── server.js            # Main server file
├── package.json         # Project dependencies and scripts
└── .env                 # Environment variables (not included in version control)
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
Express.js
jsonwebtoken
dotenv
