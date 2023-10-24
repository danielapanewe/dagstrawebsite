import imageemployeeone from '../assets/employee1.png';
import imageemployeetwo from '../assets/employee2.png';
import imageemployeethree from '../assets/employee3.png';
import imageemployeefour from '../assets/employee4.png';
import imageemployeefive from '../assets/employee5.png';
import imageemployeesix from '../assets/employee6.png';
import learningcourseimg from '../assets/learningcourse.jpg';
import learningcourse2 from '../assets/logicieldentreprise.png';
import learningcourse3 from '../assets/devmobile.jpg';
import learningcourse4 from '../assets/news2.jpg';
import learningcourse6 from '../assets/datamanageback.jpeg';
import learningcourse7 from '../assets/news1.jpg';
import projectimg1 from '../assets/Rea/gestion-de-projet.png';
import projectimg2 from '../assets/Rea/la-cyber-securite.png';
import projectimg3 from '../assets/Rea/une-analyse.png';
import projectimg4 from '../assets/Rea/e-commerce.png';
import projectimg5 from '../assets/Rea/poignee-de-main.png';
import projectimg6 from '../assets/Rea/ressources-humaines.png';
import projectimg7 from '../assets/Rea/soins-de-sante.png';
import projectimg8 from '../assets/Rea/videosurveillance.png';
import projectimg9 from '../assets/Rea/gestion-de-la-chaine-logistique.png';
import projectimg10 from '../assets/Rea/contenu.png';
import projectimg11 from '../assets/Rea/chef-de-projet.png';

export const featuresItem = [
    {
        id: 'business consulting',
        title: 'Business Consulting',
        content:
            'Nous aidons les clients à transformer leur entreprise, à améliorer leurs performances et à rester compétitifs sur le marché en utilisant les dernières technologies et les pratiques commerciales les plus avancées.',
        icon: 'uil uil-user-arrows',
    },
    {
        id: 'data analysis and understanding ',
        title: 'Data Analysis and understanding ',
        content:
            'Nous aidons les clients à tirer le meilleur parti de leurs données  pour améliorer les performances commerciales et prendre des décisions plus éclairées',
        icon: 'uil uil-comparison',
    },
    {
        id: 'it Support',
        title: 'IT Support',
        content:
            'Nous travaillons en étroite collaboration avec les clients pour comprendre leurs besoins informatiques uniques et offrir des solutions sur mesure pour répondre à leurs besoins',
        icon: 'uil uil-laptop',
    },
    {
        id: 'agile projectmanagement',
        title: 'Agile Project Management',
        content:
            ' Nous travaillons en étroite collaboration avec les clients pour comprendre leurs objectifs commerciaux et les aider à élaborer un plan de projet qui répond à leurs besoins.',
        icon: 'uil uil-bag',
    },
];

export const employee = [
    {
        id: 'employee1',
        image: `${imageemployeeone}`,
        alt: 'employé 1',
        nom: 'Olivier',
        position: 'Fullstack Developer',
        description: `Son rôle est concevoir et de développer les applications web en travaillant sur tous les aspets du développement tant front-end que back-end.`,
    },

    {
        id: 'employee2',
        image: `${imageemployeetwo}`,
        alt: 'employé 1',
        nom: 'Hermine',
        position: 'Senior Cloud Architect',
        description: `Son rôle est de concevoir et de superviser l'architecture des systèmes informatiques basés sur le cloud pour les entreprises en veillant à la sécurité a l'évolution des systèmes.`,
    },
    {
        id: 'employee3',
        image: `${imageemployeethree}`,
        alt: 'employé 1',
        nom: 'Antoinne',
        position: 'Senior Enterprise Architect',
        description: `Son rôle est de concevoir et superviser l'architecture informatique globale d'une entreprise en veillant à l'alignement de la stratégie informatique avec la stratégie globale de l'entreprise.`,
    },

    {
        id: 'employee4',
        image: `${imageemployeefour}`,
        alt: 'employé 1',
        nom: 'Christian',
        position: 'Senior Big Data Engineering',
        description: `Son rôle est de concevoir et de gérer l'infrastructure de données d'une entreprise en utilisant des outils et des technologies de pointe pour stocker, traiter et analyser de grandes quantités de données de manière efficace et évolutive.`,
    },
    {
        id: 'employee5',
        image: `${imageemployeefive}`,
        alt: 'employé 1',
        nom: 'Joseph',
        position: 'Chief of Technologie Office',
        description: `Son rôle est de superviser la stratégie technologique d'une entreprise et veiller à ce que les initiatives technologiques soient alignées sur les objectifs commerciaux d'entreprise.`,
    },
    {
        id: 'employee6',
        image: `${imageemployeesix}`,
        alt: 'employé 1',
        nom: 'Lucas',
        position: 'Senior Project Manager',
        description: `Son rôle est gérer les projets de grandes envergures et assurer leur réussite.`,
    },
];

