const utils = require("./utils.js");

class Logger {
  constructor(game) {
    this.game = game;
  }

  log_character(person) {
    if (person.debug) {
      console.log(person);
    }
  }

  log_initialization(person) {
    if (person.debug) {
      console.log("Id: ", person.id);
      console.log("Sexe: ", person.gender === "M" ? "Homme" : "Femme");
      console.log("Sexualité: ", person.sexuality);
      console.log("Nom: ", person.firstname, person.lastname);
      console.log("Ville: ", person.city);
      console.log(
        "Education: ",
        utils.emojis_from_number("🎓", person.education_level, 5)
      );
      console.log("Logique: " + person.traits.logic + "/10");
      console.log("Créativité: " + person.traits.creativity + "/10");
      console.log("Sociabilité: " + person.traits.sociability + "/10");
      console.log("Bienveillance: " + person.traits.kindness + "/10");
      console.log("Jovialité: " + person.traits.kindness + "/10");
      console.log("Humour: " + person.traits.humor + "/10");
      console.log("Romantisme: " + person.traits.romantism + "/10");
      console.log("Spontaneité: " + person.traits.spontaneity + "/10");
      console.log("Dynamisme: " + person.traits.dynamism + "/10");
      console.log(
        "Intérêts: " +
          person.interests.map(function(i) {
            return i.name;
          })
      );
    }
  }

  log_job(person) {
    if (person.debug) {
      console.log(
        "Jour ",
        person.age,
        ": J'ai trouvé un travail ! Je suis maintenant",
        person.job + " chez " + person.company.name
      );
    }
  }

  log_end(person) {
    if (person.debug) {
      console.log(
        person.firstname +
          " " +
          person.lastname +
          " est " +
          (person.gender === "M" ? "mort" : "morte") +
          " à " +
          utils.years_from_days(person.age)
      );
      Object.keys(person.relationships).forEach(
        function(key) {
          let relationship = person.relationships[key];
          let buddy = this.game.characters[key];
          console.log(
            buddy.firstname,
            buddy.lastname,
            ":",
            relationship.level,
            "(",
            relationship.type,
            ")"
          );
        }.bind(this)
      );
      //console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
      console.log(
        "Connaissances: " +
          Object.keys(person.relationships).length +
          "/" +
          Object.keys(person.game.characters).length
      );
      console.log("===========");
    }
  }

  log_relationships(person) {
    if (person.debug) {
      //console.log("Relations: ", this.relationships);
    }
  }

  log_day(person) {
    if (person.debug) {
      //console.log("Jour " + this.age);
    }
  }
  log_love(person) {
    if (person.debug) {
      console.log(
        "Jour " +
          person.age +
          ": J'ai trouvé l'amour avec " +
          person.in_love_with.firstname +
          " " +
          person.in_love_with.lastname
      );
    }
  }
}

module.exports = Logger;
