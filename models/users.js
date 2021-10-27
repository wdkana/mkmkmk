const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  ip: {
    type: String,
    required: [true, "Tolong tambahkan alamat IP user"],
    uniq: true,
    maxLength: [20, "Alamat IP tidak valid"],
  },
  username: {
    type: String,
    required: false,
    uniq: false,
    maxLength: [20, "Username terlalu panjang"],
  },
  since: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};
var Users = mongoose.model('User', users);

export default Users;
