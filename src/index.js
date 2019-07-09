var app = require("express")();
var http = require("http").createServer(app);
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

let g;

app.get("/", function(req, res) {
  if (g) {
    if (g.has_ended) {
      res.json(200, {
        characters: g.get_json(),
        simulation_time: g.simulation_time_end - g.simulation_time_start
      });
    } else {
      res.json(400, new Error(" Simulation not finished running"));
    }
  } else {
    res.json(404, new Error("Game not launched yet."));
  }
});

http.listen(8080, function() {
  console.log("listening  on *8080 ");
});

const Game = require("./Game.js");
g = new Game();
