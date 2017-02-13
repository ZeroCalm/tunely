// require express and other modules
var express = require('express'),
    app = express();
    controllers = require('./controllers');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/
//
  var db = require('./models');
//
// /**********
// * ROUTES *
 //**********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));


// get all games
app.get("/api/albums", function findGames(req, res){
  db.Game.find({}, (err, games) => {
    if (err) { return console.log("index error: " + err); }
    res.send(games);
  });
});
//
// // get one game
// app.get('/api/games/:id', function(req, res) {
//   db.Game.findOne({ _id : req.params.id }, function(err, document) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(document);
//     }
//   });
// });
//
//
// /*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile('views/index.html' , {root : __dirname});
  console.log("Welcome you are here!");
});


/*
 * JSON API Endpoints
 */



app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "All About Me"},
      {method: "GET", path: "/api/games", description: "All of the games"}

    ]
  })
});

/**********
 * SERVER *
 **********/


app.listen(process.env.PORT || 3000, funtion()  {
  console.log('Express server is up and running on http://localhost:3000/');
});
