const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_follows = new Schema ({
    public_key: {
        type: String,
        required: true,
        unique: false,
        maxLength: [255, "public key terlalu panjang"],
    },
    public_key_target: {
        type: String,
        required: true,
        unique: false,
        maxLength: [255, "public key terlalu panjang"],
    }
});

mongoose.models = {};
const User_follows = mongoose.model('User_follows', user_follows);

export default User_follows;