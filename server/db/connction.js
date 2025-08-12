const mongoose = require("mongoose");
const connected = async (uri) => {
  mongoose.connect(uri);
};
module.exports = connected;
