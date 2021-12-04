var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const fs = require('fs');
var mysql = require('mysql');
const util = require('util');
var bodyParser = require('body-parser')

var config = {
   host: "localhost",
   user: "root",
   password: "w5&D9]3["
};

const mydb = makeDb(config);

/*var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "w5&D9]3["
});*/


 
app = express();
var jsonParser = bodyParser.json();

app.use(serveStatic("assets/dist"));
var port = process.env.PORT || 8080;
var hostname = '127.0.0.1';

app.get('/quiz-list', (req, res) => {
   var o = {} // empty Object
   var kulcs = "list";
   o[kulcs] = []; // empty Array, which you can push() values into
   mydb.query("SELECT * FROM quizList", function (err, result) {
      if (err) throw err;
      Object.keys(result).forEach(function (key) {
         var row = result[key];
         
var data = {
            id: row.id,
            title: row.name,
            description: row.description
         };
         o[kulcs].push(data);
      });
      res.json(o);
   });
});

app.get('/quiz-questions', function (req, res) {
   (async () => {
      var o = {} // empty Object
      console.log(req.query.quizID + "/" + req.query.teamName);
      //generate pin
      var pin;
      do {
         pin = getRandomInt();
         var count = 1;
         const otherRows = await mydb.query("SELECT COUNT(*) AS pinCount FROM activeQuiz WHERE Pin=" + mysql.escape(pin));
         console.log(otherRows[0].pinCount);
         count = otherRows[0].pinCount;
      } while (count != 0);

      console.log("P:" + pin);
      var pinKey = "pin";
      o[pinKey] = pin;
      //Save team into activeQuiz
      const insertRows = await mydb.query("INSERT INTO activeQuiz (Pin,teamName,quizID) VALUES ?", [[[pin, req.query.teamName, req.query.quizID]]]);

      //generate questions list
      var listKey = "list";
      o[listKey] = []; // empty Array, which you can push() values into
      const selectRows = await mydb.query("SELECT * FROM questions WHERE quizID=" + mysql.escape(req.query.quizID));
      Object.keys(selectRows).forEach(function (key) {
         var row = selectRows[key];
         //console.log(row)
         var data = {
            questionID: row.questionID,
            layoutID: row.layoutID,
            question: row.question,
            A1: row.A1,
            A2: row.A2,
            A3: row.A3,
            A4: row.A4,
            CA: row.CA
         };
         o[listKey].push(data);
      });
      res.json(o);
   })();
});

// /active-question?pin=953353133215&questionID=5
app.get('/active-question', (req, res) => {
   console.log("active question indication received")
   console.log("PIN", req.query.pin)
   console.log("questionID", req.query.questionID)
   res.send("OK")
});

// /cancel?pin=953353133215
app.post('/cancel', (req, res) => {
   console.log("cancel request received")
   console.log("PIN", req.query.pin)
   res.send("CANCELLED")
});

// /submit-quiz
app.post('/submit-quiz', jsonParser, (req, res) => {
   console.log("guiz submitted")
   console.log(req.body)
   res.json({
      "result" : 0.8
   });
});

app.get('/join-game', (req, res) => {
   (async () => {
      var o = {} // empty Object
      var validPinKey = "validPin";

      //Teamname
      const selectRows = await mydb.query("SELECT TeamName FROM activeQuiz WHERE Pin=" + mysql.escape(req.query.pin));
      console.log(selectRows);
      if (selectRows[0] != null) {
         var nameKey = "teamName";
         o[nameKey] = selectRows[0].TeamName;

         var listKey = "list";
         o[listKey] = []; // empty Array, which you can push() values into
         const select2Rows = await mydb.query("SELECT * FROM questions WHERE quizID IN (SELECT quizID FROM activeQuiz WHERE Pin=" + mysql.escape(req.query.pin) + ")");
         //console.log(selectRows);

         Object.keys(select2Rows).forEach(function (key) {
            var row = select2Rows[key];
            //console.log(row)
            var data = {
               questionID: row.questionID,
               layoutID: row.layoutID,
               question: row.question,
               A1: row.A1,
               A2: row.A2,
               A3: row.A3,
               A4: row.A4,
               CA: row.CA
            };
            o[listKey].push(data);
         });
         o[validPinKey] = 1;

      } else {
         o[validPinKey] = 0;
      }
      res.json(o);
   })();
});

