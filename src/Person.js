const DATA = require("./data.js");
const utils = require("./utils.js");

class Person {
  constructor({ id, parent_1, parent_2, type, game, debug }) {
    this.id = id;
    this.game = game;
    this.debug = debug;
    this.parent_1 = parent_1; //Should_be_ids
    this.parent_2 = parent_2;
    this.type = type;
    this.kids = []; //Ids too
    this.is_alive = true;
    this.relationships = {};
    this.in_love_with = null;
    this.job = null;
    this.company = null;
    this.education_level = 0;
    this.school_success = 0;
    this.timeline = [{ type: "birth", data: { date: this.game.days } }];

    this.gender = utils.boolean_from_random(DATA.STAT_MEN) ? "M" : "F";
    let sexuality_index = utils.index_from_random(
      DATA.STAT_SEXUALITY[this.gender].map(function(s) {
        return s.percentage;
      })
    );

    this.sexuality = DATA.STAT_SEXUALITY[this.gender][sexuality_index].name;

    this.firstname = utils.random_item(DATA.FIRSTNAMES[this.gender]);

    if (type === "random") {
      this.initialize_from_nothing();
    } else if (type === "genetic") {
      this.initialize_from_parents();
    } else if (type === "adoption") {
      this.initialize_from_adoption();
    }

    this.generate_interests_from_traits();

    this.game.logger.log_initialization(this);

    setTimeout(
      function() {
        this.live_day();
      }.bind(this),
      5000
    );
  }

  generate_interests_from_traits() {
    this.interests = utils
      .profile_distances_from_array(this.traits, DATA.INTERESTS)
      .sort(function(a, b) {
        return a.distance - b.distance;
      })
      .slice(0, 2);
  }

  initialize_from_nothing() {
    this.age = 9125; //Is equal à 25 years old
    this.stage_of_life = "adult";
    this.remaining_days = DATA.MAX_AGE - 9125;
    this.lastname = utils.random_item(DATA.LASTNAMES);
    //this.city = utils.random_item(DATA.CITIES);
    this.city = DATA.CITIES[0];
    this.traits = {
      logic: utils.random_integer(1, 10),
      creativity: utils.random_integer(1, 10),
      sociability: utils.random_integer(1, 10),
      kindness: utils.random_integer(1, 10),
      joviality: utils.random_integer(1, 10),
      humor: utils.random_integer(1, 10),
      romantism: utils.random_integer(1, 10),
      spontaneity: utils.random_integer(1, 10),
      dynamism: utils.random_integer(1, 10),
      ego: utils.random_integer(1, 10),
      sanity: utils.random_integer(1, 10),
      perfectionism: utils.random_integer(1, 10),
      openness: utils.random_integer(1, 10)
    };
    this.education_level = utils.random_integer(0, 5);
  }

  initialize_from_adoption() {
    this.initialize_from_nothing();
    this.age = 1642; //Is equal à 25 years old
    this.stage_of_life = "child";
    this.lastname = this.game.characters[this.parent_1].lastname;
    this.city = this.game.characters[this.parent_1].city;
  }

