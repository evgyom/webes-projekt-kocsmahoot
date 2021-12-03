var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const fs = require('fs');
var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "w5&D9]3["
});



app = express();

app.use(serveStatic("assets/dist"));
var port = process.env.PORT || 8080;
var hostname = '127.0.0.1';

app.get('/quiz-list', (req, res) => {
   var o = {} // empty Object
   var kulcs = "list";
   o[kulcs] = []; // empty Array, which you can push() values into
   con.query("SELECT * FROM quizList", function (err, result) {
      if (err) throw err;
      Object.keys(result).forEach(function (key) {
         var row = result[key];
         //console.log(row)
         var data = {
            id: row.id,
            title: row.name,
            description: row.description
         };
         o[kulcs].push(data);
         //console.log(result[1].name);
         //let list_of_quizzes = JSON.parse(data)
      });
      res.json(o);
   });
   
   /*fs.readFile('assets/static-json/dummy_list_of_quizzes.json', (err, data) => {
      if (err) throw err;
      let list_of_quizzes = JSON.parse(data);
      res.json(list_of_quizzes);
   });*/
});

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
   con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
         if (err) throw err;
         console.log("Database created");
      });
      con.query("USE mydb", function (err, result) {
         if (err) throw err;
         console.log("Database used");
      });
      /*var sql = "DROP TABLE quizList";
      con.query(sql, function (err, result) {
         if (err) throw err;
         console.log("Droped");
      });*/

      //quizList
      sql = "SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'quizList'";
      con.query(sql, function (err, result, fields) {
         if (err) throw err;
         //console.log(result[0].namesCount);
         if (result[0].namesCount == 0) {
            var sql = "CREATE TABLE quizList (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description VARCHAR(511))";
            con.query(sql, function (err, result) {
               if (err) throw err;
               console.log(result)
               console.log("Table quiz-list created");
               con.query("INSERT INTO quizList (name,description) VALUES ?", [quizek], function (err, result, fields) {
                  if (err) throw err;
                  //console.log(result);
               });
            });
         }
      });

      //Questions
      sql = "SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'questions'";
      con.query(sql, function (err, result, fields) {
         if (err) throw err;
         //console.log(result[0].namesCount);
         if (result[0].namesCount == 0) {
            var sql = "CREATE TABLE questions (quizID INT, questionID INT AUTO_INCREMENT PRIMARY KEY, layoutID INT, question VARCHAR(255), A1 VARCHAR(255), A2 VARCHAR(255), A3 VARCHAR(255), A4 VARCHAR(255), CA INT)";
            con.query(sql, function (err, result) {
               if (err) throw err;
               console.log(result)
               console.log("Table questions created");
               con.query("INSERT INTO questions (quizID,layoutID,question,A1,A2,A3,A4,CA) VALUES ?", [kerdesek], function (err, result, fields) {
                  if (err) throw err;
                  //console.log(result);
               });
            });
         }
      });
   });
});

var quizek = [
   ["Ilyen quiz", "A kormány 480 forintban rögzíti a 95-ös oktánszámú benzin és a dízel literenkénti árát, jelentette be Gulyás Gergely a kormányszóvivői tájékoztatón."],
   ["Olyan quiz", "A Miniszterelnökséget vezető miniszter elmondta, a kormány tanulmányozta a benzinárakat, amik nálunk még mindig az olcsóbak közé tartoznak a kontinensen, alig van pár ország, ahol drágább az üzemanyag, mint nálunk. A benzinár maximalizálására most azért került sor, mert az infláció nagyban függ tőle."],
   ["Vonatos quiz", "A benzin átlagára október 25-én lépte át az 500 forintos lélektani átlagárat, a dízelnél már október 11-től lehetett 500 forint fölött tankolni. Az olaj világpiaci ára hét éve nem volt ilyen magas."]
];

//layoutID: 0:choice, 1:true-false, 2:numeric
//CA (correct answer): 1,2,3,4

var kerdesek = [
   [1, 0,"Zene nélkül mit érek én?","én","én","én","Csontfájdító dzsúsz",4],
   [1, 1,"Igaz-e a következő állítás? A tyúk előbb volt, mint a tojás.",null,null,null,null,0],
   [1, 2,"Melyik évben született mindenki közös példaképe, Schmuck Andor?",null,null,null,null,1970]
];
