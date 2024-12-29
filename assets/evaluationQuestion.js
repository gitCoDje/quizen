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
    question: `Que signifie "solely" en français ?`,
    answer: "uniquement",
    options: shuffleArray([
      "uniquement",
      "exclusivement",
      "partiellement",
      "totalement",
    ]),
  },
  {
    numb: 2,
    question: `Que signifie "hurdle" en français ?`,
    answer: "obstacle",
    options: shuffleArray(["obstacle", "barrière", "solution", "difficulté"]),
  },
  {
    numb: 3,
    question: `Que signifie "ensure" en français ?`,
    answer: "assurer",
    options: shuffleArray(["assurer", "confirmer", "négliger", "douter"]),
  },
  {
    numb: 4,
    question: `Que signifie "gaining" en français ?`,
    answer: "acquérir / gagner",
    options: shuffleArray([
      "acquérir / gagner",
      "perdre / céder",
      "recevoir / avoir",
      "dépenser / ruiner",
    ]),
  },
  {
    numb: 5,
    question: `Que signifie "alarming" en français ?`,
    answer: "alarmant",
    options: shuffleArray([
      "alarmant",
      "réconfortant",
      "inquiétant",
      "ennuyeux",
    ]),
  },
  {
    numb: 6,
    question: `Que signifie "attempts" en français ?`,
    answer: "tentatives",
    options: shuffleArray([
      "tentatives",
      "réussites",
      "propositions",
      "erreurs",
    ]),
  },
  {
    numb: 7,
    question: `Que signifie "effectiveness" en français ?`,
    answer: "efficacité",
    options: shuffleArray([
      "efficacité",
      "inefficacité",
      "performance",
      "utilité",
    ]),
  },
  {
    numb: 8,
    question: `Que signifie "recycle" en français ?`,
    answer: "réutiliser",
    options: shuffleArray(["réutiliser", "jeter", "transformer", "conserver"]),
  },
  {
    numb: 9,
    question: `Que signifie "due" en français ?`,
    answer: "dû / en raison",
    options: shuffleArray(["dû / en raison", "obligatoire / fondamentale", "facultatif / pas obligé", "nécessaire / important"]),
  },
  {
    numb: 10,
    question: `Que signifie "span of time" en français ?`,
    answer: "période de temps",
    options: shuffleArray(["période de temps", "moment dans le temps", "instant du temps", "durée de mr Tim"]),
  },
  {
    numb: 11,
    question: `Que signifie "backup" en français ?`,
    answer: "sauvegarde / secours",
    options: shuffleArray(["sauvegarde / secours", "course / magasin", "copie / double", "protection / couche"]),
  },
  {
    numb: 12,
    question: `Que signifie "combats" en français ?`,
    answer: "lutte",
    options: shuffleArray(["lutte", "mortal", "conflit", "dispute"]),
  },
  {
    numb: 13,
    question: `Que signifie "commonly" en français ?`,
    answer: "généralement / couramment",
    options: shuffleArray(["généralement / couramment", "rarement / occasionnellement", "souvent / récurrent", "parfois / défois"]),
  },
  {
    numb: 14,
    question: `Que signifie "such" en français ?`,
    answer: "tel",
    options: shuffleArray(["tel", "pareil", "semblable", "identique"]),
  },
  {
    numb: 15,
    question: `Que signifie "enhancing" en français ?`,
    answer: "améliorer",
    options: shuffleArray(["améliorer", "diminuer", "réduire", "modifier"]),
  },
  {
    numb: 16,
    question: `Que signifie "longer" en français ?`,
    answer: "plus long",
    options: shuffleArray([
      "plus long",
      "plus court",
      "plus large",
      "plus étroit",
    ]),
  },

  {
    numb: 17,
    question: `Que signifie "hashing" en français ?`,
    answer: "hachage",
    options: shuffleArray(["hachage", "cryptage", "codage", "chiffrement"]),
  },
  {
    numb: 18,
    question: `Que signifie "to specialized hardware based attacks" en français ?`,
    answer: "aux attaques basées sur du matériel spécialisé",
    options: shuffleArray([
      "aux attaques basées sur du matériel spécialisé",
      "aux attaques logicielles",
      "aux attaques réseau",
      "aux attaques physiques",
    ]),
  },
  {
    numb: 19,
    question: `Que signifie "surprisingly" en français ?`,
    answer: "surprenamment",
    options: shuffleArray([
      "surprenamment",
      "étonnamment",
      "habituellement",
      "prévisiblement",
    ]),
  },
  {
    numb: 20,
    question: `Que signifie "even with proper salting" en français ?`,
    answer: "même avec un salage approprié",
    options: shuffleArray([
      "même avec un salage approprié",
      "malgré un salage inapproprié",
      "sans salage",
      "avec un salage excessif",
    ]),
  },
  {
    numb: 21,
    question: `Que signifie "computed" en français ?`,
    answer: "calculé",
    options: shuffleArray(["calculé", "estimé", "mesuré", "analysé"]),
  },
  {
    numb: 22,
    question: `Que signifie "rate" en français ?`,
    answer: "taux",
    options: shuffleArray(["taux", "prix", "valeur", "coût"]),
  },
  {
    numb: 23,
    question: `Que signifie "unexpected" en français ?`,
    answer: "inattendu",
    options: shuffleArray(["inattendu", "prévisible", "habituel", "normal"]),
  },
  {
    numb: 24,
    question: `Que signifie "intricate" en français ?`,
    answer: "complexe",
    options: shuffleArray(["complexe", "simple", "évident", "clair"]),
  },
  {
    numb: 25,
    question: `Que signifie "intricacies" en français ?`,
    answer: "subtilités",
    options: shuffleArray([
      "subtilités",
      "complexités",
      "facilités",
      "évidences",
    ]),
  },
  {
    numb: 26,
    question: `Que signifie "alarming" en français ?`,
    answer: "alarmant",
    options: shuffleArray([
      "alarmant",
      "réconfortant",
      "inquiétant",
      "ennuyeux",
    ]),
  },
  {
    numb: 27,
    question: `Que signifie "vitality" en français ?`,
    answer: "vitalité",
    options: shuffleArray(["vitalité", "faiblesse", "force", "énergie"]),
  },
  {
    numb: 28,
    question: `Que signifie "lies" en français ?`,
    answer: "mensonges / réside",
    options: shuffleArray(["mensonges / réside", "vérités / absolu", "rumeurs / querelle", "secrets / story"]),
  },
  {
    numb: 29,
    question: `Que signifie "ability" en français ?`,
    answer: "capacité",
    options: shuffleArray(["capacité", "incapacité", "talent", "compétence"]),
  },
  {
    numb: 30,
    question: `Que signifie "stave" en français ?`,
    answer: "contrecarrer",
    options: shuffleArray([
      "contrecarrer",
      "permettre",
      "favoriser",
      "encourager",
    ]),
  },
  {
    numb: 31,
    question: `Que signifie "impede" en français ?`,
    answer: "entraver",
    options: shuffleArray(["entraver", "faciliter", "accélérer", "permettre"]),
  },

  {
    numb: 32,
    question: `Que signifie "into" en français ?`,
    answer: "dans",
    options: shuffleArray(["dans", "sur", "entre", "au-dessus"]),
  },
  {
    numb: 33,
    question: `Que signifie "is like" en français ?`,
    answer: "est comme",
    options: shuffleArray(["est comme", "semble", "ressemble à", "paraît"]),
  },
  {
    numb: 34,
    question: `Que signifie "then" en français ?`,
    answer: "alors / puis",
    options: shuffleArray([
      "alors / puis",
      "ensuite / après",
      "ça / c'est",
      "après / suite",
    ]),
  },
  {
    numb: 35,
    question: `Que signifie "so on" en français ?`,
    answer: "et ainsi de suite",
    options: shuffleArray([
      "et ainsi de suite",
      "ok allume",
      "de même",
      "comme ça",
    ]),
  },
  {
    numb: 36,
    question: `Que signifie "provide" en français ?`,
    answer: "fournir",
    options: shuffleArray(["fournir", "offrir", "donner", "présenter"]),
  },
  {
    numb: 37,
    question: `Que signifie "layer" en français ?`,
    answer: "couche",
    options: shuffleArray(["couche", "niveau", "strat", "épaisseur"]),
  },
  {
    numb: 38,
    question: `Que signifie "purpose" en français ?`,
    answer: "but / objectif",
    options: shuffleArray([
      "but / objectif",
      "object / chose",
      "raison / certain",
      "intention / donner",
    ]),
  },
  {
    numb: 39,
    question: `Que signifie "string" en français ?`,
    answer: "chaîne",
    options: shuffleArray(["chaîne", "ficelle", "corde", "fil"]),
  },
  {
    numb: 40,
    question: `Que signifie "ensure" en français ?`,
    answer: "assurer",
    options: shuffleArray(["assurer", "garantir", "vérifier", "confirmer"]),
  },
  {
    numb: 41,
    question: `Que signifie "rainbow table attacks" en français ?`,
    answer: "attaques par tables arc-en-ciel",
    options: shuffleArray([
      "attaques par tables arc-en-ciel",
      "attaques par force brute",
      "attaques par phishing",
      "attaques par malware",
    ]),
  },
  {
    numb: 42,
    question: `Que signifie en informatique "salt" en français ?`,
    answer:
      "valeur aléatoire, stockée avec le mot de passe haché, utilisée pour rendre chaque hachage unique",
    options: shuffleArray([
      "valeur aléatoire, stockée avec le mot de passe haché, utilisée pour rendre chaque hachage unique",
      "ajout aléatoire, stockée avec le mot de passe haché, utilisée pour rendre chaque hachage unique",
      "viande aléatoire, stockée avec le mot de passe haché, utilisée pour rendre chaque hachage unique",
      "protection aléatoire, stockée avec le mot de passe haché, utilisée pour rendre chaque hachage unique",
    ]),
  },
  {
    numb: 43,
    question: `Que signifie en informatique "pepper" ?`,
    answer: "valeur secrète, non stockée, ajoutée au mot de passe pour renforcer la sécurité.",
    options: shuffleArray([
      "valeur secrète, non stockée, ajoutée au mot de passe pour renforcer la sécurité.",
      "épice secrète, non stockée, ajoutée au mot de passe pour renforcer la sécurité.",
      "ajout secrète, non stockée, ajoutée au mot de passe pour renforcer la sécurité.",
      "protection secrète, non stockée, ajoutée au mot de passe pour renforcer la sécurité.",
    ]),
  },
  {
    numb: 44,
    question: `Que signifie "thwart" en français ?`,
    answer: "contrecarrer",
    options: shuffleArray([
      "contrecarrer",
      "permettre",
      "favoriser",
      "encourager",
    ]),
  },
  {
    numb: 45,
    question: `Que signifie "serves" en français ?`,
    answer: "sert",
    options: shuffleArray(["sert", "constitue", "fournit", "offre"]),
  },
  {
    numb: 46,
    question: `Que signifie "prevent" en français ?`,
    answer: "empêcher",
    options: shuffleArray(["empêcher", "permettre", "faciliter", "autoriser"]),
  },
  {
    numb: 47,
    question: `Que signifie "various" en français ?`,
    answer: "divers",
    options: shuffleArray(["divers", "similaires", "identiques", "pareils"]),
  },
  {
    numb: 48,
    question: `Que signifie "reside" en français ?`,
    answer: "résider",
    options: shuffleArray(["résider", "vivre", "habiter", "demeurer"]),
  },
  {
    numb: 49,
    question: `Que signifie "from gaining" en français ?`,
    answer: "d'acquérir",
    options: shuffleArray([
      "d'acquérir",
      "de perdre",
      "de recevoir",
      "de dépenser",
    ]),
  },
  {
    numb: 50,
    question: `Que signifie "potent" en français ?`,
    answer: "puissant",
    options: shuffleArray(["balèze", "faible", "puissant", "inefficace"]),
  },
];

// Exporter le tableau d'évaluation
export { evaluation };
