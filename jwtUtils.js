// Importing required modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Loading environment variables from .env file
dotenv.config();

// Setting the secret key for JWT signing and verification. It is taken from environment variables or a default value.
const secretKey = process.env.SECRET_KEY || "aniket@123#321@";

// Function to generate a JWT token
function generateToken(payload) {
  try {
    // Signing the token with the provided payload and secret key, and setting an expiration time of 1 hour
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
  } catch (err) {
    console.log(err); // Logging any errors that occur during token generation
    return null; // Returning null if an error occurs
  }
}

// Function to verify a JWT token
function verifyToken(token) {
  try {
    // Verifying the token with the secret key
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.log(err); // Logging any errors that occur during token verification
    return null; // Returning null if the token is invalid
  }
}

// Exporting the generateToken and verifyToken functions for use in other files
module.exports = { generateToken, verifyToken };
