const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Express Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  try {
    const { numOne, numTwo } = req.body;
    const sum = numOne + numTwo;
    res.send(`The sum of ${numOne} and ${numTwo} is ${sum}`).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
