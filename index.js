const express = require('express')
const mongoose = require('mongoose')
const router = require('./Routers/router')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/api', router)


async function start () {
  try {
    // await mongoose.connect('mongodb+srv://user:user@cluster0.manp88r.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => {
      console.log('Server started')
    })
  }
  catch (e) {

  }
}

start()