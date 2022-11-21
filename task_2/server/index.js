const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');

// Express Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 4000;
const client = mongodb.MongoClient;

app.get('/', function (req, res) {
  // Get users from the user collection
  MongoClient.connect(
    'mongodb://mongo:27017',
    function (err, db) {
      if (err) {
        console.log(err);
      }
      var dbo = db.db('task_2');
      dbo
        .collection('users')
        .find({})
        .toArray(function (err, result) {
          if (err) {
            console.log(err);
          }
          res.json(result);
        });
    }
  );
});

app.listen(PORT, function () {
  console.log('Your node js server is running on PORT:', PORT);
});
