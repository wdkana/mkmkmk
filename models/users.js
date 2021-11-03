const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  username: {
    type: String,
    required: false,
    unique: true,
    maxLength: [20, "Username terlalu panjang"],
  },
  public_key: {
    type: String,
    required: false,
    unique: false,
    maxLength: [255, "public key terlalu pajang"],
  },
  private_key: {
    type: String,
    required: false,
    unique: false,
    maxLength: [255, "private key terlalu pajang"],
  },
  pin: {
    type: Number,
    required: false,
    unique: false,
    maxLength: [6, "pin terlalu panjang atau mengandung huruf"],
  },
  since: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};
var Users = mongoose.model('User', users);

export default Users;
