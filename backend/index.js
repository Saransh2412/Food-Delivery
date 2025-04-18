const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json()) // Middleware to parse JSON request body
app.use('/api', require("./routes/createUser")); // Import the createUser route
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

