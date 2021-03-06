const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    applyLink: {
        type: String
    },
    name:{
        type: String
    },
    avatar: {
        type: String
    },
    likes: [{
        user:{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    comments: [{
        user:{
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        text: {
            type: String,
            required: true
        },
        name:{
            type: String
        },
        avatar: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
            type: Date,
            default: Date.now
    }
})

module.exports = Job = mongoose.model('job', JobSchema)