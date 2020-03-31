const express = require('express')
const router = express.Router()

// Get all blog posts
router.get('/', (req, res) => {
    res.send('Hello Homies')
})

// Get single blog post
router.get('/:id', (req, res) => {
})

// Create a blog post
router.post('/', (req, res) => {
})

// Edit a blog post
router.patch('/:id', (req, res) => {
})

// Delete a blog post
router.delete('/:id', (req, res) => {
})

module.exports = router