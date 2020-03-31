const express = require('express')
const router = express.Router()

// Get all beard images
router.get('/', (req, res) => {
    res.send('Hello Images')
})

// Get single beard image
router.get('/:id', (req, res) => {
})

// Upload a beard image
router.post('/', (req, res) => {
})

// Edit a beard image
router.patch('/:id', (req, res) => {
})

// Delete a beard image
router.delete('/:id', (req, res) => {
})

module.exports = router