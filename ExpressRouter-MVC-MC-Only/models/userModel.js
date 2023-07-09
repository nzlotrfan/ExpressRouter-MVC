const { pool } = require("../db/db-config");
module.exports = {
  queryAllUsers: () => {
    console.log("/api/USERS database query made");
    return pool
      .promise()
      .query("SELECT * FROM team_mate")
      .then(([results]) => results)
      .catch((err) => console.log(err));
  },
};