  initialize_from_parents() {
    this.age = 0;
    this.stage_of_life = "baby";
    this.remaining_days = DATA.MAX_AGE;
    this.lastname = this.game.characters[this.parent_1].lastname;
    //this.city = utils.random_item(DATA.CITIES);
    this.city = this.parent_1.city;
    this.traits = {
      logic: utils.mean([
        this.game.characters[this.parent_1].traits.logic,
        this.game.characters[this.parent_2].traits.logic
      ]),
      creativity: utils.mean([
        this.game.characters[this.parent_1].traits.creativity,
        this.game.characters[this.parent_2].traits.creativity
      ]),
      sociability: utils.mean([
        this.game.characters[this.parent_1].traits.sociability,
        this.game.characters[this.parent_2].traits.sociability
      ]),
      kindness: utils.mean([
        this.game.characters[this.parent_1].traits.kindness,
        this.game.characters[this.parent_2].traits.kindness
      ]),
      joviality: utils.mean([
        this.game.characters[this.parent_1].traits.joviality,
        this.game.characters[this.parent_2].traits.joviality
      ]),
      humor: utils.mean([
        this.game.characters[this.parent_1].traits.humor,
        this.game.characters[this.parent_2].traits.humor
      ]),
      romantism: utils.mean([
        this.game.characters[this.parent_1].traits.romantism,
        this.game.characters[this.parent_2].traits.romantism
      ]),
      spontaneity: utils.mean([
        this.game.characters[this.parent_1].traits.spontaneity,
        this.game.characters[this.parent_2].traits.spontaneity
      ]),
      dynamism: utils.mean([
        this.game.characters[this.parent_1].traits.dynamism,
        this.game.characters[this.parent_2].traits.dynamism
      ]),
      ego: utils.mean([
        this.game.characters[this.parent_1].traits.ego,
        this.game.characters[this.parent_2].traits.ego
      ]),
      sanity: utils.mean([
        this.game.characters[this.parent_1].traits.sanity,
        this.game.characters[this.parent_2].traits.sanity
      ]),
      perfectionism: utils.mean([
        this.game.characters[this.parent_1].traits.perfectionism,
        this.game.characters[this.parent_2].traits.perfectionism
      ]),
      openness: utils.mean([
        this.game.characters[this.parent_1].traits.openness,
        this.game.characters[this.parent_2].traits.openness
      ])
    };
  }

  compute_job() {
    if (
      !this.job &&
      (this.stage_of_life === "adult" || this.stage_of_life === "young_adult")
    ) {
      let employed = utils.boolean_from_random(
        DATA.STAT_EMPLOYMENT[this.education_level]
      );
      if (employed) {
        let job = utils.random_item(DATA.JOBS[this.education_level]);
        this.job = job[this.gender];
        this.company = utils.random_item(job.companies);
        this.game.logger.log_job(this);
        this.timeline.push({
          type: "new_job",
          data: { age: this.age, job: this.job, company: this.company }
        });
      }
    }
  }

  random_life_shit() {
    let years = this.age / 365;
    let shit = 0;
    let shit_gravity = 0;
    let shit_chance = Math.random();
    if (shit_chance < 0.0001) {
      if (years < 25) {
        shit = 5;
        shit_gravity = Math.random() * 50;
      } else if (years < 50) {
        shit = 15;
        shit_gravity = Math.random() * 150;
      } else if (years < 80) {
        shit = 50;
        shit_gravity = Math.random() * 500;
      } else {
        shit = 100;
        shit_gravity = Math.random() * 1000;
      }
    }
    /*if (shit > 0) {
      console.log(
        "Jour " +
          this.age +
          ": Merde arrivée: -" +
          shit * shit _gravity +
          "jours de vie"
      );
    }*/
    return shit * shit_gravity;
  }

  compute_death() {
    this.remaining_days -= 1; //Mandatory, you can't live forever
    this.remaining_days -= this.random_life_shit(); //Because life is a bitch
    this.is_alive = this.remaining_days > 0;
    if (!this.is_alive) {
      this.timeline.push({ type: "death", data: { age: this.age } });
      this.game.logger.log_end(this);
      this.game.logger.log_character(this);
    }
  }

  compute_sexual_compatibility(person) {
    if (
      this.game.characters[this.in_love_with] ||
      this.game.characters[person.in_love_with] ||
      ["young_adult", "adult", "elder"].indexOf(this.stage_of_life) === -1
    ) {
      return false;
    } else {
      let same_gender = this.gender === person.gender;
      /* console.log("Moi:" + this.gender + " " + this.sexuality);
      console.log("L'autre:" + person.gender + " " + person.sexuality);
      console.log(same_gender);*/
      switch (this.sexuality) {
        case "hetero": {
          let compatibility =
            !same_gender && ["hetero", "bi"].indexOf(person.sexuality) > -1;
          //console.log("Hetero compatible: " + compatibility);
          return compatibility;
        }
        case "homo": {
          let compatibility =
            same_gender && ["homo", "bi"].indexOf(person.sexuality) > -1;
          // console.log("Hetero compatible: " + compatibility);
          return compatibility;
        }
        case "bi": {
          let compatibility =
            (same_gender && ["homo", "bi"].indexOf(person.sexuality) > -1) ||
            (!same_gender && ["hetero", "bi"].indexOf(person.sexuality) > -1);
          //console.log("Hetero compatible: " + compatibility);
          return compatibility;
        }
        default: {
          throw new Error("Sexuality unknown: " + this.sexuality);
        }
      }
    }
  }

