const COMPANIES = {
  jardiland: { name: "Jardiland" },
  auchan: { name: "Auchan" },
  credit_agricole: { name: "Crédit Agricole" },
  cic: { name: "CIC" },
  banque_populaire: { name: "Banque Populaire" },
  ubisoft: { name: "Ubisoft" },
  epic_games: { name: "Epic Games" },
  air_france: { name: "Air France" },
  brussels_airlines: { name: "Brussels Airlines" },
  klm: { name: "KLM" },
  delirium: { name: "Delirium Café" },
  campanile: { name: "Campanile" },
  piscine_municipale: { name: "Piscine municipale" },
  centre_aere: { name: "Centre aéré municipale" },
  deliveroo: { name: "Deliveroo" },
  uber_eats: { name: "Uber Eats" },
  ministere_interieur: { name: "Ministère de l'intérieur" },
  renault: { name: "Renault" },
  saft: { name: "Saft" },
  peugeot: { name: "Peugeot" },
  saniconfort: { name: "SaniConfort" },
  edf: { name: "EDF" },
  enedis: { name: "Enedis" },
  sopra_steria: { name: "Sopra-Steria" },
  soregor: { name: "Soregor" },
  pwc: { name: "PwC" },
  mazars: { name: "Mazars" },
  ernst_young: { name: "Ernst & Young" },
  myseriousgame: { name: "My-Serious-Game" }
};

const JOBS = [
  [
    {
      F: "Caissière",
      M: "Caissier",
      companies: [COMPANIES.jardiland, COMPANIES.auchan]
    },
    {
      F: "Serveuse",
      M: "Serveur",
      companies: [COMPANIES.delirium, COMPANIES.campanile]
    },
    {
      F: "Agent de sécurité",
      M: "Agent de sécurité",
      companies: [
        COMPANIES.ministere_interieur,
        COMPANIES.air_france,
        COMPANIES.brussels_airlines,
        COMPANIES.klm
      ]
    },
    {
      F: "Femme de ménage",
      M: "Homme de ménage",
      companies: [
        COMPANIES.auchan,
        COMPANIES.piscine_municipale,
        COMPANIES.centre_aere
      ]
    },
    {
      F: "Animatrice",
      M: "Animateur",
      companies: [COMPANIES.piscine_municipale, COMPANIES.centre_aere]
    },
    {
      F: "Livreuse",
      M: "Livreur",
      companies: [COMPANIES.deliveroo, COMPANIES.uber_eats]
    }
  ], //Pas de brevet requis
  [
    { F: "Pompière", M: "Pompier", companies: [COMPANIES.ministere_interieur] },
    {
      F: "Jardinière",
      M: "Jardinier",
      companies: [COMPANIES.piscine_municipale, COMPANIES.jardiland]
    },
    {
      F: "Hôtesse de l'air",
      M: "Steward",
      companies: [
        COMPANIES.air_france,
        COMPANIES.brussels_airlines,
        COMPANIES.klm
      ]
    },
    {
      F: "Militaire",
      M: "Militaire",
      companies: [COMPANIES.ministere_interieur]
    },
    {
      F: "Gendarme",
      M: "Gendarme",
      companies: [COMPANIES.ministere_interieur]
    }
  ],
  [
    {
      F: "Secrétaire",
      M: "Secrétaire",
      companies: [
        COMPANIES.ernst_young,
        COMPANIES.myseriousgame,
        COMPANIES.sopra_steria,
        COMPANIES.credit_agricole,
        COMPANIES.ministere_interieur
      ]
    },
    {
      F: "Ouvrière en usine",
      M: "Ouvrier en usine",
      companies: [COMPANIES.saft, COMPANIES.renault, COMPANIES.peugeot]
    },
    {
      F: "Plombière",
      M: "Plombier",
      companies: [COMPANIES.saniconfort]
    },
    {
      F: "Electricienne",
      M: "Electricien",
      companies: [COMPANIES.edf, COMPANIES.enedis]
    }
  ],
  [
    {
      F: "Développeuse Web",
      M: "Développeur Web",
      companies: [
        COMPANIES.sopra_steria,
        COMPANIES.ubisoft,
        COMPANIES.epic_games,
        COMPANIES.myseriousgame
      ]
    },
    {
      F: "Banquier",
      M: "Banquier",
      companies: [COMPANIES.credit_agricole, COMPANIES.cic]
    }
  ],
  [
    {
      F: "Développeuse de jeux",
      M: "Développeur de jeux",
      companies: [
        COMPANIES.ubisoft,
        COMPANIES.epic_games,
        COMPANIES.myseriousgame
      ]
    },
    {
      F: "Conseillère bancaire",
      M: "Conseiller bancaire",
      companies: [COMPANIES.credit_agricole, COMPANIES.cic]
    },
    {
      F: "Comptable",
      M: "Comptable",
      companies: [
        COMPANIES.credit_agricole,
        COMPANIES.cic,
        COMPANIES.myseriousgame,
        COMPANIES.ernst_young,
        COMPANIES.pwc,
        COMPANIES.soregor,
        COMPANIES.mazars
      ]
    }
  ],
  [
    {
      F: "Ingénieure informatique",
      M: "Ingénieur informatique",
      companies: [
        COMPANIES.peugeot,
        COMPANIES.renault,
        COMPANIES.sopra_steria,
        COMPANIES.ubisoft,
        COMPANIES.epic_games,
        COMPANIES.myseriousgame,
        COMPANIES.ministere_interieur
      ]
    },
    {
      F: "Psychologue",
      M: "Psychologue",
      companies: [
        COMPANIES.epic_games,
        COMPANIES.ernst_young,
        COMPANIES.air_france
      ]
    },
    {
      F: "Trader",
      M: "Trader",
      companies: [COMPANIES.credit_agricole, COMPANIES.cic]
    },
    {
      F: "Experte comptable",
      M: "Expert comptable",
      companies: [
        COMPANIES.ernst_young,
        COMPANIES.pwc,
        COMPANIES.soregor,
        COMPANIES.mazars
      ]
    }
  ]
];

