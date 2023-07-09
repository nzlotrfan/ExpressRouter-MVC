// Module imports
const express = require("express");
const app = express();

// Route Imports
const userRouter = require("./routes/userRoutes");

// Routes
app.use(userRouter);

const port = process.env.PORT || 4000;
app
  .listen(port, () => console.log(`Server is listening at http://localhost:${port}`))
  .on("error", (error) => console.error(error));
