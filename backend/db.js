const mongoose = require("mongoose");

const url =
  "mongodb://sahana:sahana@cluster0-shard-00-00.vbdyb.mongodb.net:27017,cluster0-shard-00-01.vbdyb.mongodb.net:27017,cluster0-shard-00-02.vbdyb.mongodb.net:27017/quora-final-app?ssl=true&replicaSet=atlas-12xbup-shard-0&authSource=admin&retryWrites=true&w=majority";

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
