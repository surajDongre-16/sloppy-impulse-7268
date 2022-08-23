const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://sloppyMongo:sloppy123@sloppyimpulse7268.p9ayjli.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = connection;
