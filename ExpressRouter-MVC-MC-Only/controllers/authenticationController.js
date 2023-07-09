const authentication = require("../models/authenticationModel");

module.exports = {
  login: (req, res) => {
    console.log("/api/authentication/LOGIN GET endpoint was hit! 🔓"); // This would actually be a POST request in practice
    const data = authentication.queryLogin();
    // Manipulate the queried data or just send it straight back to the frontend
    res.status(200).send(data);
  },

  signup: (req, res) => {
    console.log("/api/authentication/SIGNUP GET endpoint was hit! 🔓"); // This would actually be a POST request in practice
    const data = authentication.querySignup();
    // Manipulate the queried data or just send it straight back to the frontend
    res.status(201).send(data);
  },
};
