let english = [
  {
    numb: 1,
    question: `Que signifie "only disable those" en français ?`,
    answer: "désactiver seulement ceux-ci",
    options: shuffleArray([
      "désactiver seulement ceux-ci",
      "uniquement désactiver cela",
      "juste désactiver ceux-là",
      "désactiver uniquement ceux-ci",
    ]),
  },
  {
    numb: 2,
    question: `Comment traduit-on "can set those" en français ?`,
    answer: "peut définir ceux-ci",
    options: shuffleArray([
      "peut définir ceux-ci",
      "peut régler cela",
      "peut établir ceux-là",
      "peut ajuster ceux-ci",
    ]),
  },
  {
    numb: 3,
    question: `Quel verbe signifie "to get" en français ?`,
    answer: "obtenir",
    options: shuffleArray(["donner", "obtenir", "prendre", "perdre"]),
  },
  {
    numb: 4,
    question: `Quel verbe signifie "to break" en français ?`,
    answer: "casser",
    options: shuffleArray(["réparer", "casser", "construire", "détruire"]),
  },
  {
    numb: 5,
    question: `Quel verbe signifie "to forbid" en français ?`,
    answer: "interdire",
    options: shuffleArray(["autoriser", "interdire", "permettre", "obliger"]),
  },
];
let english2 = [
  {
    numb: 1,
    question: `Comment dit-on "spending" en français ?`,
    answer: "dépenser",
    options: shuffleArray([
      "argent",
      "dépenser",
      "consommation",
      "investissement",
    ]),
  },
  {
    numb: 2,
    question: `Quel est le terme pour "particular" en français ?`,
    answer: "particulière",
    options: shuffleArray([
      "unique",
      "particulière",
      "spécial",
      "distinct",
    ]),
  },
  {
    numb: 3,
    question: `Quel verbe signifie "to teach" en français ?`,
    answer: "enseigner",
    options: shuffleArray(["apprendre", "enseigner", "étudier", "lire"]),
  },
  {
    numb: 4,
    question: `Comment traduit-on "disable those" en français ?`,
    answer: "désactiver ceux-ci",
    options: shuffleArray([
      "désactiver ceux-ci",
      "désactiver cela",
      "arrêter ceux-là",
      "éteindre ceux-ci",
    ]),
  },
  {
    numb: 5,
    question: `Quel est le mot pour "families" en français ?`,
    answer: "familles",
    options: shuffleArray(["familles", "groupes", "clans", "parentés"]),
  },
];
let english3 = [
  {
    numb: 1,
    question: `Quel est le terme pour "typically" en français ?`,
    answer: "généralement",
    options: shuffleArray([
      "généralement",
      "souvent",
      "habituellement",
      "typiquement",
    ]),
  },
  {
    numb: 2,
    question: `Quel est le mot pour "brought" en français ?`,
    answer: "apporté",
    options: shuffleArray(["apporté", "amené", "pris", "ramené"]),
  },
  {
    numb: 3,
    question: `Comment dit-on "devices" en français ?`,
    answer: "appareils",
    options: shuffleArray(["disponible", "objets", "machines", "appareils"]),
  },
  {
    numb: 4,
    question: `Que signifie "keynote wrapped" en français ?`,
    answer: "conclusion de la présentation",
    options: shuffleArray([
      "conclusion de la présentation",
      "début de la conférence",
      "fin de l'événement",
      "introduction principale",
    ]),
  },
  {
    numb: 5,
    question: `Comment traduit-on "there is also" en français ?`,
    answer: "il y a aussi",
    options: shuffleArray([
      "il y a aussi",
      "il existe également",
      "il y a également",
      "il y a aussi bien",
    ]),
  },
];
let english4 = [
  {
    numb: 1,
    question: `Quel est le mot pour "slew" en français ?`,
    answer: "une multitude",
    options: shuffleArray([
      "faire pivoter",
      "une multitude",
      "doucement",
      "un changement",
    ]),
  },
  {
    numb: 2,
    question: `Que signifie "what's to come" en français ?`,
    answer: "ce qui est à venir",
    options: shuffleArray([
      "ce qui est à venir",
      "ce qui va arriver",
      "ce qui est prévu",
      "ce qui est futur",
    ]),
  },
  {
    numb: 3,
    question: `Comment dit-on "update" en français ?`,
    answer: "mise à jour",
    options: shuffleArray([
      "mise à jour",
      "actualisation",
      "révision",
      "modification",
    ]),
  },
  {
    numb: 4,
    question: `Quel est le terme pour "The release of" en français ?`,
    answer: "la sortie de",
    options: shuffleArray([
      "la balade de",
      "la sortie de",
      "le lancement de",
      "la déclaration de",
    ]),
  },
  {
    numb: 5,
    question: `Comment traduit-on "feature" en français ?`,
    answer: "fonctionnalité",
    options: shuffleArray([
      "caractère",
      "fonctionnalité",
      "aspect",
      "élément",
    ]),
  },
];
let english5 = [
  {
    numb: 1,
    question: `Que signifie "instead of" en français ?`,
    answer: "au lieu de",
    options: shuffleArray([
      "au lieu de",
      "avec du",
      "sans que",
      "pour que",
    ]),
  },
  {
    numb: 2,
    question: `Comment dit-on "wind down" en français ?`,
    answer: "se détendre",
    options: shuffleArray(["se détendre", "s'endormir", "calmer", "relâcher"]),
  },
  {
    numb: 3,
    question: `Quel est le terme pour "that grey of the screen" en français ?`,
    answer: "ce gris de l'écran",
    options: shuffleArray([
      "ce gris de l'écran",
      "la couleur de l'écran",
      "l'ombre de l'écran",
      "le ton de l'écran",
    ]),
  },
  {
    numb: 4,
    question: `Que signifie "avoid" en français ?`,
    answer: "éviter",
    options: shuffleArray(["éviter", "ignorer", "fuir", "laisser"]),
  },
  {
    numb: 5,
    question: `Que signifie "be able" en français ?`,
    answer: "être capable",
    options: shuffleArray([
      "être capable",
      "avoir une table",
      "avoir la possibilité",
      "être en mesure",
    ]),
  },
];
