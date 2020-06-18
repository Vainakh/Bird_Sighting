const mongoose = require('mongoose')

const birdSchema = mongoose.Schema({
  type: String,
  origin: String,
  image: String
})

module.exports = mongoose.model('Bird', birdSchema)