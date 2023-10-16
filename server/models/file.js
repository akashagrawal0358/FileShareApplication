
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required : true},
    name: {
        type: String,
        required : true
    },
    downloadContent: {
        type: Number,
        required: true ,
        default: 0
    }

})
// Create a model based on Schema
// file is name of Collection
const File = mongoose.model('file', fileSchema)

module.exports = File;