app.get('/get-leaderboard', (req, res) => {
   (async () => {
      var o = {} // empty Object

   })();
});

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
   (async () => {
      const result1 = await mydb.query("CREATE DATABASE IF NOT EXISTS mydb");
      console.log("Database created");
      const result2 = await mydb.query("USE mydb");
      console.log("Database used");
      /*var sql = "DROP TABLE quizList";
      con.query(sql, function (err, result) {
         if (err) throw err;
         console.log("Droped");
      });*/

      //quizList
      const result3 = await mydb.query("SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'quizList'");
      //console.log(result[0].namesCount);
      if (result3[0].namesCount == 0) {
         const result4 = await mydb.query("CREATE TABLE quizList (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description VARCHAR(511))")
         //console.log(result4)
         console.log("Table quiz-list created");
         const result5 = await mydb.query("INSERT INTO quizList (name,description) VALUES ?", [quizek]);
      }

      //Questions
      const result6 = await mydb.query("SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'questions'");
      //console.log(result6);
      if (result6[0].namesCount == 0) {
         const result7 = await mydb.query("CREATE TABLE questions (quizID INT, questionID INT AUTO_INCREMENT PRIMARY KEY, layoutID INT, question VARCHAR(255), A1 VARCHAR(255), A2 VARCHAR(255), A3 VARCHAR(255), A4 VARCHAR(255), CA INT)");
         //console.log(result7)
         console.log("Table questions created");
         const result8 = await mydb.query("INSERT INTO questions (quizID,layoutID,question,A1,A2,A3,A4,CA) VALUES ?", [kerdesek])
      }

      //Active Quizes
      const result9 = await mydb.query("SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'activeQuiz'");
      //console.log(result[0].namesCount);
      if (result9[0].namesCount == 0) {
         const result10 = await mydb.query("CREATE TABLE activeQuiz (Pin INT PRIMARY KEY, TeamName VARCHAR(255), quizID INT)")
         console.log("Table activeQuiz created");
      }

      //LeaderBoard
      const result11 = await mydb.query("SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'leaderboard'")
      //console.log(result[0].namesCount);
      if (result11[0].namesCount == 0) {
         const result12 = await mydb.query("CREATE TABLE leaderboard (boardID INT AUTO_INCREMENT PRIMARY KEY, TeamName VARCHAR(255), quizID INT, score INT)");
         console.log("Table leaderboard created");
      }
      //const result13 = await mydb.query("INSERT INTO leaderboard (TeamName,quizID,score) VALUES ?", [csapatok])
   })();
});

var quizek = [
   ["Ilyen quiz", "A kormány 480 forintban rögzíti a 95-ös oktánszámú benzin és a dízel literenkénti árát, jelentette be Gulyás Gergely a kormányszóvivői tájékoztatón."],
   ["Olyan quiz", "A Miniszterelnökséget vezető miniszter elmondta, a kormány tanulmányozta a benzinárakat, amik nálunk még mindig az olcsóbak közé tartoznak a kontinensen, alig van pár ország, ahol drágább az üzemanyag, mint nálunk. A benzinár maximalizálására most azért került sor, mert az infláció nagyban függ tőle."],
   ["Vonatos quiz", "A benzin átlagára október 25-én lépte át az 500 forintos lélektani átlagárat, a dízelnél már október 11-től lehetett 500 forint fölött tankolni. Az olaj világpiaci ára hét éve nem volt ilyen magas."]
];

//layoutID: 0:choice, 1:true-false, 2:numeric
//CA (correct answer): 1,2,3,4

var kerdesek = [
   [1, 0, "Zene nélkül mit érek én?", "én", "én", "én", "Csontfájdító dzsúsz", 4],
   [1, 1, "Igaz-e a következő állítás? A tyúk előbb volt, mint a tojás.", null, null, null, null, 1],
   [1, 2, "Melyik évben született mindenki közös példaképe, Schmuck Andor?", null, null, null, null, 1970]
];

var csapatok = [
   ["Team1", 1, 20],
   ["Team2", 1, 30],
   ["Team3", 1, 20],
   ["Team4", 1, 13],
   ["Team5", 1, 5]
];

function getRandomInt() {
   return Math.floor(Math.random() * 1000000);
}

function makeDb(config) {
   const connection = mysql.createConnection(config);
   return {
      query(sql, args) {
         return util.promisify(connection.query)
            .call(connection, sql, args);
      },
      close() {
         return util.promisify(connection.end).call(connection);
      }
   };
}