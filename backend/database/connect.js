const { connect: connectMongo, ServerApiVersion, set } = require("mongoose");
require("dotenv").config();

const env = process.env;

const connect = () => {
  return new Promise((resolve, reject) => {
    const uri = `mongodb+srv://${env.MONGOOSE_USERNAME}:${env.MONGOOSE_PASSWORD}@cluster0.px7aayo.mongodb.net/movie?retryWrites=true&w=majority`;
    const params = { useNewUrlParser: true, useUnifiedTopology: true };
    set("strictQuery", false);
    connectMongo(uri, params)
      .then((res) => {
        return resolve("Connected To Database");
      })
      .catch((err) => {
        console.log(err.message);
        return reject("Something went Wrong!!");
      });
  });
};

module.exports = connect;
