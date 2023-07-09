// Module imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");

// Let's refer to Express as app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route Imports
const userRouter = require("./routes/userRoutes");
const authenticationRouter = require("./routes/authenticationRoutes");

// Routes
app.use(userRouter);
app.use(authenticationRouter);

const port = process.env.PORT;
app
  .listen(port, () => console.log(`Server is listening at http://localhost:${port}`))
  .on("error", (error) => console.error(error));
