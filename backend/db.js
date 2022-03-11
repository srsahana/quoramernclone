const mongoose = require("mongoose");

const url =
  "mongodb://sahana:sahanaadmin@cluster0-shard-00-00.puuwd.mongodb.net:27017,cluster0-shard-00-01.puuwd.mongodb.net:27017,cluster0-shard-00-02.puuwd.mongodb.net:27017/quora?ssl=true&replicaSet=atlas-12nbsc-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
