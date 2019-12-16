// https://boggy-surprise.glitch.me/

const express = require("express"),
bodyParser = require('body-parser'),
  cors = require("cors"),
  app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// app.use((req, res, next) => {
//   console.log(`ip ${req.ip}`);
//   next();
// })

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint... 
app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});


app.get('/api/whoami', (req, res) => {

  res.json({language: req.headers["accept-language"], ipaddress: req.ip, software: req.headers['user-agent']})
})
const PORT = process.env.PORT || 3002;
// listen for requests
app.listen(PORT, () => {
  console.log("Your app is listening on port " + PORT);
});
