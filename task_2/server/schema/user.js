const mongoose = require('mongoose');

let user = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    full_bio: {
        type: String,
        required: true
    },
    profile_picture_url: {
        type: String,
        required: true
    }
});

let User = module.exports = mongoose.model('Post', user);