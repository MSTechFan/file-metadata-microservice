const mongoose = require('mongoose')
const {Schema} = mongoose

const fileSchema = new Schema({
    name: String,
    type: String,
    size: Number
})

module.exports = mongoose.model('File', fileSchema)