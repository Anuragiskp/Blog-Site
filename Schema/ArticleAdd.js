const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ArtAddSchema = Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    content: {
        type: [String], 
        required: true
    }
}, {timestamps: true})

const ArtAdd = mongoose.model('article-db', ArtAddSchema)
    
module.exports = ArtAdd;