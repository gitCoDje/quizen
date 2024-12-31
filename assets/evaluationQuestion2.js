// evaluationQuestion.js

// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Tableau d'évaluation
const evaluation = [
  {
    numb: 1,
    question: `Que signifie "slight" en français ?`,
    answer: "légère",
    options: shuffleArray(["légère", "lourd", "svelte", "portant"]),
  },
  {
    numb: 2,
    question: `Que signifie "involve" en français ?`,
    answer: "consiste",
    options: shuffleArray(["consiste", "exclure", "ignorer", "ajouter"]),
  },
  {
    numb: 3,
    question: `Que signifie "further" en français ?`,
    answer: "davantage / plus loin",
    options: shuffleArray([
      "davantage / plus loin",
      "moins / proche",
      "différent / éloigné",
      "simple / direct",
    ]),
  },
  {
    numb: 4,
    question: `Que signifie "cheat sheet" en français ?`,
    answer: "fiche de conseil ou fiche de triche",
    options: shuffleArray([
      "fiche de conseil ou fiche de triche",
      "manuel / guide",
      "livre / document",
      "note / résumé",
    ]),
  },
  {
    numb: 5,
    question: `Que signifie "request" en français ?`,
    answer: "demande",
    options: shuffleArray(["demande", "offre", "réponse", "question"]),
  },
  {
    numb: 6,
    question: `Que signifie "forgery" en français ?`,
    answer: "falsification / contrefaçon",
    options: shuffleArray([
      "falsification / contrefaçon",
      "authenticité / original",
      "copie / imitation",
      "document / preuve",
    ]),
  },
  {
    numb: 7,
    question: `Que signifie "straightforward" en français ?`,
    answer: "simple / direct",
    options: shuffleArray([
      "simple / direct",
      "compliqué / ambigu",
      "difficile / obscur",
      "facile / évident",
    ]),
  },
  {
    numb: 8,
    question: `Que signifie "explanation" en français ?`,
    answer: "explication",
    options: shuffleArray([
      "explication",
      "malentendu",
      "solution",
      "interrogation",
    ]),
  },
  {
    numb: 9,
    question: `Que signifie "provides" en français ?`,
    answer: "fournit / propose",
    options: shuffleArray([
      "fournit / propose",
      "retire / enlève",
      "demande / sollicite",
      "ignore / néglige",
    ]),
  },
  {
    numb: 10,
    question: `Que signifie "type" en français ?`,
    answer: "type / taper",
    options: shuffleArray([
      "type / taper",
      "copie / modèle",
      "coller / modifier",
      "formulaire / document",
    ]),
  },
  {
    numb: 11,
    question: `Que signifie "occurs" en français ?`,
    answer: "se produit / se déroule",
    options: shuffleArray([
      "se produit / se déroule",
      "s'arrête / finit",
      "commence / débute",
      "change / évolue",
    ]),
  },
  {
    numb: 12,
    question: `Que signifie "malicious" en français ?`,
    answer: "malveillant",
    options: shuffleArray(["malveillant", "bienveillant", "neutre", "suspect"]),
  },
  {
    numb: 13,
    question: `Que signifie "causes" en français ?`,
    answer: "provoque / entraînent",
    options: shuffleArray([
      "provoque / entraînent",
      "évite / prévient",
      "réduit / diminue",
      "simplifie / clarifie",
    ]),
  },
  {
    numb: 14,
    question: `Que signifie "unwanted" en français ?`,
    answer: "indésirable / non désiré",
    options: shuffleArray([
      "indésirable / non désiré",
      "souhaité / préféré",
      "acceptable / toléré",
      "nécessaire / utile",
    ]),
  },
  {
    numb: 15,
    question: `Que signifie "trusted" en français ?`,
    answer: "de confiance",
    options: shuffleArray(["de confiance", "suspect", "inconnu", "incertain"]),
  },
  {
    numb: 16,
    question: `Que signifie "when" en français ?`,
    answer: "quand",
    options: shuffleArray(["quand", "où", "pourquoi", "comment"]),
  },
  {
    numb: 17,
    question: `Que signifie "come about" en français ?`,
    answer: "se produire / survenir",
    options: shuffleArray([
      "se produire / survenir",
      "disparaître / s'éteindre",
      "arrêter / stopper",
      "changer / évoluer",
    ]),
  },
  {
    numb: 18,
    question: `Que signifie "highly" en français ?`,
    answer: "très / hautement",
    options: shuffleArray([
      "très / hautement",
      "peu / légèrement",
      "modérément / raisonnablement",
      "rarement / occasionnellement",
    ]),
  },
  {
    numb: 19,
    question: `Que signifie "refer" en français ?`,
    answer: "se référer / faire référence à",
    options: shuffleArray([
      "se référer / faire référence à",
      "ignorer / négliger",
      "décider / choisir",
      "évaluer / analyser",
    ]),
  },
  {
    numb: 20,
    question: `Que signifie "them" en français ?`,
    answer: "eux / elles",
    options: shuffleArray([
      "eux / elles",
      "nous / on",
      "vous / vos",
      "je / moi",
    ]),
  },
  {
    numb: 21,
    question: `Que signifie "filled" en français ?`,
    answer: "rempli",
    options: shuffleArray(["rempli", "vide", "manquant", "démonté"]),
  },
  {
    numb: 22,
    question: `Que signifie "encounter" en français ?`,
    answer: "rencontrer / faire face à",
    options: shuffleArray([
      "rencontrer / faire face à",
      "éviter / fuir",
      "ignorer / négliger",
      "accepter / accueillir",
    ]),
  },
  {
    numb: 23,
    question: `Que signifie "upn" en français ?`,
    answer: "Nom Principal d'Utilisateur",
    options: shuffleArray([
      "Nom Principal d'Utilisateur",
      "Nom d'utilisateur / Identifiant",
      "Mot de passe / Code",
      "Adresse e-mail / Contact",
    ]),
  },
  {
    numb: 24,
    question: `Que signifie "upon" en français ?`,
    answer: "sur / à",
    options: shuffleArray([
      "sur / à",
      "sous / en dessous",
      "devant / derrière",
      "près / loin",
    ]),
  },
  {
    numb: 25,
    question: `Que signifie "triggers" en français ?`,
    answer: "déclencheurs / déclenche",
    options: shuffleArray([
      "déclencheurs / déclenche",
      "arrête / stoppe",
      "ignore / néglige",
      "retarde / ralentit",
    ]),
  },
  {
    numb: 26,
    question: `Que signifie "concealed form" en français ?`,
    answer: "forme dissimulée / forme cachée",
    options: shuffleArray([
      "forme dissimulée / forme cachée",
      "forme visible / forme claire",
      "forme simple / forme directe",
      "forme complexe / forme compliquée",
    ]),
  },
  {
    numb: 27,
    question: `Que signifie "populated" en français ?`,
    answer: "peuplé / rempli",
    options: shuffleArray([
      "peuplé / rempli",
      "vide / désert",
      "abandonner / laisser",
      "isolé / éloigné",
    ]),
  },
  {
    numb: 28,
    question: `Que signifie "predetermined" en français ?`,
    answer: "prédéterminé",
    options: shuffleArray([
      "prédéterminé",
      "aléatoire",
      "inattendu",
      "modifiable",
    ]),
  },
  {
    numb: 29,
    question: `Que signifie "urging" en français ?`,
    answer: "incitant / exhortant",
    options: shuffleArray([
      "incitant / exhortant",
      "décourageant / freinant",
      "indifférent / passif",
      "soutenant / encourageant",
    ]),
  },
  {
    numb: 30,
    question: `Que signifie "their" en français ?`,
    answer: "leur / leurs",
    options: shuffleArray([
      "leur / leurs",
      "notre / nos",
      "votre / vos",
      "mon / ma",
    ]),
  },
  {
    numb: 31,
    question: `Que signifie "instead" en français ?`,
    answer: "au lieu / plutôt",
    options: shuffleArray([
      "au lieu / plutôt",
      "aussi / également",
      "parfois / souvent",
      "toujours / jamais",
    ]),
  },
  {
    numb: 32,
    question: `Que signifie "perform" en français ?`,
    answer: "effectuer / réaliser",
    options: shuffleArray([
      "effectuer / réaliser",
      "ignorer / négliger",
      "arrêter / suspendre",
      "analyser / évaluer",
    ]),
  },
  {
    numb: 33,
    question: `Que signifie "also" en français ?`,
    answer: "aussi",
    options: shuffleArray(["aussi", "seulement", "jamais", "toujours"]),
  },
  {
    numb: 34,
    question: `Que signifie "own" en français ?`,
    answer: "propre / posséder",
    options: shuffleArray([
      "propre / posséder",
      "partager / distribuer",
      "emprunter / louer",
      "donner / offrir",
    ]),
  },
  {
    numb: 35,
    question: `Que signifie "place" en français ?`,
    answer: "lieu / place",
    options: shuffleArray([
      "lieu / place",
      "espace / zone",
      "objet / chose",
      "situation / condition",
    ]),
  },
  {
    numb: 36,
    question: `Que signifie "usually" en français ?`,
    answer: "habituellement / généralement",
    options: shuffleArray([
      "habituellement / généralement",
      "rarement / parfois",
      "toujours / jamais",
      "souvent / fréquemment",
    ]),
  },
  {
    numb: 37,
    question: `Que signifie "stay" en français ?`,
    answer: "rester / séjour",
    options: shuffleArray([
      "rester / séjour",
      "partir / quitter",
      "arriver / venir",
      "changer / modifier",
    ]),
  },
  {
    numb: 38,
    question: `Que signifie "while" en français ?`,
    answer: "tandis que / pendant que",
    options: shuffleArray([
      "tandis que / pendant que",
      "avant / après",
      "si / quand",
      "parfois / souvent",
    ]),
  },
  {
    numb: 39,
    question: `Que signifie "dispatched" en français ?`,
    answer: "expédié / envoyé",
    options: shuffleArray([
      "expédié / envoyé",
      "reçu / accepté",
      "retardé / reporté",
      "annulé / supprimé",
    ]),
  },
  {
    numb: 40,
    question: `Que signifie "both" en français ?`,
    answer: "les deux",
    options: shuffleArray(["les deux", "un seul", "aucun", "plusieurs"]),
  },
  {
    numb: 41,
    question: `Que signifie "form" en français ?`,
    answer: "formulaire / forme",
    options: shuffleArray([
      "formulaire / forme",
      "document / papier",
      "objet / chose",
      "situation / état",
    ]),
  },
  {
    numb: 42,
    question: `Que signifie "processing" en français ?`,
    answer: "traitement",
    options: shuffleArray(["traitement", "arrêt", "démarrage", "évaluation"]),
  },
  {
    numb: 43,
    question: `Que signifie "to proceed" en français ?`,
    answer: "pour continuer / pour procéder",
    options: shuffleArray([
      "pour continuer / pour procéder",
      "pour arrêter / pour suspendre",
      "pour commencer / pour débuter",
      "pour changer / pour modifier",
    ]),
  },
  {
    numb: 44,
    question: `Que signifie "manner" en français ?`,
    answer: "manière / façon",
    options: shuffleArray([
      "manière / façon",
      "moyen / méthode",
      "résultat / effet",
      "situation / condition",
    ]),
  },
  {
    numb: 45,
    question: `Que signifie "embedded" en français ?`,
    answer: "intégré / incorporé",
    options: shuffleArray([
      "intégré / incorporé",
      "séparé / isolé",
      "retiré / enlevé",
      "ajouté / inclus",
    ]),
  },
  {
    numb: 46,
    question: `Que signifie "input" en français ?`,
    answer: "entrée",
    options: shuffleArray(["entrée", "sortie", "processus", "évaluation"]),
  },
  {
    numb: 47,
    question: `Que signifie "by" en français ?`,
    answer: "par / à",
    options: shuffleArray([
      "par / à",
      "avec / sans",
      "pour / contre",
      "avant / après",
    ]),
  },
  {
    numb: 48,
    question: `Que signifie "relies" en français ?`,
    answer: "dépend / s'appuie",
    options: shuffleArray([
      "dépend / s'appuie",
      "ignore / néglige",
      "évite / fuit",
      "renforce / soutient",
    ]),
  },
  {
    numb: 49,
    question: `Que signifie "unable" en français ?`,
    answer: "incapable / impossible",
    options: shuffleArray([
      "incapable / impossible",
      "capable / apte",
      "facile / simple",
      "pratique / utile",
    ]),
  },
  {
    numb: 50,
    question: `Que signifie "furnish" en français ?`,
    answer: "fournir / équiper",
    options: shuffleArray([
      "fournir / équiper",
      "retirer / enlever",
      "réparer / modifier",
      "ignorer / négliger",
    ]),
  },
  {
    numb: 51,
    question: `Que signifie "consequently" en français ?`,
    answer: "par conséquent",
    options: shuffleArray([
      "par conséquent",
      "en raison de",
      "malgré cela",
      "en même temps",
    ]),
  },
  {
    numb: 52,
    question: `Que signifie "coercing" en français ?`,
    answer: "coercition / forcer",
    options: shuffleArray([
      "coercition / forcer",
      "liberté / choix",
      "encouragement / soutien",
      "indifférence / négligence",
    ]),
  },
  {
    numb: 53,
    question: `Que signifie "unsuspecting" en français ?`,
    answer: "inconscient / sans méfiance",
    options: shuffleArray([
      "inconscient / sans méfiance",
      "méfiant / prudent",
      "sceptique / douteux",
      "avisé / informé",
    ]),
  },
  {
    numb: 54,
    question: `Que signifie "behalf" en français ?`,
    answer: "au nom de / pour le compte de",
    options: shuffleArray([
      "au nom de / pour le compte de",
      "en dehors de / à l'exception de",
      "en faveur de / pour",
      "contre / opposé à",
    ]),
  },
];

// Exporter le tableau d'évaluation
export { evaluation };
