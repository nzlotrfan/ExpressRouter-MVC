const user = require("../models/userModel");

module.exports = {
  getAllUsers: (req, res) => {
    console.log("/api/USERS GET endpoint was hit! 🙌");
    user.queryAllUsers().then((result) => {
      // Manipulate the queried data or just send it straight back to the frontend
      res.status(200).send(result);
    });
  },
};
