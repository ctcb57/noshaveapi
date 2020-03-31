const express = require('express')
const router = express.Router()
const BlogPost = require('../models/blogPost')

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find()
        res.json(blogPosts)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

// Get single blog post
router.get('/:id', (req, res) => {
})

// Create a blog post
router.post('/', async (req, res) => {
    const blogPost = new BlogPost({
        title: req.body.title,
        post: req.body.post
    })

    try {
        const newBlogPost = await blogPost.save()
        res.status(201).json(newBlogPost)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Edit a blog post
router.patch('/:id', (req, res) => {
})

// Delete a blog post
router.delete('/:id', (req, res) => {
})

module.exports = router