export const formations = [
    {
        id: 'course1',
        image: `${learningcourseimg}`,
        alt: 'formation 1',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: 'Marketing Digital',
    },

    {
        id: 'course7',
        image: `${learningcourse7}`,
        alt: 'formation 7',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: 'Business Intelligence',
    },
    {
        id: 'course5',
        image: `${learningcourseimg}`,
        alt: 'formation 5',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: 'Linux, Ubuntu',
    },
    {
        id: 'course6',
        image: `${learningcourse6}`,
        alt: 'formation 6',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: 'Big Data',
    },

    {
        id: 'course3',
        image: `${learningcourse3}`,
        alt: 'formation 3',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: "Développement d'applications mobiles avec Flutter",
    },

    {
        id: 'course4',
        image: `${learningcourse4}`,
        alt: 'formation 4',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: 'Gestion de projets avec Scrum, ITIL, PMP',
    },
    {
        id: 'course2',
        image: `${learningcourse2}`,
        alt: 'formation 2',
        nom: '150 000FCFA (3 mois)',
        position: 'Avec stage en entreprise',
        description: 'Création de sites web professionnels sous Wordpress',
    },
];

export const featuresCamera = [
    {
        id: 'Sécurisée et fiable',
        title: 'Sécurisée et fiable',
        content: 'Solution sécurisée, complète, simple et efficace.',
        icon: 'uil uil-shield-check',
    },
    {
        id: 'Qualité de service assurée ',
        title: 'Qualité de service assurée ',
        content:
            'Des équipements de qualité et une possibilité de stockage et de restitution des données dans un délai de 48h.',
        icon: 'uil uil-award',
    },
    {
        id: 'Exécution',
        title: 'Exécution',
        content: 'Temps de déploiement rapide et à coût minimal.',
        icon: 'uil uil-hourglass',
    },
    {
        id: 'Technologie',
        title: 'Technologie',
        content: 'Solution fiable, simple et innovante.',
        icon: 'uil uil-laptop',
    },
];

export const testimonyslider = [
    {
        id: 'jeanettedejean',
        image: `${imageemployeeone}`,
        nameperson: 'Waffo Jean',
        avis: `Je suis extêmement satisfait du travail effectué par cette entreprise. Ils ont fait preuve d'un grand engagement envers la qualité et la satisfaction du client, en travaillant avec moi à chaque étape pour s'assurer que mes besoins étaient satisfaits. Je recommande fortement cette entreprise à quiconque cherche un partenaire fiable et dévoué pour ses projets.`,
    },
    {
        id: 'kamgabertin',
        image: `${imageemployeethree}`,
        nameperson: 'Kamga Bertin',
        avis: `J'ai été très impressionné par le niveau de service et d'attention aux détails fournis par l'équipe de cette entreprise. Ils se sont vraiment engagés à fournir un produit de haute qualité et à s'assurer que j'étais satisfait à chaque étape du processus. Je recommande fortement leurs services à quiconque cherche à travailler avec une entreprise qui met les clients au premier plan.`,
    },

    {
        id: 'magnetagne',
        image: `${imageemployeeone}`,
        nameperson: 'Celest Martin',
        avis: `Je suis vraiment reconnaissant envers l'équipe de cette entreprise pour leur engagement envers la qualité et la satisfaction du client. Ils ont travaillé dur pour s'assurer que mes besoins étaient satisfaits et que le produit final était exactement ce que je cherchais. Leur attention aux détails et leur professionnalisme ont vraiment été appréciés. Je recommande vivement leurs services à tous ceux qui cherchent un partenaire fiable et de qualité pour leurs projets.`,
    },
];

