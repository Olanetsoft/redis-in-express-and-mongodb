
const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String,
    author: String,
    content: String
}, {
    timestamps: true
});

mongoose.model('Article', articleSchema);