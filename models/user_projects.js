const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_projects = new Schema({
    public_key: {
        type: String,
        required: true,
        unique: false,
        maxLength: [255, "public key terlalu pajang"],
    },
    title: {
        type: String,
        required: true,
        unique: false,
        maxlength: [100, "title terlalu panjang"]
    },
    description: {
        type: String,
        required: true,
        unique: false,
        maxlength: [255, "deskripsi terlalu panjang"]
    },
    link: {
        type: String,
        required: true,
        unique: false,
        maxlength: [255, "link terlalu panjang"]
    },
    folder_id: {
        type: String,
        required: false,
        unique: false,
        maxlength: [100, "folder id terlalu panjang"]
    },
    status: {
        type: String,
        enum: ["OPEN","PRIVATE"],
        default: "OPEN",
        required: false
    }
});

mongoose.models = {};
const User_projects = mongoose.model('User_projects', user_projects);

export default User_projects;