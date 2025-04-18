const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json()); // Middleware to parse JSON request body

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', require('./routes/createUser')); // Use createUser route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
