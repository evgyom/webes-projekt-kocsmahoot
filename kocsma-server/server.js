var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
const fs = require("fs");
var mysql = require("mysql");
const util = require("util");
var bodyParser = require("body-parser");
var cron = require("node-cron");

app = express();
var jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.text());

var config = {
  host: "localhost",
  user: "root",
  password: "w5&D9]3[",
};

const mydb = makeDb(config);

/*var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "w5&D9]3["
});*/

app.use(serveStatic("assets/dist"));
var port = process.env.PORT || 8080;
var hostname = "127.0.0.1";

// /get-current-question?pin=953353&boardID=10
app.get("/get-current-question", (req, res) => {
  try {
    (async () => {
      console.log("PIN", req.query.pin);
      const resultAQ = await mydb.query(
        "SELECT activeQuestion FROM activeQuiz WHERE Pin=" +
          mysql.escape(req.query.pin)
      );
      console.log(resultAQ);
      if (resultAQ[0] == null) {
        const resultLB = await mydb.query(
          "SELECT score FROM leaderboard WHERE boardID=" +
            mysql.escape(req.query.boardID)
        );
        if (resultLB[0] == null) {
          res.json({
            finished: 2, //0:running, 1:finished 2:cancelled
          });
        } else {
          res.json({
            finished: 1, //0:running, 1:finished 2:cancelled
            score: resultLB[0].score,
          });
        }
      } else {
        res.json({
          finished: 0, //0:running, 1:finished 2:cancelled
          questionID: resultAQ[0].activeQuestion,
        });
      }
    })();
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// /set-current-question?pin=953353133215&questionID=5
app.get("/set-current-question", (req, res) => {
  try {
    console.log("active question indication received");
    console.log("PIN", req.query.pin);
    console.log("questionID", req.query.questionID);
    mydb.query(
      "UPDATE activeQuiz SET activeQuestion=" +
        mysql.escape(req.query.questionID) +
        " WHERE Pin=" +
        mysql.escape(req.query.pin)
    );
    res.send("OK");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// /cancel?pin=953353133215
app.get("/cancel", (req, res) => {
  try {
    console.log("cancel request received");
    console.log("PIN", req.query.pin);
    mydb.query(
      "DELETE FROM leaderboard WHERE boardID IN (SELECT boardID FROM activeQuiz WHERE Pin=" +
        mysql.escape(req.query.pin) +
        ")"
    );
    mydb.query(
      "DELETE FROM activeQuiz WHERE Pin=" + mysql.escape(req.query.pin)
    );
    res.send("CANCELLED");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.post("/cancel", (req, res) => {
  console.log("cancel post request received");
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
  try {
    console.log("cancel request received");
    console.log("PIN", req.query.pin);
    mydb.query(
      "DELETE FROM leaderboard WHERE boardID IN (SELECT boardID FROM activeQuiz WHERE Pin=" +
        mysql.escape(req.query.pin) +
        ")"
    );
    mydb.query(
      "DELETE FROM activeQuiz WHERE Pin=" + mysql.escape(req.query.pin)
    );
    res.send("CANCELLED");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// /submit-quiz
app.post("/submit-quiz", jsonParser, (req, res) => {
  try {
    (async () => {
      console.log("guiz submitted");
      console.log(req.body.answers);
      const correctAnswers = await mydb.query(
        "SELECT CA FROM questions WHERE quizID IN (SELECT quizID FROM activeQuiz WHERE Pin=" +
          mysql.escape(req.body.pin) +
          ")"
      );
      console.log(correctAnswers);
      var answers = req.body.answers;
      var score = 0;
      Object.keys(answers).forEach(function (key) {
        //console.log(result[key].CA);
        //console.log(answers[key].answer)
        if (answers[key].answer == correctAnswers[key].CA) {
          score++;
        }
      });
      const resultBoardID = await mydb.query(
        "SELECT boardID FROM activeQuiz WHERE Pin=" + mysql.escape(req.body.pin)
      );
      console.log(resultBoardID);
      await mydb.query(
        "UPDATE leaderboard SET score=" +
          mysql.escape(score) +
          " WHERE boardID=" +
          mysql.escape(resultBoardID[0].boardID)
      );
      await mydb.query(
        "DELETE FROM activeQuiz WHERE Pin=" + mysql.escape(req.body.pin)
      );
      res.json({
        score: score,
      });
    })();
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.get("/quiz-list", (req, res) => {
  try {
    var o = {}; // empty Object
    var kulcs = "list";
    o[kulcs] = []; // empty Array, which you can push() values into
    mydb.query("SELECT * FROM quizList", function (err, result) {
      if (err) throw err;
      Object.keys(result).forEach(function (key) {
        var row = result[key];
        var data = {
          id: row.id,
          title: row.name,
          description: row.description,
        };
        o[kulcs].push(data);
      });
      res.json(o);
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.get("/quiz-questions", function (req, res) {
  try {
    (async () => {
      var o = {}; // empty Object
      console.log(req.query.quizID + "/" + req.query.teamName);
      //generate pin
      var pin;
      do {
        pin = getRandomInt();
        var count = 1;
        const otherRows = await mydb.query(
          "SELECT COUNT(*) AS pinCount FROM activeQuiz WHERE Pin=" +
            mysql.escape(pin)
        );
        //console.log(otherRows[0].pinCount);
        count = otherRows[0].pinCount;
      } while (count != 0);

      console.log("P:" + pin);
      var pinKey = "pin";
      o[pinKey] = pin;

      //Save team into leaderboard
      const resultMax = await mydb.query(
        "SELECT MAX(boardID) AS maxID FROM leaderboard"
      );
      console.log(resultMax);
      var boardID = 0;
      if (resultMax[0].maxID != null) {
        boardID = resultMax[0].maxID + 1;
      }
      await mydb.query(
        "INSERT INTO leaderboard (boardID,teamName,quizID) VALUES ?",
        [[[boardID, req.query.teamName, req.query.quizID]]]
      );

      //Save team into activeQuiz
      await mydb.query(
        "INSERT INTO activeQuiz (Pin, boardID,TeamName,quizID,activeQuestion) VALUES ?",
        [[[pin, boardID, req.query.teamName, req.query.quizID, -1]]]
      );

      //generate questions list
      var listKey = "list";
      o[listKey] = []; // empty Array, which you can push() values into
      const selectRows = await mydb.query(
        "SELECT * FROM questions WHERE quizID=" + mysql.escape(req.query.quizID)
      );
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
          CA: row.CA,
        };
        o[listKey].push(data);
      });
      res.json(o);
    })();
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.get("/join-game", (req, res) => {
  try {
    (async () => {
      var o = {}; // empty Object
      var validPinKey = "validPin";

      //Teamname
      const selectRows = await mydb.query(
        "SELECT boardID, TeamName, activeQuestion FROM activeQuiz WHERE Pin=" +
          mysql.escape(req.query.pin)
      );
      console.log(selectRows);
      if (selectRows[0] != null) {
        var nameKey = "teamName";
        o[nameKey] = selectRows[0].TeamName;
        var idKey = "boardID";
        o[idKey] = selectRows[0].boardID;
        var aqKey = "activeQuestion";
        o[aqKey] = selectRows[0].activeQuestion;

        var listKey = "list";
        o[listKey] = []; // empty Array, which you can push() values into
        const select2Rows = await mydb.query(
          "SELECT * FROM questions WHERE quizID IN (SELECT quizID FROM activeQuiz WHERE Pin=" +
            mysql.escape(req.query.pin) +
            ")"
        );
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
            CA: row.CA,
          };
          o[listKey].push(data);
        });
        o[validPinKey] = 1;
      } else {
        o[validPinKey] = 0;
      }
      res.json(o);
    })();
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

app.get("/get-leaderboard", (req, res) => {
  try {
    (async () => {
      var o = {}; // empty Object

      //var row = idRows[key];
      const selectRows = await mydb.query(
        "SELECT * FROM leaderboard ORDER BY quizID, score DESC"
      );
      //console.log(selectRows);

      const quizresult = await mydb.query(
        "SELECT COUNT(*) AS count FROM quizList"
      );
      var quizCount = quizresult[0].count;

      var listKey = "list";
      o[listKey] = [];
      var teamKey = "teams";
      var count = 0;
      var prevID = 0;
      for (let i = 1; i < quizCount + 1; i++) {
        let team = [];
        Object.keys(selectRows).forEach(function (key) {
          var row = selectRows[key];
          if (row.quizID == i) {
            if (prevID != row.quizID) {
              prevID = row.quizID;
              count = 0;
            }
            if (count < 3) {
              var data = {
                TeamName: row.TeamName,
                score: row.score,
              };
              team.push(data);
              count++;
            }
          }
        });
        const quizName = await mydb.query(
          "SELECT name FROM quizList WHERE id=" + mysql.escape(i)
        );
        const questionCount = await mydb.query(
          "SELECT COUNT(*) AS count FROM questions WHERE quizID=" +
            mysql.escape(i)
        );
        var quiz = {
          quizName: quizName[0].name,
          count: questionCount[0].count,
          teams: team,
        };
        o[listKey].push(quiz);
      }

      /*var quizKey;
        var count = 0;
        var prevID = 1;
        Object.keys(selectRows).forEach(function (key) {
           var row = selectRows[key];
           //console.log(row)
           if (prevID != row.quizID) {
              quizKey = "quiz" + row.quizID;
              o[quizKey] = [];
              prevID = row.quizID;
              count = 0;
           }
           if (count < 3) {
              var data = {
                 TeamName: row.TeamName,
                 score: row.score
              };
              o[quizKey].push(data);
              count++;
           }
        });*/
      res.json(o);
    })();
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

/** Redirects **/
app.get("/*", function (req, res) {
  res.redirect("/");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  const start = Date.now();
  console.log("Start time", start);

  cron.schedule("* * * * *", () => {
    console.log("running a task every day");
  });

  (async () => {
    const result1 = await mydb.query("CREATE DATABASE IF NOT EXISTS mydb");
    console.log("Database created");
    const result2 = await mydb.query("USE mydb");
    console.log("Database used");

    /*const result32= mydb.query("DROP TABLE activeQuiz");
      console.log("Droped");*/

    //quizList
    const result3 = await mydb.query(
      "SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'quizList'"
    );
    //console.log(result[0].namesCount);
    if (result3[0].namesCount == 0) {
      const result4 = await mydb.query(
        "CREATE TABLE quizList (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description VARCHAR(511))"
      );
      //console.log(result4)
      console.log("Table quiz-list created");
      const result5 = await mydb.query(
        "INSERT INTO quizList (name,description) VALUES ?",
        [quizek]
      );
    }

    //Questions
    const result6 = await mydb.query(
      "SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'questions'"
    );
    //console.log(result6);
    if (result6[0].namesCount == 0) {
      const result7 = await mydb.query(
        "CREATE TABLE questions (quizID INT, questionID INT AUTO_INCREMENT PRIMARY KEY, layoutID INT, question VARCHAR(255), A1 VARCHAR(255), A2 VARCHAR(255), A3 VARCHAR(255), A4 VARCHAR(255), CA INT)"
      );
      //console.log(result7)
      console.log("Table questions created");
      const result8 = await mydb.query(
        "INSERT INTO questions (quizID,layoutID,question,A1,A2,A3,A4,CA) VALUES ?",
        [kerdesek]
      );
    }

    //Active Quizes
    const result9 = await mydb.query(
      "SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'activeQuiz'"
    );
    //console.log(result[0].namesCount);
    if (result9[0].namesCount == 0) {
      const result10 = await mydb.query(
        "CREATE TABLE activeQuiz (Pin INT PRIMARY KEY, boardID INT, TeamName VARCHAR(255), quizID INT, activeQuestion INT)"
      );
      console.log("Table activeQuiz created");
    }

    //LeaderBoard
    const result11 = await mydb.query(
      "SELECT COUNT(*) AS namesCount FROM information_schema.tables WHERE table_schema = 'mydb' AND table_name = 'leaderboard'"
    );
    //console.log(result[0].namesCount);
    if (result11[0].namesCount == 0) {
      const result12 = await mydb.query(
        "CREATE TABLE leaderboard (boardID INT PRIMARY KEY, TeamName VARCHAR(255), quizID INT, score INT)"
      );
      console.log("Table leaderboard created");
    }
    //const result13 = await mydb.query("INSERT INTO leaderboard (boardID, TeamName,quizID,score) VALUES ?", [csapatok])
    //await mydb.query("INSERT INTO activeQuiz (Pin,teamName,quizID,activeQuestion) VALUES ?", [[[123456, "ASD", 1, 0]]]);
  })();
});

var quizek = [
  ["Demo quiz 1", "Ez egy szemléltető quiz. Ez az első szemléltető quiz"],
  ["Demo quiz 2", "Ez egy szemléltető quiz. Ez a második szemléltető quiz"],
  ["Vonatos quiz", "A quiz néhány ikonikus MÁV mozdonyhoz kapcsolódik."],
];

//layoutID: 0:choice, 1:true-false, 2:numeric
//CA (correct answer): 1,2,3,4

var kerdesek = [
  [
    1,
    0,
    "Mikor kapta a nevét a MOGI tanszéket?",
    "1957",
    "2000",
    "1985",
    "2007",
    4,
  ],
  [1, 1, "A gyógysör segít?", null, null, null, null, 1],
  [1, 2, "Hány lába van egy tapírnak?", null, null, null, null, 4],
  [
    2,
    0,
    "Zene nélkül mit érek én?",
    "én",
    "én",
    "én",
    "Csontfájdító dzsúsz",
    4,
  ],
  [
    2,
    1,
    "Igaz-e a következő állítás? A tyúk előbb volt, mint a tojás.",
    null,
    null,
    null,
    null,
    1,
  ],
  [
    2,
    2,
    "Melyik évben született mindenki közös példaképe, Schmuck Andor?",
    null,
    null,
    null,
    null,
    1970,
  ],
  [
    3,
    0,
    "Melyik a legfiatalabb MÁV dízelmozdony?",
    "Taurus",
    "Szili",
    "Traxx",
    "Gigant",
    3,
  ],
  [
    3,
    2,
    "Összesen hány évnyit késtek a MÁV járatok 2018-ban?",
    null,
    null,
    null,
    null,
    4,
  ],
];

var csapatok = [
  [12, "Team1", 1, 20],
  [13, "Team2", 1, 30],
  [14, "Team3", 1, 20],
  [15, "Team4", 1, 13],
  [16, "Team5", 1, 5],
  [17, "Team6", 2, 13],
  [18, "Team7", 2, 64],
  [19, "Team8", 3, 43],
  [20, "Team9", 3, 23],
];

function getRandomInt() {
  return Math.floor(Math.random() * 1000000);
}

function makeDb(config) {
  const connection = mysql.createConnection(config);
  return {
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
}
