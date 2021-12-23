const mongoose = require("mongoose");
const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports.Service = mongoose.model("Service", servicesSchema);