  compute_social_contacts() {
    Object.keys(this.relationships).forEach(
      function(key) {
        let person = this.game.characters[key];
        let bonus_job =
          this.job && this.job === person.job ? DATA.BONUS_CONTACT_JOB : 0;
        let bonus_company =
          this.company && this.company === person.company
            ? DATA.BONUS_CONTACT_COMPANY
            : 0;
        let bonus_interest =
          utils.matching_items(this.interests, person.interests).length *
          DATA.BONUS_CONTACT_INTEREST;
        let chance_to_contact = utils.boolean_from_random(
          DATA.STAT_CONTACT + bonus_company + bonus_job + bonus_interest
        );
        if (chance_to_contact) {
          this.relationships[key].level +=
            this.relationships[key].level < 100 ? 1 : 0;
        }
        if (this.relationships[key].type === "loved_one") {
          if (this.relationships[key].level === 100) {
            this.have_child();
          }
        } else {
          if (this.relationships[key].level > 80) {
            if (this.compute_sexual_compatibility(person)) {
              this.relationships[key].type = "loved_one";
              this.in_love_with = key;
              this.game.characters[this.in_love_with].in_love_with = this.id;
              this.game.logger.log_love(this);
              this.timeline.push({
                type: "found_love",
                data: {
                  age: this.age,
                  person: {
                    id: this.in_love_with,
                    firstname: person.firstname,
                    lastname: person.lastname
                  }
                }
              });
              this.game.characters[this.in_love_with].timeline.push({
                type: "found_love",
                data: {
                  age: this.age,
                  person: {
                    id: this.id,
                    firstname: this.firstname,
                    lastname: this.lastname
                  }
                }
              });
            } else {
              this.relationships[key].type = "best_friend";
            }
          } else if (this.relationships[key].level > 60) {
            this.relationships[key].type = "friend";
          } else if (this.relationships[key].level > 40) {
            this.relationships[key].type = "buddy";
          } else if (this.relationships[key].level < 0) {
            this.relationships[key].type = "enemy";
          }
        }
      }.bind(this)
    );
  }

  add_new_relationship(person) {
    if (!this.relationships[person.id]) {
      this.relationships[person.id] = {
        started: this.age,
        type: "acquaintance",
        level: 0,
        person: person.id
      };
      person.add_new_relationship(this);
    }
  }

  compute_new_relationships() {
    let people = Object.keys(this.game.characters)
      .map(
        function(key) {
          return this.game.characters[key];
        }.bind(this)
      )
      .filter(
        function(character) {
          return character.city === this.city;
        }.bind(this)
      ); //People from my city
    people.forEach(
      function(person) {
        if (!this.relationships[person.id] && this.id !== person.id) {
          //Can't meet yourself, at least without skyzophrenia
          let bonus_job =
            this.job != null && this.job === person.job
              ? DATA.BONUS_MEET_JOB
              : 0;
          let bonus_company =
            this.company && this.company === person.company
              ? DATA.BONUS_MEET_COMPANY
              : 0;
          let bonus_interest =
            utils.matching_items(this.interests, person.interests).length *
            DATA.BONUS_MEET_INTEREST;
          let chance_to_meet = utils.boolean_from_random(
            DATA.STAT_MEET + bonus_company + bonus_job + bonus_interest
          );
          if (chance_to_meet) {
            this.game.logger.log_relationships(this);
            this.add_new_relationship(person);
          }
        }
      }.bind(this)
    );
  }

