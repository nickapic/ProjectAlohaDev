const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    avatar:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    role:{
        type: String,
        default: "user",
        enum: ["user","company"]
    }
    }, {
        timestamps: true
    }
);

module.exports = User = mongoose.model('user', UserSchema)