export const descriptionitems = [
    {
        id: 'descriptionone',
        content: 'Dissuasion des actes de malveillance',
    },
    {
        id: 'descriptiontwo',
        content:
            '  Protection de vos collaborateurs, de vos clients et de vos visiteurs',
    },
    {
        id: 'descriptionthree',
        content:
            ' Surveillance de votre site et de ses zones sensibles ou à risques',
    },
    {
        id: 'descriptionfour',
        content:
            'Surveillance de vos biens, marchandises ou données à forte valeur',
    },
    {
        id: 'descriptionfive',
        content: ' Lutte contre le vol et la démarque (inconnue ouinterne)',
    },
    {
        id: 'descriptionsix',
        content:
            ' Outil de preuve en cas d’intrusion, de vol, d’agression ou de litige',
    },
    {
        id: 'descriptionseven',
        content:
            'Outil de gestion et de pilotage (comptage de personnes, traçabilité de colis,…)',
    },
];
export const descriptionnetwork = [
    {
        id: 'descriptionone',
        content: "La réduction des coûts d'infrastructure",
    },
    {
        id: 'descriptiontwo',
        content: " L'amélioration de l'efficacité des opérations",
    },
    {
        id: 'descriptionthree',
        content:
            ' La facilité de partage de ressources, des données et des périphériques',
    },
    {
        id: 'descriptionfour',
        content: 'La collaboration en temps réel',
    },
    {
        id: 'descriptionfive',
        content:
            " L'amélioration de la communication et de la coordination entre les utilisateurs et les services",
    },
];
export const descriptionformation = [
    {
        id: 'descriptionone',
        content: 'Diagnostiquer et résoudre des problèmes informatiques',
    },
    {
        id: 'descriptiontwo',
        content:
            'Installer et configurer des systèmes informatiques, des logiciels et des applications',
    },
    {
        id: 'descriptionthree',
        content:
            'Maintenir et mettre à jour les systèmes informatiques et les réseaux',
    },
    {
        id: 'descriptionfour',
        content: 'Gérer les sauvegardes et les restaurations de données',
    },
    {
        id: 'descriptionfive',
        content: "Gérer les demandes d'assistance technique des utilisateurs",
    },
    {
        id: 'descriptionsix',
        content:
            '•	Mettre en place des mesures de sécurité informatique pour protéger les données et les systèmes.',
    },
];

export const featurewebdevelopment = [
    {
        id: 'feature1',
        content: 'Site Vitrine',
    },
    { id: 'feature2', content: 'Site e-commerce' },
    {
        id: 'feature3',
        content: 'Plateforme de formation en ligne (e-learning)',
    },
    { id: 'feature4', content: 'Application Web' },
];
export const featuremobiledevelopment = [
    {
        id: 'feature1',
        content: 'Développement d’Application ANDROID',
    },
    { id: 'feature2', content: 'Développement d’Application NATIVES' },
    {
        id: 'feature3',
        content: 'Développement d’Application IOS',
    },
    { id: 'feature4', content: 'Développement d’Application HYBRIDES' },
];
export const featureempty = [];

