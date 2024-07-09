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

1. Clone the repository using the command `git clone https://github.com/your-username/jwt-auth-example.git`
2. Navigate to the project directory using the command `cd jwt-auth-example`
3. Install the required dependencies using the command `npm install`

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
