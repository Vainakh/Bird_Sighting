const express = require('express')
const birds = express.Router()

const Bird = require('../models/birds.js')

// INDEX
birds.get('/', async (req, res) => {
  try {
    const birds = await Bird.find()
    res.status(200).json(birds)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// CREATE
birds.post('/', async (req, res) => {
  console.log("Hello World")
  console.log(req.body);
  Bird.create(req.body, (error, success) => {
    res.status(201).json(success);
    console.log(error);
  })
})

// DELETE
birds.delete('/:id', async (req, res) => {
  try {
    const deleteBird = await Bird.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteBird)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// EDIT
birds.put('/:id', async (req, res) => {
  try {
    const updateBird = await Bird.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateBird)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

module.exports = birds
