function mean(arr) {
  let sum = arr.reduce(function(s, nb) {
    s += nb;
    return s;
  }, 0);
  return sum / arr.length;
}

function years_from_days(days) {
  let nb_years;
  let nb_months;
  let nb_days;

  nb_years = days / 365.25;
  nb_months = (days % 365.25) / 30.4375;
  nb_days = (days % 365.25) % 30.4375;

  return (
    Math.floor(nb_years) +
    " ans " +
    Math.floor(nb_months) +
    " mois et " +
    Math.floor(nb_days) +
    " jours "
  );
}

function emojis_from_number(emoji, value, max) {
  let str = "";
  for (let i = 0; i < max; i++) {
    if (i < value) {
      str = str + emoji;
    } else {
      str = str + "❌";
    }
    str += " ";
  }
  return str;
}

function matching_items(arr1, arr2) {
  return arr1.filter(function(item1) {
    return arr2.indexOf(item1) > -1;
  });
}

function boolean_from_random(stat) {
  let rand = Math.random() * 100; //0.524879654422 * 100 => 52.2454865456%
  return rand <= stat;
}

function index_from_random(array) {
  //Array must be made of numbers
  let rand = Math.random() * 100;
  let index = 0;
  let sum = 0;
  while (index < array.length) {
    sum += array[index];
    if (rand <= sum) {
      return index;
    }
    index++;
  }
  throw new Error("Provided array sum isn't equal to 100%");
}

function profile_distances_from_array(profile, array) {
  let distances = array.map(function(interest) {
    let keys = Object.keys(interest.profile);
    let sum = 0;
    for (let index = 0; index < keys.length; index++) {
      let key = keys[index];
      sum += Math.pow(profile[key] - interest.profile[key], 2);
    }
    interest.distance = Math.sqrt(sum);
    return interest;
  });
  return distances;
}

function random_integer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function random_item(arr) {
  let rand = Math.floor(Math.random() * (arr.length - 1));
  return arr[rand];
}

function gaussian_random() {
  let rand = 0;
  let n = 10;
  for (var i = 0; i < n; i += 1) {
    rand += Math.random();
  }

  return rand / n;
}

module.exports = {
  years_from_days,
  emojis_from_number,
  boolean_from_random,
  random_item,
  random_integer,
  gaussian_random,
  index_from_random,
  profile_distances_from_array,
  matching_items,
  mean
};
