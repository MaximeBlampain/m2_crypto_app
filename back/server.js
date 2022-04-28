const express = require("express")
const connectDatabase = require("./utils/Sequelize")
const config = require("./config.json")

const app = express()

const { PORT } = config

/* Routes */
require('./routes/CryptoAssetRoutes')(app)
require('./routes/UserRoutes')(app)

app.get("/", (req, res) => res.send("Hello World"))

app.listen(PORT, () => {
  connectDatabase()
    .then(() => {
    console.log(`### Start server at PORT : ${PORT} ###`)
  })
    .catch(() => {
      console.error(`An error occurred while server try to start`)
    })
})


