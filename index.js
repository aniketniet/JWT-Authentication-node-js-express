// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const { generateToken, verifyToken } = require("./jwtUtils");

// Creating an instance of express
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle login requests
app.post("/login", (req, res) => {
  const { username, password } = req.body; // Extracting username and password from the request body
  if (username && password) {
    // Checking if both username and password are provided
    const token = generateToken({ username }); // Generating a token using the provided username
    res.send({ token }); // Sending the token as a response
  } else {
    res.status(401).send("Invalid username or password"); // Sending an error response if username or password is missing
  }
});

// Route to handle protected requests
app.get("/protected", (req, res) => {
  const token = req.headers.authorization; // Extracting the token from the request headers

  if (token) {
    // Checking if the token is provided
    const decoded = verifyToken(token); // Verifying the token
    if (decoded) {
      // If the token is valid
      res.json({ message: "You are authorized", user: decoded }); // Sending a success response with the decoded token
    } else {
      res.status(401).json({ message: "Unauthorized" }); // Sending an error response if the token is invalid
    }
  } else {
    res.status(401).json({ message: "No token provided" }); // Sending an error response if the token is not provided
  }
});

// Default route to display instructions
app.get("/", (req, res) => {
  const h2 = `<h1> Welcome to the JWT Authentication </h1> <br>
  <p> To get the token, please make a POST request to <b>/login</b> with <b>username</b> and <b>password</b> in the body in JSON . </p> <br>
  <p> To access the protected route, please make a GET request to <b>/protected</b> with the token in the Authorization <b>Authorization: your-jwt-token</b>. </p> <br>
  `;
  res.send(h2); // Sending the instructions as a response
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Logging that the server is running
});
