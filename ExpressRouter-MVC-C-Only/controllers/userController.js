module.exports = {
  getAllUsers: (req, res) => {
    console.log("/api/USERS GET endpoint was hit! 🙌");
    const queryAllUsers = function () {
      // ie pool.query()
      return [{ name: "sally" }];
    };
    const result = queryAllUsers();
    res.status(200).send(result);
  },
};
