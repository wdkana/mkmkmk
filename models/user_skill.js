const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_skill = new Schema({
  skill_id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: false,
    unique: true,
    maxLength: [50, "title terlalu panjang"],
  },
  description: {
    type: String,
    required: false,
    unique: false,
    maxLength: [30, "title terlalu panjang"],
  },
  difficult: {
    type: String,
    required: false
  }
});

mongoose.models = {};
var User_skill = mongoose.model('User_skill', user_skill);

export default User_skill;
