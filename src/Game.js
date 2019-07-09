const Person = require("./Person.js");
const Logger = require("./Logger.js");
const utils = require("./utils.js");

class Game {
  constructor() {
    this.simulation_time_start = new Date();
    this.simulation_time_end = null;
    this.has_ended = false;
    this.days = 730000;
    this.days_max = 800000;
    this.characters_count = 100;
    //this.watching_index = utils.random_integer(0, this.characters_count - 1);
    this.watching_index = null;
    this.characters = {};
    this.logger = new Logger(this);
    /*setInterval(function() {
      console.log("shit");
    }, 1000);*/
    this.generate_random_characters();
    this.play();
  }

  get_json() {
    return Object.keys(this.characters).reduce(
      function(result, person_key) {
        let person = Object.assign({}, this.characters[person_key]);
        delete person.game; //this is what causes the this.game.characters is undefined
        result[person.id] = person;
        return result;
      }.bind(this),
      {}
    );
  }

  add_character(person) {
    this.characters[person.id] = person;
  }

  generate_random_characters() {
    for (let index = 0; index < this.characters_count; index++) {
      let p = new Person({
        id: index,
        game: this,
        type: "random",
        debug: index === this.watching_index
      });

      /*if (!this.characters[p.city]) {
        this.characters[p.city] = [];
      }*/

      this.add_character(p);
    }
  }

  play() {
    //Loop through all the persons and live a new day
    for (; this.days < this.days_max; this.days++) {
      Object.keys(this.characters).forEach(
        function(id) {
          this.characters[id].live_day();
        }.bind(this)
      );
    }
    this.simulation_time_end = new Date();
    this.has_ended = true;
    console.log(
      "Personnes totales générées:" +
        Object.keys(this.characters).length +
        " en " +
        (this.simulation_time_end - this.simulation_time_start) / 1000 +
        "s"
    );
  }
}

module.exports = Game;
