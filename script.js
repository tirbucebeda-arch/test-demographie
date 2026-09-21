/********************************************************************
     * CONFIGURATION PRINCIPALE
     * Tu peux modifier ici le mot de passe admin, les sujets, les dates,
     * les questions, les réponses correctes et le barème.
     ********************************************************************/
    const ADMIN_PASSWORD = "admin123";

    const CONFIG = {
  "defaultMarking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "subjects": [
    {
      "id": "demographie-sujet-1-2023",
      "title": "Sujet 1 — Évaluation de démographie 2023",
      "matter": "Démographie — Licence 3 IDE / SFM",
      "description": "Sujet 1 de démographie. Correction préparée par Tirbuce Beda.",
      "instructions": "Répondez à toutes les questions. Certaines questions peuvent comporter plusieurs bonnes réponses.",
      "programmed": true,
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "type": "qcm",
          "text": "Parmi les éléments suivants, indiquer les mesures qui ont des répercussions évidentes sur les variables démographiques.",
          "options": [
            "Développement des fléaux sociaux",
            "Amélioration des systèmes de santé",
            "Opération d'aménagement rural",
            "Sanction du phénomène des filles-mères"
          ],
          "explanation": "Le cours cite expressément l'amélioration des systèmes de santé et les opérations d'aménagement rural comme mesures ayant des répercussions évidentes sur les variables démographiques.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Orientation nouvelle de la démographie, p. 29.",
          "answers": [
            "Amélioration des systèmes de santé",
            "Opération d'aménagement rural"
          ],
          "correct": [
            "Amélioration des systèmes de santé",
            "Opération d'aménagement rural"
          ]
        },
        {
          "type": "qcm",
          "text": "Les facteurs influençant la fécondité sont :",
          "options": [
            "Les facteurs monographiques",
            "Les facteurs économiques et sociaux",
            "Les appartenances politiques",
            "Les facteurs de modernité",
            "Les variables intermédiaires"
          ],
          "explanation": "Les facteurs habituellement retenus sont les facteurs démographiques (écrit « monographiques » dans le sujet), économiques et sociaux, les facteurs de modernité et les variables intermédiaires. Les appartenances politiques ne constituent pas ici une catégorie du cours.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answers": [
            "Les facteurs monographiques",
            "Les facteurs économiques et sociaux",
            "Les facteurs de modernité",
            "Les variables intermédiaires"
          ],
          "correct": [
            "Les facteurs monographiques",
            "Les facteurs économiques et sociaux",
            "Les facteurs de modernité",
            "Les variables intermédiaires"
          ]
        },
        {
          "type": "qcm",
          "text": "Dans une aire sanitaire, la densité est de 15 habitants/km² et la superficie est de 2 500 km². Quelle est la population ?",
          "options": [
            "16 666 habitants",
            "37 500 habitants",
            "25 000 habitants",
            "15 000 habitants"
          ],
          "explanation": "Population = densité × superficie = 15 × 2 500 = 37 500 habitants.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, densité de population, p. 25.",
          "answer": "37 500 habitants",
          "correct": "37 500 habitants"
        },
        {
          "type": "qcm",
          "text": "Dans cette aire sanitaire, la population urbaine est de 7 500 habitants. Quelle est la proportion de la population rurale ?",
          "options": [
            "62,50 %",
            "37,50 %",
            "20 %",
            "80 %"
          ],
          "explanation": "Population rurale = 37 500 - 7 500 = 30 000. Proportion rurale = 30 000 / 37 500 × 100 = 80 %.",
          "source": "Sujet fourni, données des questions 3 et 4 ; Cours DEMOGRAPHIE L2 INFAS 2025-2026, p. 25.",
          "answer": "80 %",
          "correct": "80 %"
        },
        {
          "type": "qcm",
          "text": "La fréquence des naissances au sein de la sous-population des femmes en âge de procréer constitue :",
          "options": [
            "Le calendrier de fécondité",
            "La natalité",
            "La fécondité"
          ],
          "explanation": "La natalité rapporte les naissances à l'ensemble de la population, tandis que la fécondité les rapporte aux femmes en âge de procréer.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "La fécondité",
          "correct": "La fécondité"
        },
        {
          "type": "qcm",
          "text": "Parmi les propositions suivantes, quels sont les facteurs culturels, économiques et sociaux influençant la fécondité ?",
          "options": [
            "L'activité économique",
            "La proportion des femmes mariées chez les femmes en âge de reproduction",
            "La pratique de la contraception",
            "La stérilité permanente",
            "Le groupe ethnique",
            "Le statut de la femme"
          ],
          "explanation": "L'activité économique, le groupe ethnique et le statut de la femme relèvent des facteurs économiques, culturels et sociaux. Le mariage, la contraception et la stérilité relèvent plutôt des variables intermédiaires de la fécondité.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answers": [
            "L'activité économique",
            "Le groupe ethnique",
            "Le statut de la femme"
          ],
          "correct": [
            "L'activité économique",
            "Le groupe ethnique",
            "Le statut de la femme"
          ]
        },
        {
          "type": "qcm",
          "text": "Dans l'analyse de la fécondité comme phénomène renouvelable, quelles sont les trois questions auxquelles on cherche à répondre ?",
          "options": [
            "Intensité des premiers décès",
            "Intensité des premières naissances",
            "Intensité du phénomène",
            "Calendrier vaccinal",
            "Calendrier du phénomène"
          ],
          "explanation": "L'analyse distingue l'entrée dans le phénomène (première naissance), l'intensité totale du phénomène et son calendrier. Les décès et le calendrier vaccinal ne répondent pas à cette analyse de la fécondité.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answers": [
            "Intensité des premières naissances",
            "Intensité du phénomène",
            "Calendrier du phénomène"
          ],
          "correct": [
            "Intensité des premières naissances",
            "Intensité du phénomène",
            "Calendrier du phénomène"
          ]
        },
        {
          "type": "qcm",
          "text": "Calculer le rapport de masculinité si les hommes représentent 40 % de la population totale.",
          "options": [
            "40,67 %",
            "66,67 %",
            "150 %",
            "76,67 %"
          ],
          "explanation": "Les femmes représentent 60 %. Rapport de masculinité = hommes / femmes × 100 = 40 / 60 × 100 = 66,67 %.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, structure par sexe, p. 20.",
          "answer": "66,67 %",
          "correct": "66,67 %"
        },
        {
          "type": "qcm",
          "text": "Sur la pyramide sanitaire ivoirienne, où se situe un dispensaire rural ?",
          "options": [
            "Niveau intermédiaire",
            "Niveau tertiaire",
            "Niveau périphérique",
            "Versant prestataire",
            "Versant administratif"
          ],
          "explanation": "Un dispensaire rural est un établissement de premier contact : il appartient au niveau périphérique et au versant prestataire.",
          "source": "Connaissances générales de santé publique (complément)",
          "answers": [
            "Niveau périphérique",
            "Versant prestataire"
          ],
          "correct": [
            "Niveau périphérique",
            "Versant prestataire"
          ]
        },
        {
          "type": "qcm",
          "text": "Indiquer l'âge médian de la population suivante : 16 ans : 3 000 ; 20 ans : 9 000 ; 24 ans : 3 000 ; 28 ans : 4 000 ; 32 ans : 10 000 ; 36 ans : 1 000.",
          "options": [
            "36 ans",
            "20 ans",
            "32 ans",
            "16 ans",
            "24 ans",
            "28 ans"
          ],
          "explanation": "L'effectif total est 30 000 et N/2 = 15 000. L'effectif cumulé atteint 15 000 à 24 ans. Remarque : avec la définition stricte fondée sur les deux observations centrales d'une série paire, les positions 15 000 et 15 001 correspondent à 24 et 28 ans, soit 26 ans ; cette valeur n'est pas proposée. L'option attendue par le sujet est donc 24 ans.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "24 ans",
          "correct": "24 ans"
        },
        {
          "type": "qcm",
          "text": "Avec une densité de 85 habitants/km² et une superficie de 322 462 km², quelle population obtient-on ?",
          "options": [
            "27 027 409 habitants",
            "27 409 270 habitants",
            "24 709 270 habitants",
            "24 027 409 habitants"
          ],
          "explanation": "Population = 85 × 322 462 = 27 409 270 habitants.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, densité de population, p. 25.",
          "answer": "27 409 270 habitants",
          "correct": "27 409 270 habitants"
        },
        {
          "type": "qcm",
          "text": "Quelles sont les caractéristiques du recensement de la population ?",
          "options": [
            "Le dénombrement collectif",
            "L'exhaustivité",
            "La globalité",
            "La simultanéité",
            "La périodicité"
          ],
          "explanation": "Le recensement doit couvrir toute la population et tout le territoire, se rapporter à une même période de référence et être répété périodiquement. Le dénombrement est individuel, non collectif.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Sources de données démographiques, recensement, p. 16-18.",
          "answers": [
            "L'exhaustivité",
            "La globalité",
            "La simultanéité",
            "La périodicité"
          ],
          "correct": [
            "L'exhaustivité",
            "La globalité",
            "La simultanéité",
            "La périodicité"
          ]
        },
        {
          "type": "qcd",
          "text": "Dans l'évolution récente des politiques de population en Afrique, le discours nataliste s'est concrétisé par des dispositions législatives telles que les allocations familiales.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours mentionne le discours nataliste et cite les allocations familiales parmi les dispositions législatives correspondantes.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Orientation nouvelle de la démographie, p. 29.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L'âge moyen à la maternité est l'âge moyen des individus à la naissance de leurs enfants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Il s'agit de l'âge moyen des mères à la naissance de leurs enfants, et non de l'ensemble des individus.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Une cohorte est un ensemble d'individus ayant vécu en même temps un même événement semblable appelé événement d'arrivée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'événement commun est appelé événement d'origine, non événement d'arrivée.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Généralités, cohorte, p. 8.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Un immigrant est une personne qui quitte son pays pour aller vivre à l'étranger.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La personne qui quitte son pays est un émigrant. L'immigrant est considéré du point de vue du pays d'accueil où il entre pour s'établir.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 23-24.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Le rapport de masculinité d'une population de 250 000 habitants dont 60 % sont des femmes est de 40 %.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Les hommes représentent 40 %. Rapport de masculinité = 40 / 60 × 100 = 66,67 %.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, p. 20.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Un effet négatif des migrations internationales sur le pays d'origine est la perturbation de l'organisation des sociétés.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le départ touche souvent les jeunes adultes et peut perturber l'organisation sociale du pays ou de la région d'origine.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, effets économiques, p. 27.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La migration est un phénomène qui transfère la résidence d'un individu d'un lieu d'origine à un lieu de destination.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La migration implique un déplacement accompagné d'un changement de résidence entre une origine et une destination.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 23-24.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Les migrations régionales sont les déplacements pendulaires quotidiens donnant naissance aux communes-dortoirs et permettant de délimiter un bassin d'emploi.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Cette description correspond aux migrations ou mobilités locales pendulaires, et non aux migrations régionales.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, typologie des migrations, p. 23-24.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Un effet positif des migrations internationales est l'amélioration du système de production par l'accumulation du capital liée à la pression sur les salaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours classe cet effet parmi les effets économiques positifs des migrations internationales sur le pays d'accueil.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, effets sur le pays d'accueil, p. 26.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La descendance finale est le nombre moyen de naissances par femme d'une génération au début de la vie génésique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La descendance finale est mesurée à la fin de la vie génésique de la génération considérée.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "L'accessibilité géographique et financière aux méthodes contraceptives constitue un facteur institutionnel et politique influençant la fécondité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'organisation des services, leur accessibilité et les politiques de planification familiale agissent sur l'utilisation de la contraception et donc sur la fécondité.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Le taux général de fécondité se calcule en rapportant les naissances vivantes d'une année au nombre total de femmes enceintes de la même année.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le dénominateur est l'effectif moyen des femmes en âge de procréer, généralement 15 à 49 ans, et non le nombre de femmes enceintes.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Le recensement est l'ensemble des opérations consistant à recueillir, grouper, analyser et publier les données démographiques, économiques et sociales de tous les habitants d'un territoire à un moment donné.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Cette formulation correspond à la définition du recensement présentée dans le cours.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Sources de données démographiques, p. 16.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Un objectif du recensement est de fournir l'effectif partiel de la population et sa distribution selon quelques caractères simples.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le recensement vise l'effectif total et une distribution détaillée de la population ; l'expression « effectif partiel » est incorrecte.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Sources de données démographiques, recensement, p. 16-18.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "La population était de 18 000 habitants en 2021, avec un taux d'accroissement annuel de 5 %. Calculer la population en 2023.",
          "options": [
            "19 500 habitants",
            "19 845 habitants",
            "18 181 habitants",
            "18 180 habitants"
          ],
          "explanation": "Projection composée : P2023 = 18 000 × (1 + 0,05)² = 19 845.",
          "source": "Sujet fourni, étude de cas de Laoudi-Gan ; Connaissances générales de démographie (utilisées en complément du cours fourni).",
          "answer": "19 845 habitants",
          "correct": "19 845 habitants"
        },
        {
          "type": "qcm",
          "text": "Calculer la population des femmes en âge de reproduction en 2023.",
          "options": [
            "3 637 habitants",
            "3 600 habitants",
            "3 700 habitants",
            "3 969 habitants"
          ],
          "explanation": "Selon le coefficient utilisé par le sujet, les femmes en âge de reproduction représentent 20 % de la population : 19 845 × 0,20 = 3 969.",
          "source": "Sujet fourni, étude de cas de Laoudi-Gan ; coefficient démographique de l'exercice.",
          "answer": "3 969 habitants",
          "correct": "3 969 habitants"
        },
        {
          "type": "qcm",
          "text": "Avec 1 329 naissances vivantes et 3 969 femmes en âge de reproduction, calculer le taux général de fécondité.",
          "options": [
            "359,18 ‰",
            "365,41 ‰",
            "334,85 ‰",
            "369,16 ‰"
          ],
          "explanation": "TGF = 1 329 / 3 969 × 1 000 = 334,85 ‰.",
          "source": "Sujet fourni, étude de cas de Laoudi-Gan ; formule générale du TGF.",
          "answer": "334,85 ‰",
          "correct": "334,85 ‰"
        },
        {
          "type": "qcm",
          "text": "Avec 240 décès d'enfants de moins d'un an et 1 329 naissances vivantes, calculer le taux de mortalité infantile.",
          "options": [
            "1,21 %",
            "12,10 %",
            "13,20 %",
            "18,06 %"
          ],
          "explanation": "TMI = 240 / 1 329 × 1 000 = 180,59 ‰, soit 18,06 %. Le sujet propose les résultats en pourcentage.",
          "source": "Sujet fourni, étude de cas de Laoudi-Gan ; formule générale de la mortalité infantile.",
          "answer": "18,06 %",
          "correct": "18,06 %"
        }
      ]
    },
    {
      "id": "demographie-sujet-2-2021-2022",
      "title": "Sujet 2 — Évaluation de démographie 2021–2022",
      "matter": "Démographie — Licence 3 IDE / SFM",
      "description": "Sujet 2 de démographie. Correction préparée par Tirbuce Beda.",
      "instructions": "Répondez à toutes les questions. Certaines questions peuvent comporter plusieurs bonnes réponses.",
      "programmed": true,
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "type": "qcd",
          "text": "La densité globale d'un pays est le nombre total d'habitants divisé par la superficie en km².",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Densité globale = population totale / superficie totale.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 25.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L'âge moyen à la maternité est l'âge moyen des mères à la naissance de leurs enfants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La définition est correcte.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une cohorte est un ensemble d'individus ayant vécu en même temps un même événement semblable appelé événement d'origine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "C'est la définition donnée par le cours.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Généralités, p. 8.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La population d'une localité au 31 décembre de l'année N-1 est identique à celle de cette localité au 1er janvier de l'année N.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ces deux instants se suivent immédiatement ; en projection démographique, le stock de fin d'année devient le stock initial de l'année suivante.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une cohorte est un ensemble d'individus ayant vécu en même temps un même événement semblable appelé événement d'origine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La question est identique à la question 3 et la définition est correcte.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Généralités, p. 8.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une observation de suivi est un mode d'observation où les événements relatifs à une même personne sont distancés les uns des autres afin de les saisir dans leur succession.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours précise que ces événements sont rapprochés les uns des autres, et non distancés.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Généralités, observation de suivi, p. 8.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "L'état de la population est l'effectif et la composition de la population selon divers critères.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "C'est la définition donnée dans le cours.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Généralités, p. 7.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La mortalité juvénile désigne les décès survenant entre 0 et 4 ans.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La mortalité juvénile concerne généralement les enfants de 1 à 4 ans. De 0 à 4 ans, on parle de mortalité infanto-juvénile.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Le taux général de fécondité est un indicateur démographique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Il mesure la fréquence des naissances parmi les femmes en âge de procréer.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La projection de population permet d'obtenir la population exacte d'une localité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une projection fournit une estimation future fondée sur des hypothèses ; elle ne donne pas un effectif exact.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Orientation nouvelle de la démographie, projections, p. 28.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Les décès influencent l'accroissement naturel.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L'accroissement naturel correspond à la différence entre les naissances et les décès.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcm",
          "text": "À Man en 2021, la population est de 250 000 habitants, avec 3 000 naissances vivantes et 20 % de femmes en âge de reproduction. Calculer le taux général de fécondité.",
          "options": [
            "30 %",
            "60 %",
            "30 ‰",
            "60 ‰"
          ],
          "explanation": "Femmes en âge de reproduction = 250 000 × 20 % = 50 000. TGF = 3 000 / 50 000 × 1 000 = 60 ‰.",
          "source": "Sujet fourni, étude de cas de Man ; formule générale du TGF.",
          "answer": "60 ‰",
          "correct": "60 ‰"
        },
        {
          "type": "qcm",
          "text": "À Man, 35 décès ont été enregistrés entre 28 et 364 jours pour 3 000 naissances vivantes. Calculer le taux de mortalité post-néonatale.",
          "options": [
            "1,4 %",
            "1,17 %",
            "1,71 %"
          ],
          "explanation": "35 / 3 000 × 100 = 1,1667 %, arrondi à 1,17 %.",
          "source": "Sujet fourni, tableau de l'étude de cas de Man ; formule générale de mortalité post-néonatale.",
          "answer": "1,17 %",
          "correct": "1,17 %"
        },
        {
          "type": "qcm",
          "text": "À Man, 25 décès ont été enregistrés entre 0 et 7 jours pour 3 000 naissances vivantes. Calculer le taux de mortalité néonatale précoce.",
          "options": [
            "0,83 %",
            "0,17 %",
            "0,71 %"
          ],
          "explanation": "25 / 3 000 × 100 = 0,8333 %, arrondi à 0,83 %.",
          "source": "Sujet fourni, tableau de l'étude de cas de Man ; formule générale de mortalité néonatale précoce.",
          "answer": "0,83 %",
          "correct": "0,83 %"
        },
        {
          "type": "qcm",
          "text": "À Man, 40 décès ont été enregistrés entre 9 et 27 jours pour 3 000 naissances vivantes. Calculer le taux de mortalité néonatale tardive.",
          "options": [
            "1,33 %",
            "0,17 %",
            "1,71 %"
          ],
          "explanation": "40 / 3 000 × 100 = 1,3333 %, arrondi à 1,33 %.",
          "source": "Sujet fourni, tableau de l'étude de cas de Man ; formule générale de mortalité néonatale tardive.",
          "answer": "1,33 %",
          "correct": "1,33 %"
        },
        {
          "type": "qcm",
          "text": "Avec une densité de 85 habitants/km² et une superficie de 322 462 km², quelle est la population ?",
          "options": [
            "27 027 409 habitants",
            "27 409 270 habitants",
            "24 709 270 habitants",
            "24 027 409 habitants"
          ],
          "explanation": "85 × 322 462 = 27 409 270 habitants.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 25.",
          "answer": "27 409 270 habitants",
          "correct": "27 409 270 habitants"
        },
        {
          "type": "qcm",
          "text": "À Abengourou, la population totale est de 400 000 habitants et la population urbaine de 140 000. Calculer la population rurale.",
          "options": [
            "140 000 habitants",
            "200 000 habitants",
            "260 000 habitants",
            "160 000 habitants"
          ],
          "explanation": "Population rurale = 400 000 - 140 000 = 260 000.",
          "source": "Sujet fourni, étude de cas d'Abengourou.",
          "answer": "260 000 habitants",
          "correct": "260 000 habitants"
        },
        {
          "type": "qcm",
          "text": "La superficie totale est de 5 200 km² et la superficie urbaine de 1 200 km². Calculer la densité rurale.",
          "options": [
            "56 habitants/km²",
            "65 habitants/km²",
            "217 habitants/km²",
            "117 habitants/km²"
          ],
          "explanation": "Superficie rurale = 5 200 - 1 200 = 4 000 km². Densité rurale = 260 000 / 4 000 = 65 habitants/km².",
          "source": "Sujet fourni ; Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 25.",
          "answer": "65 habitants/km²",
          "correct": "65 habitants/km²"
        },
        {
          "type": "qcm",
          "text": "Calculer la densité urbaine du département d'Abengourou.",
          "options": [
            "56 habitants/km²",
            "65 habitants/km²",
            "217 habitants/km²",
            "117 habitants/km²"
          ],
          "explanation": "140 000 / 1 200 = 116,67 habitants/km², arrondi à 117.",
          "source": "Sujet fourni ; Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 25.",
          "answer": "117 habitants/km²",
          "correct": "117 habitants/km²"
        },
        {
          "type": "qcm",
          "text": "Si 80 % de la superficie rurale est agricole, calculer la superficie agricole.",
          "options": [
            "4 160 km²",
            "1 200 km²",
            "960 km²",
            "3 200 km²"
          ],
          "explanation": "Superficie agricole = 4 000 × 80 % = 3 200 km².",
          "source": "Sujet fourni, étude de cas d'Abengourou.",
          "answer": "3 200 km²",
          "correct": "3 200 km²"
        },
        {
          "type": "qcm",
          "text": "Calculer la densité agricole du département d'Abengourou.",
          "options": [
            "81 habitants/km²",
            "82 habitants/km²",
            "44 habitants/km²",
            "58 habitants/km²"
          ],
          "explanation": "Densité agricole = population rurale / superficie agricole = 260 000 / 3 200 = 81,25 habitants/km². La consigne impose l'entier supérieur : 82. Avec un arrondi classique au plus proche, on obtiendrait 81.",
          "source": "Sujet fourni ; Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, densité agricole, p. 25.",
          "answer": "82 habitants/km²",
          "correct": "82 habitants/km²"
        },
        {
          "type": "qcm",
          "text": "Calculer le taux d'urbanisation du département d'Abengourou.",
          "options": [
            "0,35 (35 %)",
            "0,54 (54 %)",
            "0,53 (53 %)"
          ],
          "explanation": "Taux d'urbanisation = 140 000 / 400 000 = 0,35, soit 35 %.",
          "source": "Sujet fourni ; Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, taux d'urbanisation, p. 25.",
          "answer": "0,35 (35 %)",
          "correct": "0,35 (35 %)"
        },
        {
          "type": "qcm",
          "text": "L'intensité de la fécondité est :",
          "options": [
            "La fréquence des naissances dans l'ensemble de la population",
            "La fréquence des naissances chez les femmes en âge de procréer",
            "Le nombre moyen de naissances par femme d'une génération à la fin de la vie génésique"
          ],
          "explanation": "L'intensité finale de la fécondité d'une génération est mesurée par sa descendance finale, c'est-à-dire le nombre moyen d'enfants par femme à la fin de la vie génésique.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Le nombre moyen de naissances par femme d'une génération à la fin de la vie génésique",
          "correct": "Le nombre moyen de naissances par femme d'une génération à la fin de la vie génésique"
        },
        {
          "type": "qcm",
          "text": "Un émigrant est :",
          "options": [
            "Une personne qui quitte son pays pour vivre à l'étranger",
            "Une personne qui quitte son village pour vivre dans un village étranger",
            "Une personne qui entre dans un pays étranger pour s'y établir",
            "Une personne qui entre dans un village étranger pour s'y établir"
          ],
          "explanation": "L'émigrant est défini du point de vue du pays de départ.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 23-24.",
          "answer": "Une personne qui quitte son pays pour vivre à l'étranger",
          "correct": "Une personne qui quitte son pays pour vivre à l'étranger"
        },
        {
          "type": "qcm",
          "text": "Un immigrant est :",
          "options": [
            "Une personne qui quitte son pays pour vivre à l'étranger",
            "Une personne qui quitte son village pour vivre à l'étranger",
            "Une personne qui entre dans un pays étranger pour s'y établir",
            "Une personne qui entre dans un village étranger pour s'y établir"
          ],
          "explanation": "L'immigrant est défini du point de vue du pays d'accueil dans lequel il entre pour s'établir.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 23-24.",
          "answer": "Une personne qui entre dans un pays étranger pour s'y établir",
          "correct": "Une personne qui entre dans un pays étranger pour s'y établir"
        },
        {
          "type": "qcm",
          "text": "Quelles sont les sources de données utilisées dans l'étude de la mobilité spatiale ?",
          "options": [
            "Registres de consultations de l'hôpital",
            "Recensements de la population",
            "Enquêtes démographiques",
            "Enquêtes de commodo et incommodo",
            "Registres des populations"
          ],
          "explanation": "Le cours cite les recensements, les enquêtes démographiques et les registres des populations.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, sources des données, p. 24.",
          "answers": [
            "Recensements de la population",
            "Enquêtes démographiques",
            "Registres des populations"
          ],
          "correct": [
            "Recensements de la population",
            "Enquêtes démographiques",
            "Registres des populations"
          ]
        },
        {
          "type": "qcm",
          "text": "Les facteurs influençant la fécondité sont :",
          "options": [
            "Facteurs monographiques",
            "Variables intermédiaires",
            "Facteurs culturels, économiques et sociaux",
            "Appartenances politiques",
            "Facteurs environnementaux et de modernité"
          ],
          "explanation": "Les catégories attendues sont les facteurs démographiques (écrit « monographiques »), les variables intermédiaires, les facteurs culturels, économiques et sociaux, ainsi que les facteurs environnementaux et de modernité.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answers": [
            "Facteurs monographiques",
            "Variables intermédiaires",
            "Facteurs culturels, économiques et sociaux",
            "Facteurs environnementaux et de modernité"
          ],
          "correct": [
            "Facteurs monographiques",
            "Variables intermédiaires",
            "Facteurs culturels, économiques et sociaux",
            "Facteurs environnementaux et de modernité"
          ]
        },
        {
          "type": "qcm",
          "text": "Choisir les deux types d'individus non pris en compte dans la population de droit.",
          "options": [
            "Visiteurs au moment du recensement",
            "Résidents absents au moment du recensement",
            "Résidents présents",
            "Résidents absents"
          ],
          "explanation": "La population de droit comprend les résidents présents et les résidents absents ; elle exclut les visiteurs. Les propositions B et D sont des doublons et décrivent des personnes incluses. Il n'existe donc pas deux bonnes réponses distinctes dans la liste.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "Visiteurs au moment du recensement",
          "correct": "Visiteurs au moment du recensement"
        },
        {
          "type": "qcm",
          "text": "Quel est l'effet négatif des migrations internationales sur le pays d'origine ?",
          "options": [
            "Constituer un capital productif",
            "Perturber l'organisation des sociétés",
            "Soulager le marché du travail",
            "Améliorer la balance des paiements par les envois de fonds"
          ],
          "explanation": "Le départ, notamment des jeunes adultes, peut perturber l'organisation des sociétés et priver la région de force de travail. Les autres propositions sont des effets positifs.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, p. 27.",
          "answer": "Perturber l'organisation des sociétés",
          "correct": "Perturber l'organisation des sociétés"
        },
        {
          "type": "qcm",
          "text": "Calculer le rapport de masculinité d'une population dont 60 % sont des femmes.",
          "options": [
            "25 %",
            "40 %",
            "60 %",
            "66,67 %"
          ],
          "explanation": "Les hommes représentent 40 %. Rapport = 40 / 60 × 100 = 66,67 %.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, p. 20.",
          "answer": "66,67 %",
          "correct": "66,67 %"
        },
        {
          "type": "qcm",
          "text": "La population est de 150 000 habitants au 31 décembre 2020 et de 180 000 au 31 décembre 2021. Calculer la population moyenne de 2021.",
          "options": [
            "75 000 habitants",
            "330 000 habitants",
            "165 000 habitants",
            "90 000 habitants"
          ],
          "explanation": "Population moyenne = (150 000 + 180 000) / 2 = 165 000.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "165 000 habitants",
          "correct": "165 000 habitants"
        },
        {
          "type": "qcm",
          "text": "Avec 330 décès et une population moyenne de 165 000 habitants, calculer le taux brut de mortalité.",
          "options": [
            "2 %",
            "2,2 %",
            "2 ‰",
            "2,2 ‰"
          ],
          "explanation": "Taux brut de mortalité = 330 / 165 000 × 1 000 = 2 ‰.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "2 ‰",
          "correct": "2 ‰"
        },
        {
          "type": "qcm",
          "text": "Quelle est la formule correcte de la population moyenne au cours d'une année N ?",
          "options": [
            "(P au 1/1/N + P au 31/12/N+1) / 2",
            "(P au 1/1/N-1 + P au 31/12/N) / 2",
            "(P au 1/1/N + P au 31/12/N) / 2"
          ],
          "explanation": "La population moyenne de l'année N est la moyenne de la population au début et à la fin de cette même année.",
          "source": "Connaissances générales de démographie (utilisées en complément du cours fourni)",
          "answer": "(P au 1/1/N + P au 31/12/N) / 2",
          "correct": "(P au 1/1/N + P au 31/12/N) / 2"
        },
        {
          "type": "qcm",
          "text": "Calculer le rapport de masculinité d'une population dont 80 % sont des femmes.",
          "options": [
            "20 %",
            "25 %",
            "75 %",
            "80 %"
          ],
          "explanation": "Les hommes représentent 20 %. Rapport de masculinité = 20 / 80 × 100 = 25 %.",
          "source": "Cours DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, p. 20.",
          "answer": "25 %",
          "correct": "25 %"
        }
      ]
    }
  ]
};

        /********************************************************************
     * VARIABLES GLOBALES
     ********************************************************************/
    const STORAGE_SUBJECTS = "DEMOGRAPHIE_EVALUATION_subjects_v2";
    const STORAGE_RESULTS = "DEMOGRAPHIE_EVALUATION_results_v2";
    const STORAGE_ATTEMPTS = "DEMOGRAPHIE_EVALUATION_attempts_v2";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUIZ_SETTINGS_KEY = "DEMOGRAPHIE_EVALUATION_quiz_settings_v3";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 999,
      displayMode: "all",
      questionType: "both",
      cameraEnabled: false,
      antiCheatEnabled: true
    };
    let quizSettings = loadQuizSettings();

    // Chaque évaluation démarre avec les 40 questions du sujet.
    // La banque complète reste disponible et le tirage est renouvelé à chaque tentative.

    function shuffleQuestions(items) {
      const shuffled = items.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function getExpectedAnswers(question) {
      if (Array.isArray(question.answers)) return question.answers;
      if (Array.isArray(question.correct)) return question.correct;
      return [question.answer || question.correct].filter(Boolean);
    }

    function getQuestionCategory(question) {
      const options = Array.isArray(question.options) ? question.options : [];
      const isTrueFalse = options.length === 2 && options.includes("Vrai") && options.includes("Faux");
      if (isTrueFalse) return "trueFalse";
      return getExpectedAnswers(question).length > 1 ? "multipleAnswers" : "singleAnswer";
    }

    function getQuizQuestionCount() {
      return quizSettings.questionCount;
    }

    function loadQuizSettings() {
      try {
        return { ...DEFAULT_QUIZ_SETTINGS, ...JSON.parse(localStorage.getItem(QUIZ_SETTINGS_KEY) || "{}") };
      } catch (error) {
        return { ...DEFAULT_QUIZ_SETTINGS };
      }
    }

    function getQuestionsForSelectedType(questionBank) {
      if (quizSettings.questionType === "qcd") {
        return questionBank.filter(question => getQuestionCategory(question) === "trueFalse");
      }
      if (quizSettings.questionType === "qcm") {
        return questionBank.filter(question => getQuestionCategory(question) !== "trueFalse");
      }
      return questionBank.slice();
    }

    function selectQuizQuestions(questionBank) {
      const available = getQuestionsForSelectedType(questionBank);
      const quantity = Math.min(Number(quizSettings.questionCount) || 15, available.length);
      return shuffleQuestions(available).slice(0, quantity);
    }

    function getQuestionOrderSignature(questions) {
      return questions.map(question => question.text || "").join("||");
    }

    function shuffleForNewLearningSession(subjectId, questions) {
      const storageKey = `FORMATION_EVALUATION_last_question_order_${subjectId}`;
      const previousSignature = localStorage.getItem(storageKey);
      let shuffled = shuffleQuestions(questions);

      // Évite de présenter exactement le même ordre lors de deux sessions
      // consécutives, même si le tirage aléatoire produit par hasard le même résultat.
      if (shuffled.length > 1 && getQuestionOrderSignature(shuffled) === previousSignature) {
        shuffled = [...shuffled.slice(1), shuffled[0]];
      }

      localStorage.setItem(storageKey, getQuestionOrderSignature(shuffled));
      return shuffled;
    }

    function prepareSubjectForQuiz(subject) {
      return cloneData(subject);
    }

    /********************************************************************
     * SUIVI DE SORTIE DE PAGE / ONGLET
     * L'étudiant n'est pas bloqué et ne reçoit pas d'avertissement.
     * Si la page, l'onglet ou la fenêtre est quitté pendant l'évaluation,
     * l'information est enregistrée et apparaît dans le résultat final.
     ********************************************************************/
    const PAGE_EXIT_TRACKING_CONFIG = {
      enabled: true
    };

    function isAntiCheatEnabled() {
      return PAGE_EXIT_TRACKING_CONFIG.enabled && quizSettings.antiCheatEnabled !== false;
    }

    let pageExitTrackingActive = false;
    let pageExitCount = 0;
    let pageExitEvents = [];
    let lastPageExitAt = 0;
    let quizWasFullscreen = false;
    let pageExitDetectedDuringQuiz = false;

    /********************************************************************
     * PHOTO OBLIGATOIRE AVANT ACCÈS À L'ÉVALUATION
     ********************************************************************/
    let cameraStream = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours le sujet intégré dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque le nouveau sujet.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getSubjectStatus(subject) {
      return subject && subject.programmed === true
        ? { key: "available", label: "Disponible", message: "Sujet disponible" }
        : { key: "locked", label: "Indisponible", message: "Ce sujet n’est pas disponible" };
    }


    /********************************************************************
     * SÉCURITÉ DE L'ÉVALUATION
     * L'étudiant continue son devoir jusqu'à la fin.
     * Tout incident détecté est enregistré et affichera "Auto envoi"
     * au résultat et dans l'administration.
     ********************************************************************/
    function isQuizVisible() {
      const quizView = document.getElementById("quizView");
      return pageExitTrackingActive && quizView && !quizView.classList.contains("hidden");
    }

    function registerPageExitEvent(reason, type = "incident") {
      if (!isAntiCheatEnabled() || !isQuizVisible()) return;

      const now = Date.now();

      // Évite de compter plusieurs fois le même incident en quelques secondes.
      if (now - lastPageExitAt < 1500) return;
      lastPageExitAt = now;

      pageExitDetectedDuringQuiz = true;
      pageExitCount++;
      pageExitEvents.push({
        type,
        reason,
        time: new Date().toLocaleString("fr-FR")
      });
    }

    function startPageExitTracking() {
      if (!isAntiCheatEnabled()) {
        stopPageExitTracking();
        pageExitDetectedDuringQuiz = false;
        pageExitCount = 0;
        pageExitEvents = [];
        return;
      }
      pageExitTrackingActive = true;
      pageExitDetectedDuringQuiz = false;
      pageExitCount = 0;
      pageExitEvents = [];
      lastPageExitAt = 0;
      quizWasFullscreen = Boolean(document.fullscreenElement);
    }

    function stopPageExitTracking() {
      pageExitTrackingActive = false;
    }

    function hasRealPageExitDuringQuiz() {
      return pageExitDetectedDuringQuiz === true && Number(pageExitCount || 0) > 0;
    }

    // Sortie réelle d'onglet, de page ou bascule vers une autre application.
    // On n'utilise plus window.blur, car sur téléphone il peut se déclencher
    // pendant des actions normales et mettait le résultat à zéro à tort.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        registerPageExitEvent("L'étudiant a quitté l'onglet, la page ou l'application", "sortie_page");
      }
    });

    // Appel, notification, volet système ou changement temporaire d'application.
    // Sur téléphone, un appel ou une notification peut déclencher blur / visibilitychange.
    window.addEventListener("blur", () => {
      registerPageExitEvent("Appel, notification ou perte de focus détecté", "appel_notification");
    });

    // Tentative de capture d'écran ou d'action système détectable au clavier.
    // Important : les navigateurs ne permettent pas de détecter toutes les captures,
    // surtout sur téléphone. Les touches détectables sont enregistrées.
    document.addEventListener("keydown", (event) => {
      if (!isQuizVisible()) return;
      const key = String(event.key || "").toLowerCase();
      const code = String(event.code || "").toLowerCase();
      const isPrintScreen = key === "printscreen" || code === "printscreen";
      const isScreenShortcut =
        isPrintScreen ||
        (event.ctrlKey && key === "p") ||
        (event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (isScreenShortcut) {
        registerPageExitEvent("Tentative de capture d'écran ou raccourci système détecté", "capture_ecran");
      }
    });

    document.addEventListener("contextmenu", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("Clic droit ou menu contextuel détecté", "menu_contextuel");
      event.preventDefault();
    });

    // Fermeture, actualisation ou navigation hors de la page.
    window.addEventListener("pagehide", () => {
      registerPageExitEvent("L'étudiant a quitté ou actualisé la page", "fermeture_actualisation");
    });

    // Sortie du mode plein écran, si l'évaluation était en plein écran.
    document.addEventListener("fullscreenchange", () => {
      if (!isQuizVisible()) return;

      if (document.fullscreenElement) {
        quizWasFullscreen = true;
        return;
      }

      if (quizWasFullscreen) {
        registerPageExitEvent("L'étudiant est sorti du mode plein écran", "plein_ecran");
      }
    });

    window.addEventListener("beforeunload", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("L'étudiant a tenté de fermer ou actualiser la page", "fermeture_actualisation");
      event.preventDefault();
      event.returnValue = "Une évaluation est en cours. Quitter la page peut interrompre votre composition.";
      return event.returnValue;
    });


    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      stopPageExitTracking();
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function getActiveMatricule() {
      return (window.activeStudentFullName || localStorage.getItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME") || "").trim();
    }

    function getStudentProfile() {
      const nomComplet = getActiveMatricule() || "APPRENANT";
      return {
        nom: nomComplet,
        prenom: "",
        nomComplet,
        matricule: nomComplet
      };
    }

    function updateStudentHeader() {
      const node = document.getElementById("studentHeaderName");
      if (!node) return;
      node.textContent = `${getStudentProfile().nomComplet} |`;
    }

    function getStudentResultsForDashboard() {
      const profile = getStudentProfile();
      return getResults().filter(item => {
        const matricule = String(item?.student?.matricule || "").trim();
        return matricule === profile.matricule;
      });
    }

    function renderStudentResultsTable() {
      const results = getStudentResultsForDashboard();
      if (results.length === 0) {
        return '<p class="student-empty-state">Aucune évaluation effectuée pour le moment.</p>';
      }

      const rows = results.slice().reverse().map(result => `
        <tr>
          <td>
            <strong>${escapeHTML(result.subjectTitle || "ÉVALUATION")}</strong>
            <div class="student-table-date">Terminée : ${escapeHTML(result.date || "")}</div>
          </td>
          <td><strong>${escapeHTML(result.note20 || "0.00")}</strong></td>
          <td>${Number(result.good || 0)}</td>
          <td>${Number(result.bad || 0)}</td>
        </tr>
      `).join("");

      return `
        <div class="student-table-wrap">
          <table class="student-results-table">
            <thead>
              <tr>
                <th>Évaluation</th>
                <th>Score</th>
                <th>Bonnes</th>
                <th>Mauvaises</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    function renderSubjects() {
      const homeView = document.getElementById("homeView");
      if (!homeView) return;

      updateStudentHeader();
      const profile = getStudentProfile();
      const availableSubjects = subjects.filter(subject => subject.programmed === true);

      const availableHtml = availableSubjects.length ? availableSubjects.map(subject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(subject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(subject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${subject.questions.length} — toutes affichées sur une seule page</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${subject.id}')">Commencer</button>
        </div>
      `).join("") : `<div class="student-empty-state">Aucun sujet disponible.</div>`;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <h2>${escapeHTML(profile.nomComplet)}</h2>
            <p><span>Nom et Prénoms :</span> <strong>${escapeHTML(profile.nomComplet)}</strong></p>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes sujets</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Sujets disponibles</h3>
            <p class="student-section-note">Choisissez l’un des deux sujets de démographie. Il n’y a pas de chronomètre : toutes les questions du sujet s’affichent directement.</p>
            ${availableHtml}
          </section>

          <section class="student-section-card">
            <h3>Évaluations effectuées</h3>
            <p class="student-section-note">Vous pouvez consulter votre note et le résumé de l'évaluation.</p>
            ${renderStudentResultsTable()}
          </section>
        </div>
      `;
    }

    function getQuizTypeLabel() {
      if (quizSettings.questionType === "qcd") return "QCD seulement";
      if (quizSettings.questionType === "qcm") return "QCM seulement";
      return "QCM et QCD";
    }

    function getMaximumQuestionCount(type = quizSettings.questionType) {
      const bank = subjects[0]?.questions || CONFIG.subjects[0]?.questions || [];
      if (type === "qcd") return bank.filter(q => getQuestionCategory(q) === "trueFalse").length;
      if (type === "qcm") return bank.filter(q => getQuestionCategory(q) !== "trueFalse").length;
      return bank.length;
    }

    function openQuizSettings() {
      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content settings-modal-content">
          <h2>⚙ Paramètres</h2>
          <p class="muted">Les sujets affichent toujours toutes leurs questions sur une seule page, sans chronomètre.</p>
          <div class="settings-toggle-row">
            <div>
              <strong>Anti-triche</strong>
              <small>Détecter les sorties de page pendant la composition.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsAntiCheatEnabled" type="checkbox" ${quizSettings.antiCheatEnabled !== false ? "checked" : ""}>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">${quizSettings.antiCheatEnabled !== false ? "Activé" : "Désactivé"}</span>
            </label>
          </div>
          <div class="actions settings-actions">
            <button class="btn-light" type="button" onclick="closeModal()">Annuler</button>
            <button class="btn-green" type="button" onclick="saveQuizSettings()">Enregistrer</button>
          </div>
        </div>`;
    }

    function updateSettingsQuestionLimit() {
      // Affichage fixé : toutes les questions, sur une seule page.
    }

    function saveQuizSettings() {
      quizSettings = {
        questionCount: 999,
        displayMode: "all",
        questionType: "both",
        cameraEnabled: false,
        antiCheatEnabled: document.getElementById("settingsAntiCheatEnabled")?.checked !== false
      };
      localStorage.setItem(QUIZ_SETTINGS_KEY, JSON.stringify(quizSettings));
      closeModal();
      renderSubjects();
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      const matriculeInput = document.getElementById(`matricule-${subjectId}`);
      if (matriculeInput) matriculeInput.value = getActiveMatricule();

      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }


    function stopCameraStream() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    function closeCameraGate() {
      stopCameraStream();
      const modal = document.getElementById("cameraGateModal");
      if (modal) modal.remove();
    }

    function beginEvaluationAfterPhoto(subjectId, student, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        ...student,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startPageExitTracking();
    }

    async function openCameraGate(subjectId, student) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Votre navigateur ne permet pas l'utilisation de la caméra. Utilisez Chrome, Edge ou Firefox avec un lien HTTPS.");
        return;
      }

      closeCameraGate();

      const modal = document.createElement("div");
      modal.id = "cameraGateModal";
      modal.className = "camera-gate-modal";
      modal.innerHTML = `

</div>
      `;
      document.body.appendChild(modal);

      const video = document.getElementById("cameraGateVideo");
      const takeBtn = document.getElementById("takeCameraPhotoBtn");
      const preview = document.getElementById("cameraGatePreview");
      const canvas = document.getElementById("cameraGateCanvas");

      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        video.srcObject = cameraStream;
      } catch (error) {
        closeCameraGate();
        alert("Caméra non activée. Vous devez autoriser la caméra et prendre une photo avant d'accéder à l'évaluation.");
        return;
      }

      takeBtn.onclick = () => {
        const width = 320;
        const videoWidth = video.videoWidth || 640;
        const videoHeight = video.videoHeight || 480;
        const height = Math.round(width * (videoHeight / videoWidth));

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        const photoData = canvas.toDataURL("image/jpeg", 0.65);

        preview.classList.remove("hidden");
        preview.innerHTML = `
<p>Photo prise avec succès.</p>`;
        takeBtn.textContent = "Accéder à l'évaluation";
        takeBtn.onclick = () => {
          closeCameraGate();
          beginEvaluationAfterPhoto(subjectId, student, photoData);
        };
      };
    }


    function startQuickEvaluation(subjectId) {
      beginQuizAfterCamera(subjectId, "");
    }

    function openCameraBeforeQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content camera-modal-content">
          <h2>Photo obligatoire avant l'évaluation</h2>
          <p class="muted">Autorisez la caméra, puis prenez une photo pour accéder à l'évaluation.</p>

          <div class="camera-box">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <canvas id="cameraCanvas" class="hidden"></canvas>
            <img id="cameraPhotoPreview" class="camera-photo-preview hidden" alt="Photo prise">
            <div id="cameraFallbackBox" class="camera-fallback-box hidden">
              <p><strong>Caméra directe bloquée ou indisponible.</strong></p>
              <p>Utilisez le bouton ci-dessous pour prendre une photo avec votre téléphone ou choisir une photo.</p>
              <label class="camera-file-btn">
                Prendre / choisir une photo
                <input id="cameraFileInput" type="file" accept="image/*" capture="user" onchange="handleStudentPhotoFile('${subjectId}', this)">
              </label>
            </div>
          </div>

          <div class="actions camera-actions">
            <button id="captureCameraBtn" class="btn-green" onclick="captureStudentPhoto('${subjectId}')">Prendre la photo</button>
            <button class="btn-light" onclick="closeCameraModal()">Annuler</button>
          </div>
          <p id="cameraError" class="camera-error hidden"></p>
        </div>
      `;

      startCompatibleCamera(subjectId);
    }

    function getCompatibleGetUserMedia() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return constraints => navigator.mediaDevices.getUserMedia(constraints);
      }

      const legacy =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (!legacy) return null;

      return constraints => new Promise((resolve, reject) => {
        legacy.call(navigator, constraints, resolve, reject);
      });
    }

    function startCompatibleCamera(subjectId) {
      const getMedia = getCompatibleGetUserMedia();
      const video = document.getElementById("cameraPreview");
      const captureBtn = document.getElementById("captureCameraBtn");

      if (!getMedia) {
        showCameraFallback(subjectId, "Votre navigateur ne permet pas la caméra directe.");
        return;
      }

      const attempts = [
        { video: { facingMode: "user" }, audio: false },
        { video: true, audio: false }
      ];

      function tryCamera(index) {
        if (index >= attempts.length) {
          showCameraFallback(subjectId, "La caméra directe est bloquée. Utilisez le bouton de photo proposé ci-dessous.");
          return;
        }

        getMedia(attempts[index])
          .then(stream => {
            window.currentCameraStream = stream;
            if (video) {
              video.srcObject = stream;
              video.classList.remove("hidden");
              video.play().catch(() => {});
            }
            if (captureBtn) captureBtn.disabled = false;
            const errorBox = document.getElementById("cameraError");
            if (errorBox) errorBox.classList.add("hidden");
          })
          .catch(() => tryCamera(index + 1));
      }

      if (captureBtn) captureBtn.disabled = false;
      tryCamera(0);
    }

    function showCameraFallback(subjectId, message = "") {
      const video = document.getElementById("cameraPreview");
      const fallback = document.getElementById("cameraFallbackBox");
      const captureBtn = document.getElementById("captureCameraBtn");
      const errorBox = document.getElementById("cameraError");

      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }

      if (video) {
        video.srcObject = null;
        video.classList.add("hidden");
      }
      if (fallback) fallback.classList.remove("hidden");
      if (captureBtn) captureBtn.disabled = true;

      if (message && errorBox) {
        errorBox.textContent = message + " Si possible, ouvrez le site en HTTPS ou en localhost.";
        errorBox.classList.remove("hidden");
      }
    }

    function handleStudentPhotoFile(subjectId, input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type || !file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        const photoData = event.target.result;
        window.currentStudentPhoto = photoData;

        const img = document.getElementById("cameraPhotoPreview");
        if (img) {
          img.src = photoData;
          img.classList.remove("hidden");
        }

        closeCameraModal();
        beginQuizAfterCamera(subjectId, photoData);
      };
      reader.onerror = () => alert("Impossible de lire la photo. Veuillez réessayer.");
      reader.readAsDataURL(file);
    }

    function closeCameraModal() {
      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }
      const modal = document.getElementById("modal");
      if (modal) {
        modal.className = "modal hidden";
        modal.innerHTML = "";
      }
    }

    function captureStudentPhoto(subjectId) {
      const video = document.getElementById("cameraPreview");
      const canvas = document.getElementById("cameraCanvas");
      const img = document.getElementById("cameraPhotoPreview");

      if (!video || !canvas || !video.srcObject) {
        showCameraFallback(subjectId, "Veuillez autoriser la caméra, puis reprendre la photo.");
        return;
      }

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoData = canvas.toDataURL("image/jpeg", 0.85);
      window.currentStudentPhoto = photoData;

      if (img) {
        img.src = photoData;
        img.classList.remove("hidden");
      }

      closeCameraModal();
      beginQuizAfterCamera(subjectId, photoData);
    }

    function beginQuizAfterCamera(subjectId, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const profile = getStudentProfile();
      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        nom: profile.nom,
        prenom: profile.prenom,
        matricule: profile.matricule,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startPageExitTracking();
    }

    function logoutStudent() {
      localStorage.removeItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME");
      window.activeStudentFullName = "";

      const accessPage = document.getElementById("accessPage");
      const siteHeader = document.getElementById("siteHeader");
      const mainContent = document.getElementById("mainContent");
      const input = document.getElementById("accessFullName");

      if (siteHeader) siteHeader.style.display = "none";
      if (mainContent) mainContent.style.display = "none";
      if (accessPage) accessPage.style.display = "flex";
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 50);
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = (document.getElementById(`matricule-${subjectId}`).value || getActiveMatricule()).trim();

      if (!matricule) {
        alert("Veuillez entrer votre nom et vos prénoms sur la première page.");
        location.reload();
        return;
      }
      if (!nom || !prenom) return alert("Veuillez renseigner nom et prénom.");

      // La caméra est désactivée : l'évaluation commence directement.
      beginEvaluationAfterPhoto(subjectId, { nom, prenom, matricule }, "");
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      const quizView = document.getElementById("quizView");
      const totalQuestions = currentSubject.questions.length;
      quizSettings.displayMode = "all";
      quizSettings.questionType = "both";

      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single">
          <div class="panel quiz-panel quiz-panel-clean">
            <form id="quizForm">
              <div class="all-questions-header">
                <h2>${escapeHTML(currentSubject.title)}</h2>
                <p class="muted all-questions-note">${totalQuestions} questions — toutes affichées sur cette page.</p>
              </div>
              ${currentSubject.questions.map((question, index) => `
                <section class="all-question-block">
                  <div class="all-question-number">Question ${index + 1} / ${totalQuestions}</div>
                  ${renderQuestion(question, index)}
                </section>`).join("")}
              <div class="question-navigation">
                <button type="button" class="btn-green" onclick="submitQuiz(false)">Valider ma composition</button>
              </div>
            </form>
          </div>
        </div>`;
      restoreAllQuestionAnswers();
      quizView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const options = Array.isArray(q.options) ? q.options : [];
      return `
        <div class="question question-clean">
          <p class="question-text-only">${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function saveCurrentQuestionAnswer() {
      const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]:checked`));
      savedQuestionAnswers[currentQuestionIndex] = selectedNodes.map(input => input.value);
    }

    function saveAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${index}"]:checked`));
        savedQuestionAnswers[index] = selectedNodes.map(input => input.value);
      });
    }

    function restoreAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        (savedQuestionAnswers[index] || []).forEach(value => {
          const input = Array.from(document.querySelectorAll(`input[name="q-${index}"]`)).find(node => node.value === value);
          if (input) input.checked = true;
        });
      });
    }

    function restoreCurrentQuestionAnswer() {
      const savedAnswers = savedQuestionAnswers[currentQuestionIndex] || [];
      savedAnswers.forEach(value => {
        const input = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]`))
          .find(node => node.value === value);
        if (input) input.checked = true;
      });
    }

    function goToNextQuestion() {
      saveCurrentQuestionAnswer();
      if (currentQuestionIndex >= currentSubject.questions.length - 1) {
        submitQuiz(false);
        return;
      }
      currentQuestionIndex++;
      renderQuiz();
    }

    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function renderSecurityEvents(events) {
      if (!events || !events.length) return "Aucun incident détecté";
      return events.map(item => escapeHTML(`${item.time || ""} - ${item.reason || "Incident de sécurité"}`)).join("<br>");
    }

    function submitQuiz(auto = false) {

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      if (quizSettings.displayMode === "all") saveAllQuestionAnswers();
      else saveCurrentQuestionAnswer();

      currentSubject.questions.forEach((q, index) => {
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = savedQuestionAnswers[index] || [];
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = expected.join(" ; ");
        let state = "empty";

        if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          score += Number(marking.wrong);
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: q.correction || q.explanation || "",
          source: q.source || "",
          state
        });
      });

      const maxScore = currentSubject.questions.length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      // Si l'étudiant sort de la page, de l'onglet, de l'application ou du plein écran,
      // il continue son devoir jusqu'à la fin. Au résultat, on affiche seulement
      // la mention "Auto envoi" et l'information est enregistrée dans l'administration.
      const pageExitDetected = hasRealPageExitDuringQuiz();
      const autoSend = pageExitDetected === true;

      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        studentPhoto: currentStudent.photo || "",
        photoTaken: Boolean(currentStudent.photo),
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        pageExitCount,
        pageExitEvents,
        securityEvents: pageExitEvents,
        pageExitDetected,
        autoSend,
        autoSendScoreZero: false
      };

      const results = getResults();
      results.push(result);
      saveResults(results);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function formatScoreForDisplay(value) {
      const numericValue = Number(value || 0);
      if (Number.isInteger(numericValue)) return String(numericValue);
      return numericValue.toFixed(2).replace(/\.00$/, "");
    }

    function renderResult(result) {
      stopPageExitTracking();
      // Afficher "Auto envoi" seulement si une sortie réelle a été détectée
      // pendant l'évaluation. La note calculée est conservée.
      const resultIsAutoSend = (result.autoSend === true || result.pageExitDetected === true);
      const displayedScore = Number(result.score || 0);
      const displayedResult = formatScoreForDisplay(displayedScore);
      const autoSendMessage = resultIsAutoSend ? '<div class="auto-send-message">Auto envoi</div>' : "";
      const mainContent = document.getElementById("mainContent");
      const resultPhoto = result.studentPhoto || result.student?.photo || "";
      const photoHtml = resultPhoto ? `
` : "";
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          ${autoSendMessage}
          <p class="score-big">${displayedResult}</p>
          <div class="grid">
            <div><strong>Statut :</strong> ${resultIsAutoSend ? "Auto envoi" : "Envoi normal"}</div>
            <div><strong>Nom et Prénoms :</strong> ${escapeHTML(result.student.matricule || `${result.student.nom || ""} ${result.student.prenom || ""}`.trim())}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${displayedScore}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>
            <div><strong>Incidents sécurité :</strong> ${Number(result.pageExitCount || 0)}</div>
            <div><strong>Détails sécurité :</strong><br>${renderSecurityEvents(result.pageExitEvents || result.securityEvents)}</div>
          </div>
          ${photoHtml}
          <br>
          <div class="actions">
            <button id="correctionToggleButton" type="button" class="btn-green" onclick="toggleCorrection()">Voir la correction</button>
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
          <div id="correctionBox" class="correction-box hidden">
            ${renderCorrection(result)}
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      const button = document.getElementById("correctionToggleButton");
      if (!box) return;
      const willShow = box.classList.contains("hidden");
      box.classList.toggle("hidden");
      if (button) button.textContent = willShow ? "Masquer la correction" : "Voir la correction";
      if (willShow) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        <p class="muted">Comparez vos réponses avec les bonnes réponses et lisez l'explication de chaque question.</p>
        ${result.answers.map((a, index) => {
          const answerState = a.state === "good" ? "Trouvé" : (a.state === "empty" ? "Non répondu" : "Non trouvé");
          return `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p class="answer-status ${a.state}"><strong>${answerState}</strong></p>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Réponse donnée :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Explication :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Explication :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
            ${a.source ? `<p><strong>Source :</strong> ${escapeHTML(a.source)}</p>` : ""}
          </div>
        `}).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Disponibilité</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Toujours disponible</td>
                  <td>${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Nom et Prénoms</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(r.student?.matricule || `${r.student?.nom || ""} ${r.student?.prenom || ""}`.trim())}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
</td>
                </tr>
              `).join("") || `<tr><td colspan="5">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 0,
        programmed: false,
        openDate: "",
        openTime: "",
        closeDate: "",
        closeTime: "",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><input id="edit-matter" value="${escapeAttr(subject.matter)}"></div>
                        <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
                      </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: 0,
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: "",
        openTime: "",
        closeDate: "",
        closeTime: "",
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    // Le suivi beforeunload est déjà géré plus haut avec le comptage des sorties.

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
