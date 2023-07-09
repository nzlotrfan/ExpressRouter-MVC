const { pool } = require("../db/db-config");
module.exports = {
  queryLogin: () => {
    console.log("/api/authentication/LOGIN database query made");
    return "Pretend LOGIN result";
  },

  querySignup: () => {
    console.log("/api/authentication/SIGNUP database query made");
    return "Pretend SIGNUP result";
  },
};
