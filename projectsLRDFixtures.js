const projectsLRDFixtures = [
  {
    name: 'TryadeDashboard',
    description:
      "Création d'un dashboard pour la plateforme FiveM (MOD GTA V) TryadeRP",
    pages: [
      {
        image: 'https://i.ibb.co/TPSpdGX/image.png',
        description: "Page d'accueil",
        url: 'https://triade-dashboard.vercel.app/',
        features: ["Vue d'ensemble des informations de l'entreprise"],
      },
      {
        image: 'https://i.ibb.co/JvnQsr1/image.png',
        description: 'Page de gestion des employés',
        url: 'https://triade-dashboard.vercel.app/employees',
        features: [
          "Visualisation de l'ensemble des employés sous forme de tableau paginé",
          'Promouvoir un employé',
          'Rétrograder un employé',
          'Licencier un employé',
          "Accés a la page de personnalisation d'un employé",
          "Acces a la page de création d'un employé",
        ],
      },
      {
        image: 'https://i.ibb.co/MnyJxCh/image.png',
        description: "Page de création d'un nouvel employé",
        url: 'https://triade-dashboard.vercel.app/employees/employee/add',
        features: [
          "Création d'un nouvel employé",
          "Gestion et affichage des erreurs des données entrées par l'utilisateur dans le formulaire",
        ],
      },
      {
        image: 'https://i.ibb.co/P1LcqNC/image.png',
        description: 'Page de gestion des grades',
        url: 'https://triade-dashboard.vercel.app/ranks',
        features: [
          "Visualisation de l'ensemble des grades sous forme de tableau paginé",
          "Augmenter la valeur d'un grade",
          "Diminuer la valeur d'un grade",
          'Supprimer un grade',
          "Accés a la page de personnalisation d'un grade",
          "Acces a la page de création d'un grade",
        ],
      },
      {
        image: 'https://i.ibb.co/3NQFMHX/image.png',
        description: "Page de création d'un nouveau grade",
        url: 'https://triade-dashboard.vercel.app/ranks/rank/add',
        features: [
          "Création d'un nouveau grade",
          "Gestion et affichage des erreurs des données entrées par l'utilisateur dans le formulaire",
        ],
      },
      {
        image: 'https://i.ibb.co/82ty2F3/image.png',
        description: 'Page de gestion des finances',
        url: 'https://triade-dashboard.vercel.app/finance',
        features: [
          "Visualisation de l'ensemble des finances sous forme de graphique",
          "Visualisation de l'argent rapporté par chaque employé sous forme de tableau paginé",
          'Visualisation de chaque depenses sous forme de tableau paginé',
        ],
      },
      {
        image: 'https://i.ibb.co/511bqhB/image.png',
        description: 'Page de gestion des améliorations',
        url: 'https://triade-dashboard.vercel.app/improvements',
        features: [
          "Possiblité d'acheter les améliorations pour le stockage",
          "Possiblité d'acheter les améliorations pour le personnel",
          "Possiblité d'acheter les améliorations pour le garage",
        ],
      },
      {
        image: 'https://i.ibb.co/1MDDyZC/image.png',
        description: 'Page de visualisation des activités',
        url: 'https://triade-dashboard.vercel.app/activities',
        features: [
          "Visualisation de l'ensemble des activités sous forme de tableau paginé",
          'Filtrage des activités par stockage, factures, service et garage',
        ],
      },
    ],
    github: 'https://github.com/DevWeb13/triade-dashboard',
    date: '2023-06',
    category: 'professionnal',
    tecnologies: ['react', 'sass', 'js', 'vercel', 'node'],
    logo: './assets/tryadeLogo.svg',
  },
];

module.exports = projectsLRDFixtures;
