const express = require('express')
const router = express.Router()
const Image = require('../models/image')

// Get all beard images
router.get('/', async (req, res) => {
    try{
        const images = await Image.find()
        res.json(images)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

// Get single beard image
router.get('/:id', (req, res) => {
})

// Upload a beard image
router.post('/', async (req, res) => {
    const image = new Image({
        title: req.body.title,
        caption: req.body.caption,
        imageUrl: req.body.imageUrl
    })

    try {
        const newImage = await image.save()
        res.status(201).json(newImage)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Edit a beard image
router.patch('/:id', (req, res) => {
})

// Delete a beard image
router.delete('/:id', (req, res) => {
})

module.exports = router