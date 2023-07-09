const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

// Authentication Login Endpoint
router.get("/api/authentication/login", authenticationController.login);

// Authentication Signup Endpoint
router.get("/api/authentication/signup", authenticationController.signup);

module.exports = router;
