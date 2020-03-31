require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const blogsRouter = require('./routes/blogs')
app.use('/blogs', blogsRouter)

const imagesRouter = require('./routes/images')
app.use('/images', imagesRouter)

app.listen(3000, () => console.log('server started'))