const FIRSTNAMES = {
  M: [
    "Bob",
    "Franck",
    "Marcel",
    "John",
    "Milo",
    "Benjamin",
    "Nicolas",
    "Romain",
    "Julien",
    "Steve",
    "Jean",
    "Liam",
    "Kilian",
    "Thomas"
  ],
  F: [
    "Marina",
    "Magalie",
    "Alexa",
    "Elise",
    "Romane",
    "Alice",
    "Zoé",
    "Rose",
    "Mérédith",
    "Violet",
    "Alexandra"
  ]
};

const LASTNAMES = [
  "Dupont",
  "Smith",
  "Maltais",
  "Renard",
  "Vilain",
  "Lefebvre",
  "Morel",
  "Girard",
  "Fournier",
  "Stier"
];

const CITIES = [
  "Tours",
  "Nantes",
  "Paris",
  "Bruxelles",
  "La Rochelle",
  "Strasbourg",
  "Poitiers",
  "Tarbes",
  "Pau",
  "Bayonne",
  "Niort"
];

/*logic: utils.random_integer(1, 10),
    creativity: utils.random_integer(1, 10),
    sociability: utils.random_integer(1, 10),
    kindness: utils.random_integer(1, 10),
    joviality: utils.random_integer(1, 10),
    humor: utils.random_integer(1, 10),
    romantism: utils.random_integer(1, 10),
    spontaneity: utils.random_integer(1, 10),
    dynamism: utils.random_integer(1, 10)*/

const INTERESTS = [
  {
    name: "Ecologie",
    slug: "ecology",
    profile: {
      kindness: 10,
      sociability: 7,
      logic: 6,
      joviality: 5,
      dynamism: 7
    }
  },
  {
    name: "Musique",
    slug: "music",
    profile: {
      creativity: 10,
      sociability: 6
    }
  },
  {
    name: "Magie",
    slug: "magic",
    profile: {
      creativity: 10,
      sociability: 10,
      kindness: 4,
      spontaneity: 8,
      romantism: 5
    }
  },
  {
    name: "Echecs",
    slug: "chess",
    profile: {
      logic: 10,
      dynamism: 2,
      spontaneity: 4
    }
  },
  {
    name: "Technologie",
    slug: "technology",
    profile: {
      logic: 8,
      spontaneity: 7,
      sociability: 4
    }
  },
  {
    name: "Sortir",
    slug: "party",
    profile: {
      sociability: 8,
      romantism: 6,
      joviality: 7,
      dynamism: 10
    }
  },
  {
    name: "Cuisine",
    slug: "cooking",
    profile: {
      kindness: 8,
      sociability: 8,
      creativity: 7
    }
  },
  {
    name: "Cinéma",
    slug: "cinema",
    profile: {
      creativity: 8,
      dynamism: 4
    }
  },
  {
    name: "Sport",
    slug: "sport",
    profile: {
      sociability: 8,
      dynamism: 10
    }
  },
  {
    name: "Jeux",
    slug: "games",
    profile: {
      logic: 8,
      sociability: 8,
      creativity: 6,
      dynamism: 2
    }
  },
  {
    name: "Théatre",
    slug: "theater",
    profile: {
      humour: 6,
      joviality: 7,
      sociability: 9
    }
  },
  {
    name: "Lecture",
    slug: "books",
    profile: {
      creativity: 8,
      dynamism: 2,
      sociability: 3
    }
  },
  {
    name: "Bricolage",
    slug: "do-it-yourself",
    profile: {
      creativity: 8,
      dynamism: 10
    }
  }
];

