const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_job = new Schema({
  public_key: {
    type: String,
    required: false,
    unique: false,
    maxLength: [255, "public key terlalu pajang"],
  },
  title: {
    type: String,
    required: false,
    unique: true,
    maxLength: [30, "title terlalu panjang"],
  },
  skills: [Number]
});

mongoose.models = {};
var User_job = mongoose.model('User_job', user_job);

export default User_job;
