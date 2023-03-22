const express = require("express");
const cors = require("cors");
const movieRouter = require("./routes/movie.routes");
const userRouter = require("./routes/user.routes");
const dbConnection = require("./database/connect");

// require("dotenv").config();
// const env = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/movies", movieRouter);
app.use("/users", userRouter);

app.use("/", (req, res) => {
  res.send("prop assignment");
});

// connect()
//   .then((res) => {
//     app.listen(8080, () => {
//       console.log("server has started");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const port = 3000;
dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(
        "database is connected and server is listening on http://localhost:3000"
      );
    });
  })
  .catch((err) => {
    console.log("err");
  });