export const projectitem = [
    {
        id: 'projectitem1',
        image: `${projectimg1}`,
        categorie: 'applicationweb',
        name: `Développement d'une plateforme de gestion de projet `,
        description: `DAGSTRA a développé une plateforme de gestion de projet pour aider les entreprises à suivre leurs projets, à gérer les tâches et à collaborer efficacement. La plateforme est facile à utiliser et personnalisable en fonction des besoins de l'entreprise.`,
    },
    {
        id: 'projectitem2',
        image: `${projectimg2}`,
        categorie: 'applicationweb',
        name: `Solution de cybersécurité `,
        description: `DAGSTRA a conçu une solution de cybersécurité complète pour protéger les données sensibles des entreprises. La solution comprend des pares-feux, des antivirus, des logiciels de détection des intrusions et des solutions de sauvegarde et de récupération.`,
    },
    {
        id: 'projectitem3',
        image: `${projectimg3}`,
        categorie: 'applicationweb',
        name: `Solution d'analyse de données `,
        description: `DAGSTRA a créé une solution d'analyse de données qui permet aux entreprises de collecter, de stocker, de gérer et d'analyser de grandes quantités de données. La solution permet aux entreprises de prendre des décisions éclairées en utilisant des informations exploitables.`,
    },
    {
        id: 'projectitem4',
        image: `${projectimg4}`,
        categorie: 'applicationweb',
        name: `Plateforme de commerce électronique `,
        description: `DAGSTRA a développé une plateforme de commerce électronique complète pour aider les entreprises à vendre leurs produits en ligne. La plateforme comprend des fonctionnalités de paiement en ligne, de gestion des commandes et de suivi des expéditions.`,
    },
    {
        id: 'projectitem5',
        image: `${projectimg5}`,
        categorie: 'applicationweb',
        name: `Solution de gestion de la relation client`,
        description: `DAGSTRA a conçu une solution de gestion de la relation client qui permet aux entreprises de suivre les interactions avec les clients, de gérer les plaintes et de fournir un service client exceptionnel.`,
    },
    {
        id: 'projectitem6',
        image: `${projectimg6}`,
        categorie: 'applicationweb',
        name: 'Système de gestion des ressources humaines',
        description: ` DAGSTRA a développé un système de gestion des ressources humaines pour une entreprise de 500 employés, permettant une gestion efficace des données relatives aux employés, des feuilles de temps et des congés payés.`,
    },
    {
        id: 'projectitem7',
        image: `${projectimg7}`,
        categorie: 'applicationmobile',
        name: 'Application mobile de suivi de la condition physique ',
        description: `DAGSTRA a dévellopé une application mobile de suivi de la condition physique pour une entreprise de santé, permettant aux utilisateurs de suivre leur activité physique, leur nutrition et leur sommeil`,
    },
    {
        id: 'projectitem8',
        image: `${projectimg8}`,
        categorie: 'videosurveillance',
        name: 'Système de surveillance vidéo',
        description: `DAGSTRA a mis en place un système de surveillance vidéo pour une entreprise de sécurité, permettant une surveillance en temps réel des sites critiques et des alertes automatisées en cas d'activité suspecte.`,
    },
    {
        id: 'projectitem9',
        image: `${projectimg1}`,
        categorie: 'applicationweb',
        name: 'Système de gestion de projet',
        description: `DAGSTRA a crée un système de gestion de projet pour une entreprise de construction, permettant une planification et une coordination efficace des ressources, des échéances et des budgets de projet.`,
    },
    {
        id: 'projectitem10',
        image: `${projectimg9}`,
        categorie: 'applicationweb',
        name: 'Système de gestion de chaîne d\'approvisionnement',
        description: `DAGSTRA a mis en place d'un système de gestion de la chaîne d'approvisionnement pour une entreprise de fabrication, améliorant la visibilité et la traçabilité de la chaîne d'approvisionnement de bout en bout.`,
    },
    {
        id: 'projectitem11',
        image: `${projectimg10}`,
        categorie: 'applicationweb',
        name: 'Système de gestion de Contenu',
        description: `DAGSTRA a développé un système de gestion de contenu pour une entreprise de médias, permettant une gestion facile et efficace des articles, des vidéos et des images.`,
    },
    {
        id: 'projectitem12',
        image: `${projectimg11}`,
        categorie: 'applicationweb',
        name: 'Système de gestion des opérations',
        description: `DAGSTRA a développé un système de gestion des opérations pour une entreprise de logistique, permettant une planification et une exécution efficaces des opérations de transport et de distribution.
        `,
    },
    {
        id: 'projectitem13',
        image: `${projectimg4}`,
        categorie: 'applicationweb',
        name: `Plateforme de commerce électronique `,
        description: `DAGSTRA a développé une plateforme de commerce électronique pour une entreprise de vente au détail, avec une interface conviviale et un système de paiement sécurisé.`,
    },
];

export const projectbtnnav = [
    { id: 'btn1', name: 'Tout', value: 'tout' },
    { id: 'btn2', name: 'Applications Web', value: 'applicationweb' },
    { id: 'btn3', name: 'Applications Mobile', value: 'applicationmobile' },
    { id: 'btn4', name: 'Video Surveillance', value: 'videosurveillance' },
];