  add_child(child) {
    this.kids.push(child.id);
    this.timeline.push({
      type: "new_child",
      data: {
        age: this.age,
        child: {
          id: child.id,
          firstname: child.firstname,
          lastname: child.lastname
        }
      }
    });
    this.game.characters[this.in_love_with].timeline.push({
      type: "new_child",
      data: {
        age: this.game.characters[this.in_love_with].age,
        child: {
          id: child.id,
          firstname: child.firstname,
          lastname: child.lastname
        }
      }
    });
    this.game.characters[this.in_love_with].kids.push(child.id);
  }

  have_child() {
    if (this.kids.length < 2) {
      let id =
        this.id +
        "+" +
        this.game.characters[this.in_love_with].id +
        "#" +
        this.kids.length;
      let genetic = this.gender !== this.in_love_with.gender;
      let p = new Person({
        id: id,
        parent_1: this.id,
        parent_2: this.in_love_with,
        type: genetic ? "genetic" : "adoption",
        game: this.game,
        debug: this.debug
      });
      this.game.add_character(p);
      this.add_child(p);
    }
  }

  compute_studies() {
    if (
      this.stage_of_life === "child" ||
      this.stage_of_life === "teen" ||
      this.stage_of_life === "young_adult"
    ) {
      /*DATA.COURSES.forEach(function(course) {
        var distance = Object.keys(course.profile).reduce(
          function(d, trait_key) {
            d += course.profile[trait_key] - this.traits[trait_key];
            return d;
          }.bind(this),
          0
        );
        if (utils.boolean_from_random(DATA.STAT_COURSE_BONUS)) {
          if (distance <= 0) {
            this.traits[course.bonus] += DATA.COURSE_BONUS;
            this.school_success += DATA.SCHOOL_BONUS;
          } else {
            this.traits[course.bonus] -= DATA.COURSE_BONUS / 2;
            this.school_success -= DATA.SCHOOL_BONUS / 2;
          }
        }
      });*/
      /*this.traits.logic += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;
      this.traits.creativity += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;
      this.traits.sociability += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;
      this.traits.joviality += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;
      this.traits.romantism += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;
      this.traits.perfectionism += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;
      this.traits.opennes += utils.boolean_from_random(70)
        ? Math.random() * DATA.COURSE_BONUS
        : -Math.random() * DATA.COURSE_BONUS;*/
      //can learn things
      //Sociabilité compte beaucoup dans l'école
      //Maths -> Logique -Dynamisme
      //Français/Littérature -> Mémoire/Romantisme  Perfectionnisme -Dynamisme
      //Langues étrangère -> Perfectionnism, ouverture, sociability
      //Sport -> Dynamisme, Sociabilité
      //Art -> Créativité, Curiosité, Romantisme, Perfectionnisme
      // Histoire/Géographie -> Ouverture, perfectionism
      //Science et techno -> Logic, Ouverture, Creativité
      //logic++
      //creativity++
      //sociability++
      //joviality++
      //romantism++
      //perfectionnism++
      //openness
      //Compare les traits des matières par rapport aux traits de l'enfant
      //Si les deux sont compatibles -> réussite scolaire 000000.1 par matière (ça peut baisser aussi)
      //Au dessus d'une certaine réussite dans une matière, on va gagner des points sur les traits concernés
      //
    }
  }

  live_day() {
    if (this.is_alive) {
      this.age++;
      if (this.age < 3 * 365) {
        this.stage_of_life = "baby";
      } else if (this.age < 12) {
        this.stage_of_life = "child";
      } else if (this.age < 18) {
        this.stage_of_life = "teen";
      } else if (this.age < 25) {
        this.stage_of_life = "young_adult";
      } else if (this.age < 70) {
        this.stage_of_life = "adult";
      } else {
        this.stage_of_life = "elder";
      }
      if (this.game) {
        this.game.logger.log_day(this);
      }
      if (!this.game) {
        console.log("Null Game", this.constructor.name);
      }
      this.compute_job();
      this.compute_studies();
      this.compute_new_relationships();
      this.compute_social_contacts();
      this.compute_death();
      /*process.nextTick(
        function() {
          this.live_day();
        }.bind(this)
      );*/
    }
  }
}
module.exports = Person;
