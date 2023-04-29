// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set up server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
})

// Set up data
var comments = [
  {
    "id": 1,
    "author": "Pete Hunt",
    "text": "This is one comment"
  },
  {
    "id": 2,
    "author": "Jordan Walke",
    "text": "This is *another* comment"
  }
];

// Set up routes
app.get('/api/comments', function (req, res) {
  res.json(comments);
});

app.post('/api/comments', function (req, res) {
  var comment = {
    "id": Date.now(),
    "author": req.body.author,
    "text": req.body.text
  };

  comments.push(comment);
  res.json(comments);
});

app.get('/api/comments/:id', function (req, res) {
  var id = req.params.id;
  var comment = comments.filter(function (comment) {
    return comment.id == id;
  })[0];

  res.json(comment);
});

app.put('/api/comments/:id', function (req, res) {
  var id = req.params.id;
  var comment = comments.filter(function (comment) {
    return comment.id == id;
  })[0];

  comment.author = req.body.author || comment.author;
  comment.text = req.body.text || comment.text;

  res.json(comment);
});

app.delete('/api/comments/:id', function (req, res) {
  var id = req.params.id;
  comments = comments.filter(function (comment) {
    return comment.id != id;
  });

  res.json(comments);
});

// Set up static files
app.use(express.static('public'));
