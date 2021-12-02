var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const fs = require('fs');

app = express();

app.use(serveStatic("assets/dist"));
var port = process.env.PORT || 8080;
var hostname = '127.0.0.1';

app.get('/quiz-list', (req, res) => {
   fs.readFile('assets/static-json/dummy_list_of_quizzes.json', (err, data) => {
      if (err) throw err;
      let list_of_quizzes = JSON.parse(data);
      res.json(list_of_quizzes);
   });
});

app.get('/quiz-questions', (req, res) => {
   fs.readFile('assets/static-json/dummy_questions.json', (err, data) => {
      if (err) throw err;
      let list_of_quizzes = JSON.parse(data);
      res.json(list_of_quizzes);
   });
});

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
