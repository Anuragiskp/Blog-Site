const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Comments: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Article = mongoose.model('comments', articlesSchema);

module.exports = Article;