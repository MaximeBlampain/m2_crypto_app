const express = require("express")
const connectDatabase = require("./utils/Sequelize")
const config = require("./config.json")

const app = express()

const { PORT } = config

app.listen(PORT, () => {
  connectDatabase()
    .then(() => {
    console.log(`### Start server at PORT : ${PORT} ###`)
  })
    .catch(() => {
      console.error(`An error occurred while server try to start`)
    })
})