const COURSES = [
  {
    name: "Maths",
    profile: {
      logic: 5 / 2
    },
    bonus: "logic"
  },
  {
    name: "Français/Litterature",
    profile: {
      romantism: 6.5 / 2,
      perfectionism: 5 / 2
    },
    bonus: "romantism"
  },
  {
    name: "Langues Etrangères",
    profile: {
      openness: 7 / 2,
      perfectionism: 6 / 2,
      sociability: 8 / 2
    },
    bonus: "sociability"
  },
  {
    name: "Sport",
    profile: {
      dynamism: 8 / 2,
      sociability: 5 / 2
    },
    bonus: "dynamism"
  },
  {
    name: "Art",
    profile: {
      creativity: 8 / 2,
      openness: 7 / 2,
      romantism: 5 / 2,
      perfectionism: 6 / 2
    },
    bonus: "creativity"
  },
  {
    name: "Histoire/Géo",
    profile: {
      openness: 6 / 2,
      perfectionism: 8 / 2
    },
    bonus: "perfectionism"
  },
  {
    name: "Sciences",
    profile: {
      logic: 5 / 2,
      openness: 6 / 2,
      creativity: 5 / 2
    },
    bonus: "openness"
  }
];
// Histoire/Géographie -> Ouverture, perfectionism
//Science et techno -> Logic, Ouverture, Creativité

const MAX_AGE = 36525;
const STAT_MEN = 50.4;

const STAT_MEET = 0.0005;
const BONUS_MEET_COMPANY = 1;
const BONUS_MEET_JOB = 0.5;
const BONUS_MEET_INTEREST = 0.2;

const STAT_CONTACT = 0.1;
const BONUS_CONTACT_COMPANY = 0.3;
const BONUS_CONTACT_JOB = 0.07;
const BONUS_CONTACT_INTEREST = 0.15;

const STAT_COURSE_BONUS = 0.05;
const COURSE_BONUS = 5;
const SCHOOL_BONUS = 0.05;

const STAT_EMPLOYMENT = [
  0.4, // Rien
  0.5, //Brevet
  1, //BAC
  2, //BAC+2
  2.5, //BAC+3
  5 //Bac+5
];

/*Dans une enquête représentative sur les résidents de Paris, 
l'IFOP a révélé que 79 % des hommes et 90 % des femmes s'identifient comme hétérosexuels, 
13 % des hommes et 1 % des femmes sont homosexuels, 6 % des hommes et 4 % des femmes 
se considéraient comme bisexuels*/

const STAT_SEXUALITY = {
  F: [
    { name: "hetero", percentage: 94.73 },
    { name: "homo", percentage: 1.05 },
    { name: "bi", percentage: 4.22 }
  ],
  M: [
    { name: "hetero", percentage: 80.61 },
    { name: "homo", percentage: 13.26 },
    { name: "bi", percentage: 6.13 }
  ]
};

module.exports = {
  FIRSTNAMES,
  LASTNAMES,
  JOBS,
  CITIES,
  INTERESTS,
  MAX_AGE,
  STAT_MEN,
  STAT_MEET,
  BONUS_MEET_COMPANY,
  BONUS_MEET_JOB,
  BONUS_MEET_INTEREST,
  STAT_CONTACT,
  BONUS_CONTACT_COMPANY,
  BONUS_CONTACT_JOB,
  BONUS_CONTACT_INTEREST,
  STAT_EMPLOYMENT,
  STAT_SEXUALITY,
  COURSES,
  STAT_COURSE_BONUS,
  COURSE_BONUS,
  SCHOOL_BONUS
};
