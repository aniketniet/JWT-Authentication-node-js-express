JWT Authentication Example using Node.js and Express
=====================================================

This repository contains a simple example of JWT (JSON Web Token) authentication using Node.js and Express. The example demonstrates how to generate and verify JWT tokens for authentication purposes.

Getting Started
---------------

### Prerequisites

* Node.js (version 14 or higher)
* npm (version 6 or higher)
* A code editor or IDE of your choice

### Installation

1. Clone the repository using the command `git clone (https://github.com/aniketniet/JWT-Authentication-node-js-express.git)`
2. Install the required dependencies using the command `npm install`

### Running the Application

1. Start the server using the command `node index.js`
2. Open a web browser and navigate to `http://localhost:3000` to see the instructions on how to use the application

How it Works
--------------

### Login

To get a JWT token, make a POST request to `http://localhost:3000/login` with a JSON body containing `username` and `password` fields. For example:

```json
{
  "username": "johnDoe",
  "password": "password123"
}
```
Navigate to the project directory:

`cd jwt-authentication`

Install the dependencies:

`npm install`

Running the Application
Start the server:
`npm start`

The server will run on http://localhost:3000.

Usage
API Endpoints
1. Login
Endpoint: /login
Method: POST
Description: Generates a JWT token for a user with a valid username and password.
Request Body:

```json
{
  "username": "your-username",
  "password": "your-password"
}
```

Response

```json
{
  "token": "your-jwt-token"
}
```
2. Protected Route
Endpoint: /protected
Method: GET
Description: Accesses a protected route that requires a valid JWT token.
Headers:

`Authorization: your-jwt-token`

Response:

```json
{
  "message": "You are authorized",
  "user": {
    "username": "your-username",
    "iat": timestamp,
    "exp": timestamp
  }
}
```

Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
Express.js
jsonwebtoken
dotenv
