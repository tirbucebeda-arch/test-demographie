/********************************************************************
     * CONFIGURATION PRINCIPALE
     * Tu peux modifier ici le mot de passe admin, les sujets, les dates,
     * les questions, les réponses correctes, la durée et le barème.
     ********************************************************************/
    const ADMIN_PASSWORD = "admin123";

    const CONFIG = {
      defaultMarking: { correct: 1, wrong: -1, empty: 0 },
      subjects: [
  {
    "id": "demographie-evaluation-1",
    "title": "Évaluation de démographie N° 1",
    "matter": "Démographie — IDE3 / SFM3",
    "description": "Sujet du Dr ABO LAZARE. Correction préparée par Tirbuce Beda.",
    "instructions": "Répondez aux 40 questions. Les QCM peuvent comporter une ou plusieurs bonnes réponses.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-09-20",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcd",
        "text": "La population de référence en démographie est la population totale et partielle sur laquelle porte un recensement ou une enquête démographique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "La population de référence est l'ensemble, total ou partiel, sur lequel porte l'observation démographique.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, Population de référence."
      },
      {
        "type": "qcm",
        "text": "L'âge modal est :",
        "options": [
          "La valeur ou modalité minimale d'une variable",
          "L'âge qui regroupe l'effectif le plus élevé des individus",
          "L'âge qui divise l'effectif de la population en deux groupes égaux"
        ],
        "answer": "L'âge qui regroupe l'effectif le plus élevé des individus",
        "correct": "L'âge qui regroupe l'effectif le plus élevé des individus",
        "explanation": "Le mode est la modalité dont l'effectif est le plus élevé. L'âge qui partage la population en deux groupes égaux est l'âge médian.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, 2.2.2 Âge modal et 2.2.3 Âge médian."
      },
      {
        "type": "qcd",
        "text": "La population de fait est constituée des personnes présentes sur le territoire au moment du recensement, quelle que soit la durée de leur séjour.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "La population de fait correspond aux personnes présentes au moment du dénombrement. La durée de six mois sert plutôt à apprécier la résidence habituelle dans la population de droit.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, I.1 Population de fait et I.2 Population de droit."
      },
      {
        "type": "qcd",
        "text": "Le rapport de masculinité est obtenu en rapportant l'effectif des femmes à celui des hommes.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Faux",
        "correct": "Faux",
        "explanation": "Le rapport de masculinité se calcule en divisant le nombre d'hommes par le nombre de femmes, puis en multipliant par 100.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, 2.1.1 Rapport de masculinité."
      },
      {
        "type": "qcd",
        "text": "Les caractéristiques socioculturelles et les caractéristiques de l'activité économique sont les autres types de structures de la population.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Après l'âge et le sexe, le cours décrit des structures socioculturelles et des caractéristiques liées à l'activité économique.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, III Autres types de structure."
      },
      {
        "type": "qcd",
        "text": "La migration alternante correspond à des déplacements pendulaires hebdomadaires qui donnent naissance aux communes dortoirs, caractérisent les zones d'influence d'un type d'activité et permettent de délimiter le bassin d'emploi.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Faux",
        "correct": "Faux",
        "explanation": "La migration alternante décrite dans le cours est un déplacement pendulaire quotidien entre le domicile et le lieu de travail, et non hebdomadaire.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, Migration alternante."
      },
      {
        "type": "qcm",
        "text": "Un émigrant est défini comme :",
        "options": [
          "Une personne qui quitte son pays pour aller vivre à l'étranger",
          "Une personne qui quitte son village pour aller vivre dans un village étranger",
          "Une personne qui entre dans un pays étranger pour s'y établir",
          "Une personne qui entre dans un village étranger pour s'y établir"
        ],
        "answer": "Une personne qui quitte son pays pour aller vivre à l'étranger",
        "correct": "Une personne qui quitte son pays pour aller vivre à l'étranger",
        "explanation": "Un émigrant est considéré du point de vue du territoire qu'il quitte. La personne qui entre dans un pays est un immigrant.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, Migrant."
      },
      {
        "type": "qcm",
        "text": "Les sources de données dans l'étude de la mobilité spatiale des populations sont :",
        "options": [
          "Les registres de consultations de l'hôpital",
          "Les recensements de population",
          "Les enquêtes démographiques",
          "Les enquêtes de commodo et incommodo",
          "Les registres des populations"
        ],
        "answers": [
          "Les recensements de population",
          "Les enquêtes démographiques",
          "Les registres des populations"
        ],
        "correct": [
          "Les recensements de population",
          "Les enquêtes démographiques",
          "Les registres des populations"
        ],
        "explanation": "Le cours retient les recensements, les enquêtes démographiques et les registres de population comme sources des données migratoires.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, II Sources des données."
      },
      {
        "type": "qcm",
        "text": "Quel type de personne n'est pas pris en compte dans la population de droit d'un territoire ?",
        "options": [
          "Un visiteur présent lors du passage des agents recenseurs",
          "Un résident habituel temporairement absent",
          "Un résident habituel présent",
          "Un résident habituel en déplacement de courte durée"
        ],
        "answer": "Un visiteur présent lors du passage des agents recenseurs",
        "correct": "Un visiteur présent lors du passage des agents recenseurs",
        "explanation": "La population de droit comprend les résidents habituels présents et temporairement absents. Un visiteur relève de la population de fait du territoire visité, mais pas de sa population de droit.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, I.2 Population de droit."
      },
      {
        "type": "qcm",
        "text": "Un immigrant est défini comme :",
        "options": [
          "Une personne qui quitte son pays pour aller vivre à l'étranger",
          "Une personne qui quitte son village pour aller vivre à l'étranger",
          "Une personne qui entre dans un pays étranger pour s'y établir",
          "Une personne qui entre dans un village étranger pour s'y établir"
        ],
        "answer": "Une personne qui entre dans un pays étranger pour s'y établir",
        "correct": "Une personne qui entre dans un pays étranger pour s'y établir",
        "explanation": "Un immigrant est une personne qui entre dans un pays étranger pour s'y établir.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, Migrant."
      },
      {
        "type": "qcm",
        "text": "Parmi les facteurs suivants, lesquels peuvent influencer la fécondité ?",
        "options": [
          "Les facteurs démographiques",
          "Les variables intermédiaires",
          "Les facteurs culturels, économiques et sociaux",
          "Les appartenances politiques",
          "Les facteurs environnementaux et liés à la modernisation"
        ],
        "answers": [
          "Les facteurs démographiques",
          "Les variables intermédiaires",
          "Les facteurs culturels, économiques et sociaux",
          "Les facteurs environnementaux et liés à la modernisation"
        ],
        "correct": [
          "Les facteurs démographiques",
          "Les variables intermédiaires",
          "Les facteurs culturels, économiques et sociaux",
          "Les facteurs environnementaux et liés à la modernisation"
        ],
        "explanation": "La fécondité dépend de facteurs démographiques et de variables intermédiaires, eux-mêmes influencés par le contexte culturel, économique, social et environnemental. L'appartenance politique n'est pas retenue ici comme catégorie directe du modèle.",
        "source": "Connaissances démographiques générales, déterminants de la fécondité. Cette liste n'est pas détaillée dans les trois supports fournis."
      },
      {
        "type": "qcd",
        "text": "La population de droit ou population résidente est une population ayant son domicile habituel dans un territoire déterminé depuis plus de 6 mois.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Le support retient une durée de séjour supérieure à six mois pour qualifier la résidence habituelle.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, I.2 Population de droit."
      },
      {
        "type": "qcm",
        "text": "L'effet négatif des migrations internationales sur le pays d'origine vise à :",
        "options": [
          "Constituer un capital utilisé à des fins de production",
          "Perturber l'organisation des sociétés",
          "Soulager le marché du travail",
          "Améliorer la balance des paiements par les envois de fonds par les émigrants"
        ],
        "answer": "Perturber l'organisation des sociétés",
        "correct": "Perturber l'organisation des sociétés",
        "explanation": "Le départ, surtout des jeunes adultes, peut désorganiser la société et priver la région d'une partie de sa force de travail. Les autres propositions sont des effets potentiellement positifs.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, IV.4.2 Effets sur les pays d'origine."
      },
      {
        "type": "qcm",
        "text": "Quelles personnes appartiennent à la population de fait d'un territoire au moment du recensement ?",
        "options": [
          "Les résidents présents",
          "Les résidents habituels temporairement absents",
          "Les visiteurs présents lors du passage des agents recenseurs",
          "Les personnes vivant habituellement dans un autre territoire et absentes lors du recensement"
        ],
        "answers": [
          "Les résidents présents",
          "Les visiteurs présents lors du passage des agents recenseurs"
        ],
        "correct": [
          "Les résidents présents",
          "Les visiteurs présents lors du passage des agents recenseurs"
        ],
        "explanation": "La population de fait regroupe les personnes effectivement présentes : résidents présents et visiteurs. Les résidents temporairement absents appartiennent à la population de droit.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, I.1 et I.2. Correction fondée sur les définitions du cours."
      },
      {
        "type": "qcm",
        "text": "Quel est le rapport de masculinité d'une population de 250 000 habitants comprenant 60 % de femmes ?",
        "options": [
          "25 hommes pour 100 femmes",
          "40 hommes pour 100 femmes",
          "60 hommes pour 100 femmes",
          "66,67 hommes pour 100 femmes"
        ],
        "answer": "66,67 hommes pour 100 femmes",
        "correct": "66,67 hommes pour 100 femmes",
        "explanation": "Femmes = 250 000 x 60 % = 150 000. Hommes = 250 000 - 150 000 = 100 000. Rapport = 100 000 / 150 000 x 100 = 66,67 hommes pour 100 femmes.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, 2.1.1 Rapport de masculinité."
      },
      {
        "type": "qcm",
        "text": "La population de Koun-Fao est de 150 000 habitants au 31 décembre 2020 et de 180 000 habitants au 31 décembre 2021. Quelle est la population moyenne en 2021 ?",
        "options": [
          "75 000 habitants",
          "330 000 habitants",
          "165 000 habitants",
          "90 000 habitants"
        ],
        "answer": "165 000 habitants",
        "correct": "165 000 habitants",
        "explanation": "Population moyenne = (population au début + population à la fin) / 2 = (150 000 + 180 000) / 2 = 165 000 habitants.",
        "source": "Connaissances démographiques générales, formule de la population moyenne annuelle."
      },
      {
        "type": "qcm",
        "text": "Avec une population moyenne de 165 000 habitants et 330 décès en 2021, quel est le taux brut de mortalité de Koun-Fao ?",
        "options": [
          "2 pour cent",
          "2,2 pour cent",
          "2 pour mille",
          "2,2 pour mille"
        ],
        "answer": "2 pour mille",
        "correct": "2 pour mille",
        "explanation": "Taux brut de mortalité = 330 / 165 000 x 1 000 = 2 décès pour 1 000 habitants.",
        "source": "Connaissances démographiques générales, taux brut de mortalité."
      },
      {
        "type": "qcm",
        "text": "Choisir la bonne formule de la population moyenne au cours d'une année N :",
        "options": [
          "Pm = (P1/1/N + P31/12/N+1) / 2",
          "Pm = (P1/1/N-1 + P31/12/N) / 2",
          "Pm = (P1/1/N + P31/12/N) / 2"
        ],
        "answer": "Pm = (P1/1/N + P31/12/N) / 2",
        "correct": "Pm = (P1/1/N + P31/12/N) / 2",
        "explanation": "La population moyenne de l'année N est la moyenne de l'effectif au début et à la fin de cette même année.",
        "source": "Connaissances démographiques générales, population moyenne annuelle."
      },
      {
        "type": "qcm",
        "text": "Quel est le rapport de masculinité d'une population de 50 000 habitants comprenant 80 % de femmes ?",
        "options": [
          "20 hommes pour 100 femmes",
          "25 hommes pour 100 femmes",
          "75 hommes pour 100 femmes",
          "85 hommes pour 100 femmes"
        ],
        "answer": "25 hommes pour 100 femmes",
        "correct": "25 hommes pour 100 femmes",
        "explanation": "Femmes = 40 000 et hommes = 10 000. Rapport de masculinité = 10 000 / 40 000 x 100 = 25 hommes pour 100 femmes.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, État de la population, 2.1.1 Rapport de masculinité."
      },
      {
        "type": "qcm",
        "text": "À Man en 2021, la population est de 250 000 habitants, les naissances vivantes sont de 3 000 et les femmes en âge de reproduction représentent 20 % de la population. Quel est le taux général de fécondité ?",
        "options": [
          "30 pour cent",
          "60 pour cent",
          "30 pour mille",
          "60 pour mille"
        ],
        "answer": "60 pour mille",
        "correct": "60 pour mille",
        "explanation": "Femmes en âge de reproduction = 250 000 x 20 % = 50 000. Taux général de fécondité = 3 000 / 50 000 x 1 000 = 60 pour mille.",
        "source": "Connaissances démographiques générales, taux général de fécondité."
      },
      {
        "type": "qcm",
        "text": "Quel est le taux de mortalité post-néonatale à Man si 35 décès de 28 à 364 jours sont observés pour 3 000 naissances vivantes ?",
        "options": [
          "14 pour mille",
          "11,67 pour mille",
          "17,1 pour mille"
        ],
        "answer": "11,67 pour mille",
        "correct": "11,67 pour mille",
        "explanation": "Taux = 35 / 3 000 x 1 000 = 11,67 décès post-néonatals pour 1 000 naissances vivantes.",
        "source": "Connaissances démographiques générales, mortalité post-néonatale."
      },
      {
        "type": "qcm",
        "text": "Quel est le taux de mortalité néonatale précoce à Man si 25 décès de 0 à 7 jours sont observés pour 3 000 naissances vivantes ?",
        "options": [
          "8,33 pour mille",
          "1,7 pour mille",
          "7,1 pour mille"
        ],
        "answer": "8,33 pour mille",
        "correct": "8,33 pour mille",
        "explanation": "Taux = 25 / 3 000 x 1 000 = 8,33 décès néonatals précoces pour 1 000 naissances vivantes.",
        "source": "Connaissances démographiques générales, mortalité néonatale précoce."
      },
      {
        "type": "qcm",
        "text": "La densité de la Côte d'Ivoire est de 85 habitants/km² pour 322 462 km². Quelle population correspond à ces données ?",
        "options": [
          "27 027 409 habitants",
          "27 409 270 habitants",
          "24 709 270 habitants",
          "24 027 409 habitants"
        ],
        "answer": "27 409 270 habitants",
        "correct": "27 409 270 habitants",
        "explanation": "Population = densité x superficie = 85 x 322 462 = 27 409 270 habitants.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, 2.1.1 Densité de population."
      },
      {
        "type": "qcm",
        "text": "Quelles sont les principales sources permettant de recueillir des données sur la mortalité ?",
        "options": [
          "L'état civil",
          "Les fichiers administratifs et registres de population",
          "Les enquêtes démographiques",
          "Les recensements de population",
          "Les décès eux-mêmes"
        ],
        "answers": [
          "L'état civil",
          "Les fichiers administratifs et registres de population",
          "Les enquêtes démographiques",
          "Les recensements de population"
        ],
        "correct": [
          "L'état civil",
          "Les fichiers administratifs et registres de population",
          "Les enquêtes démographiques",
          "Les recensements de population"
        ],
        "explanation": "L'état civil, les recensements, les enquêtes et certains fichiers constituent des sources de données. Les décès sont les événements étudiés, pas une source de collecte.",
        "source": "SOURCES DE DONNEES DEMO, diapositives 5 à 23 ; DEMOGRAPHIE L2 INFAS 2025-2026, Sources de données démographiques."
      },
      {
        "type": "qcm",
        "text": "Quel est le taux de mortalité néonatale tardive à Man si 40 décès de 8 à 27 jours sont observés pour 3 000 naissances vivantes ?",
        "options": [
          "1,7 pour mille",
          "7,1 pour mille",
          "13,33 pour mille"
        ],
        "answer": "13,33 pour mille",
        "correct": "13,33 pour mille",
        "explanation": "Taux = 40 / 3 000 x 1 000 = 13,33 décès néonatals tardifs pour 1 000 naissances vivantes.",
        "source": "Connaissances démographiques générales, mortalité néonatale tardive."
      },
      {
        "type": "qcm",
        "text": "Quel est le taux de mortalité néonatale à Man avec 25 décès précoces et 40 décès tardifs pour 3 000 naissances vivantes ?",
        "options": [
          "21,67 pour mille",
          "11,67 pour mille",
          "8,33 pour mille",
          "13,33 pour mille"
        ],
        "answer": "21,67 pour mille",
        "correct": "21,67 pour mille",
        "explanation": "Décès néonatals = 25 + 40 = 65. Taux = 65 / 3 000 x 1 000 = 21,67 décès néonatals pour 1 000 naissances vivantes.",
        "source": "Connaissances démographiques générales, mortalité néonatale."
      },
      {
        "type": "qcd",
        "text": "L'objet de la démographie est la population humaine.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "La population humaine constitue l'objet d'étude de la démographie.",
        "source": "COURS DE DEMOGRAPHIE GENERALITE DION 2026, diapositive 17 ; DEMOGRAPHIE L2 INFAS 2025-2026, Généralités IV."
      },
      {
        "type": "qcm",
        "text": "Parmi les propositions suivantes, lesquelles ne sont pas présentées comme des composantes principales autonomes de la démographie dans le cours ?",
        "options": [
          "La démographie pure ou rationnelle",
          "La démographie théorique",
          "La démographie quantitative",
          "La démographie planétaire ou globale",
          "La démographie économique et sociale",
          "La démographie historique"
        ],
        "answers": [
          "La démographie théorique",
          "La démographie quantitative"
        ],
        "correct": [
          "La démographie théorique",
          "La démographie quantitative"
        ],
        "explanation": "La démographie théorique et la démographie quantitative sont présentées comme des éléments de la démographie pure. Les propositions A, D, E et F sont des composantes principales citées dans le cours.",
        "source": "COURS DE DEMOGRAPHIE GENERALITE DION 2026, diapositives 18 à 25 ; DEMOGRAPHIE L2 INFAS 2025-2026, Généralités V."
      },
      {
        "type": "qcd",
        "text": "La densité globale d'un pays se définit par le nombre total d'habitants divisé par sa superficie en km².",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "La densité globale est le rapport entre la population totale et la superficie du territoire.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Mobilité spatiale, 2.1.1 Densité de population."
      },
      {
        "type": "qcd",
        "text": "L'âge moyen à la maternité est l'âge moyen des mères à la naissance de leurs enfants.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Cet indicateur résume l'âge moyen des femmes au moment des naissances observées.",
        "source": "Connaissances démographiques générales, indicateurs de fécondité."
      },
      {
        "type": "qcd",
        "text": "La cohorte est un ensemble d'individus qui ont vécu en même temps un événement semblable appelé événement d'origine.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Le partage d'un même événement origine au même moment définit la cohorte.",
        "source": "COURS DE DEMOGRAPHIE GENERALITE DION 2026, diapositive 13 ; DEMOGRAPHIE L2 INFAS 2025-2026, Généralités I.1.8."
      },
      {
        "type": "qcd",
        "text": "La population d'une localité au 31 décembre de l'année N-1 est identique à celle de ladite localité au 1er janvier de l'année N.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Par convention de continuité, l'effectif de clôture au 31 décembre N-1 correspond à l'effectif d'ouverture au 1er janvier N, en l'absence d'un événement intercalé.",
        "source": "Connaissances démographiques générales, repérage temporel des populations."
      },
      {
        "type": "qcd",
        "text": "Une observation de suivi est un mode d'observation dans lequel les événements relatifs à une même personne sont rapprochés afin de les saisir dans leur succession.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Le rapprochement des événements concernant une même personne permet de suivre leur succession dans le temps.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Généralités, Observation de suivi."
      },
      {
        "type": "qcd",
        "text": "L'état de la population est l'effectif et la composition de la population selon divers critères variés.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "L'état décrit l'effectif et la composition selon l'âge, le sexe, l'état matrimonial, l'état de santé ou d'autres critères.",
        "source": "COURS DE DEMOGRAPHIE GENERALITE DION 2026, diapositive 7 ; DEMOGRAPHIE L2 INFAS 2025-2026, Généralités I.1.3."
      },
      {
        "type": "qcd",
        "text": "La mortalité juvénile est le décès qui survient entre 0 et 4 ans.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Faux",
        "correct": "Faux",
        "explanation": "La mortalité juvénile concerne habituellement les décès de 1 à 4 ans. Les décès avant un an relèvent de la mortalité infantile ; l'ensemble 0 à 4 ans correspond à la mortalité infanto-juvénile ou des moins de cinq ans.",
        "source": "Connaissances démographiques et sanitaires générales, indicateurs de mortalité de l'enfant."
      },
      {
        "type": "qcd",
        "text": "Le taux général de fécondité est un indicateur démographique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "Il rapporte les naissances vivantes à l'effectif des femmes en âge de procréer au cours de la période.",
        "source": "Connaissances démographiques générales, indicateurs de fécondité."
      },
      {
        "type": "qcd",
        "text": "La projection de population permet d'obtenir la population exacte d'une localité.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Faux",
        "correct": "Faux",
        "explanation": "Une projection fournit une estimation future fondée sur des hypothèses. Elle ne donne pas un effectif futur exact.",
        "source": "DEMOGRAPHIE L2 INFAS 2025-2026, Orientation nouvelle de la démographie, Introduction et I."
      },
      {
        "type": "qcd",
        "text": "Les décès influencent l'accroissement naturel.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Vrai",
        "correct": "Vrai",
        "explanation": "L'accroissement naturel résulte de la différence entre les naissances et les décès. Une augmentation des décès réduit donc cet accroissement.",
        "source": "COURS DE DEMOGRAPHIE GENERALITE DION 2026, diapositive 26 ; connaissances démographiques générales."
      },
      {
        "type": "qcd",
        "text": "La natalité désigne la fréquence des naissances au sein de la sous-population des femmes en âge de procréer.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "answer": "Faux",
        "correct": "Faux",
        "explanation": "La natalité rapporte les naissances à l'ensemble de la population. La fréquence des naissances chez les femmes en âge de procréer relève de la fécondité.",
        "source": "Connaissances démographiques générales, distinction natalité et fécondité."
      },
      {
        "type": "qcm",
        "text": "Les variables intermédiaires des facteurs influençant la fécondité sont :",
        "options": [
          "La mortalité",
          "La proportion des femmes mariées chez les femmes en âge de reproduction",
          "La pratique de la contraception et la stérilité permanente",
          "Le groupe ethnique",
          "Le statut de la femme",
          "L'infertilité post-partum"
        ],
        "answers": [
          "La proportion des femmes mariées chez les femmes en âge de reproduction",
          "La pratique de la contraception et la stérilité permanente",
          "L'infertilité post-partum"
        ],
        "correct": [
          "La proportion des femmes mariées chez les femmes en âge de reproduction",
          "La pratique de la contraception et la stérilité permanente",
          "L'infertilité post-partum"
        ],
        "explanation": "Les variables intermédiaires agissent directement sur l'exposition au risque de grossesse ou la capacité de concevoir : mariage ou union, contraception, stérilité et infertilité post-partum. Le groupe ethnique et le statut de la femme sont des facteurs de contexte.",
        "source": "Connaissances démographiques générales, variables intermédiaires de la fécondité. Cette partie n'est pas développée dans les trois supports fournis."
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
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUESTION_DURATION_SECONDS = 30;
    const QUIZ_SETTINGS_KEY = "DEMOGRAPHIE_EVALUATION_quiz_settings_v3";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 40,
      displayMode: "one",
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
      const selectedQuestions = selectQuizQuestions(subject.questions);
      return {
        ...cloneData(subject),
        questions: shuffleForNewLearningSession(subject.id, selectedQuestions)
      };
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
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
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
      clearInterval(timerInterval);
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
      const programmedSubjects = subjects.filter(subject => subject.programmed === true);
      const availableSubjects = programmedSubjects.filter(subject => getSubjectStatus(subject).key === "available");

      const availableHtml = availableSubjects.length ? availableSubjects.map(availableSubject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(availableSubject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Durée :</strong> ${availableSubject.duration} min</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${getQuizQuestionCount()} — ${getQuizTypeLabel()} — ${quizSettings.displayMode === "all" ? "toutes sur une page" : "question par question"}</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</div>
      `;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <h2>${profile.nomComplet}</h2>
            <p>
              <span>Nom et Prénoms :</span> <strong>${escapeHTML(profile.nomComplet)}</strong>
            </p>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes évaluations</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Sujet disponible</h3>
            <p class="student-section-note">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</p>
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
      const max = getMaximumQuestionCount();
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content settings-modal-content">
          <h2>⚙ Paramètres du quiz</h2>
          <div class="settings-field">
            <label for="settingsQuestionCount"><strong>Nombre de questions</strong></label>
            <input id="settingsQuestionCount" type="number" min="1" max="${max}" value="${Math.min(quizSettings.questionCount, max)}">
            <small id="settingsQuestionLimit" class="muted">Maximum disponible : ${max}</small>
          </div>
          <div class="settings-field">
            <label for="settingsDisplayMode"><strong>Mode d’affichage</strong></label>
            <select id="settingsDisplayMode">
              <option value="one" ${quizSettings.displayMode === "one" ? "selected" : ""}>Question par question</option>
              <option value="all" ${quizSettings.displayMode === "all" ? "selected" : ""}>Toutes les questions</option>
            </select>
          </div>
          <div class="settings-field">
            <label for="settingsQuestionType"><strong>Type de questions</strong></label>
            <select id="settingsQuestionType" onchange="updateSettingsQuestionLimit()">
              <option value="both" ${quizSettings.questionType === "both" ? "selected" : ""}>QCM et QCD</option>
              <option value="qcm" ${quizSettings.questionType === "qcm" ? "selected" : ""}>QCM seulement</option>
              <option value="qcd" ${quizSettings.questionType === "qcd" ? "selected" : ""}>QCD seulement (Vrai/Faux)</option>
            </select>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Caméra</strong>
              <small>Demander une photo avant de commencer le sujet.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsCameraEnabled" type="checkbox" disabled>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">Désactivée</span>
            </label>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Anti-triche</strong>
              <small>Détecter les sorties de page, changements d’application et raccourcis interdits.</small>
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
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const input = document.getElementById("settingsQuestionCount");
      input.max = max;
      if (Number(input.value) > max) input.value = max;
      document.getElementById("settingsQuestionLimit").textContent = `Maximum disponible : ${max}`;
    }

    function saveQuizSettings() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const requested = Number(document.getElementById("settingsQuestionCount").value);
      quizSettings = {
        questionCount: Math.max(1, Math.min(max, Number.isFinite(requested) ? Math.floor(requested) : 15)),
        displayMode: document.getElementById("settingsDisplayMode").value,
        questionType: type,
        cameraEnabled: false,
        antiCheatEnabled: document.getElementById("settingsAntiCheatEnabled").checked
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
      startTimer(QUESTION_DURATION_SECONDS);
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
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    function logoutStudent() {
      clearInterval(timerInterval);
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
      if (quizSettings.displayMode === "all") {
        quizView.innerHTML = `
          <div class="quiz-layout quiz-layout-single">
            <div class="panel quiz-panel quiz-panel-clean">
              <div class="question-timer-top question-timer-clean">
                <strong id="timer" class="timer question-timer">${String(Math.floor((totalQuestions * QUESTION_DURATION_SECONDS) / 60)).padStart(2, "0")}:00</strong>
                <div class="question-progress-wrap"><div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div></div>
              </div>
              <form id="quizForm">
                <p class="muted all-questions-note">${totalQuestions} questions affichées sur cette page.</p>
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
        return;
      }
      const q = currentSubject.questions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single">
          <div class="panel quiz-panel quiz-panel-clean">
            <div class="question-timer-top question-timer-clean">
              <strong id="timer" class="timer question-timer">00:30</strong>
              <div class="question-progress-wrap" aria-label="Progression du temps restant">
                <div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div>
              </div>
            </div>

            <form id="quizForm">
              ${renderQuestion(q, currentQuestionIndex)}
              <div class="question-navigation">
                <button type="button" class="btn-green" onclick="goToNextQuestion()">
                  ${isLastQuestion ? "Valider ma composition" : "Question suivante"}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
      restoreCurrentQuestionAnswer();
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
      startTimer(QUESTION_DURATION_SECONDS);
    }

    function startTimer(seconds) {
      if (quizSettings.displayMode === "all") seconds = currentSubject.questions.length * QUESTION_DURATION_SECONDS;
      let remaining = seconds;
      updateTimerDisplay(remaining, seconds);
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining, seconds);
        if (remaining <= 0) {
          clearInterval(timerInterval);
          if (quizSettings.displayMode === "all") submitQuiz(true);
          else goToNextQuestion();
        }
      }, 1000);
    }

    function updateTimerDisplay(seconds, totalSeconds = QUESTION_DURATION_SECONDS) {
      const safeSeconds = Math.max(0, seconds);
      const min = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
      const sec = (safeSeconds % 60).toString().padStart(2, "0");
      const el = document.getElementById("timer");
      if (el) el.textContent = `${min}:${sec}`;

      const progress = document.getElementById("questionProgressBar");
      if (progress) {
        const percent = totalSeconds > 0 ? Math.max(0, Math.min(100, (safeSeconds / totalSeconds) * 100)) : 0;
        progress.style.width = `${percent}%`;
        progress.classList.toggle("warning", percent <= 35 && percent > 15);
        progress.classList.toggle("danger", percent <= 15);
      }
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
      clearInterval(timerInterval);

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

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
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
        usedTime: formatDuration(usedSeconds),
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
            <div><strong>Temps utilisé :</strong> ${result.usedTime}</div>
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
      clearInterval(timerInterval);
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
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${getQuizQuestionCount()} tirées sur ${s.questions.length}</td>
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
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
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
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
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
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
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
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
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
