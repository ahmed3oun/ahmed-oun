const devQuizTranslations = {
  en: {
    welcome: {
      title: "Welcome to Dev Quiz",
      friendlySentence:
        "As developers, there&apos;s always a ton to keep in mind. Like any skill, memory needs regular practice. I&apos;ve always enjoyed using quizzes and flashcards to sharpen my brain for those tricky concepts, so I went ahead and built my own.",
      noDifficultySentence:
        "No difficulty levels here! questions are pulled at random, mixing everything from beginner to advanced.",
      haveFun: "Have Fun",
      pickTopic: "Pick a topic",
      setNumber: "Set the number of questions",
      start: "START",
      startButton: "Start Quiz",
    },

    /* ──────────────── CHOOSE TOPIC ──────────────── */
    chooseTopic: {
      title: "Choose Your Topics",
      error: "Please select at least one topic.",
      selected: "Selected Topics:",
      cancel: "Cancel",
      nextButton: "Next",

      topics: {
        coreConcepts: {
          name: "Core Concepts",
          description:
            "Essential fundamentals including OOP, Data Structures, Algorithms, and problem-solving patterns.",
        },
        javascript: {
          name: "JavaScript",
          description:
            "Deep dive into the language itself: syntax, types, closures, prototypes, and more.",
        },
        typescript: {
          name: "TypeScript",
          description:
            "Covers static typing, interfaces, generics, compiler options, and advanced TS features.",
        },
        node: {
          name: "Node.js",
          description:
            "Focus on the runtime environment: event loop, FS module, middleware, async patterns, etc.",
        },
        database: {
          name: "Database",
          description:
            "SQL vs. NoSQL, indexing, normalization, transactions, and practical query examples.",
        },
        cloud: {
          name: "Cloud",
          description:
            "Cloud services overview (AWS, Azure, GCP), deployments, IaC, serverless, scaling, and more.",
        },
        html: {
          name: "HTML",
          description:
            "Semantic tags, forms, accessibility, responsive design, and HTML5 APIs.",
        },
        css: {
          name: "CSS",
          description:
            "Styling techniques, layouts (Flexbox/Grid), responsiveness, preprocessors, performance, etc.",
        },
        react: {
          name: "React",
          description:
            "Covers React Hooks, Virtual DOM, lifecycle, state management, and ecosystem best practices.",
        },
        next: {
          name: "Next.js",
          description:
            "Server-side rendering (SSR), static site generation (SSG), routing, API routes, and optimizations.",
        },
        reactnative: {
          name: "React Native",
          description:
            "Mobile development with React. Components, styling, navigation, and platform APIs.",
        },
        api: {
          name: "API",
          description:
            "HTTP methods, REST principles, authentication (JWT), GraphQL, error handling, and best practices.",
        },
        blockchain: {
          name: "Blockchain",
          description:
            "Consensus mechanisms, smart contracts, dApp development, security, and real-world blockchain use cases.",
        },
        csharp: {
          name: "C#",
          description:
            "C# language features, OOP, LINQ, async/await, collections, modern features",
        },
        dotnet: {
          name: ".NET",
          description:
            ".NET Core/5+, ASP.NET Core, Entity Framework, Blazor, SignalR, middleware",
        },
      },
    },

    selectNumber: {
      title: "How many questions?",
      total: "Total Questions:",
      cancel: "Cancel",
      previous: "Previous",
      startButton: "Start Quiz",
    },

    quiz: {
      topic: "Topic:",
      question: "Question",
      of: "of",
      quit: "Quit",
      quitQuiz: "Quit Quiz",
      areYouSureToQuit: "Are you sure you want to quit the quiz?",
      cancel: "Cancel",
      finish: "Finish",
      next: "Next",
      leaveQuiz: "Leave Quiz",
      areYouSureToLeave: "Are you sure you want to leave the quiz?",
      leave: "Leave",
      correct: "Correct.",
      incorrect: "Incorrect.",
    },

    result: {
      title: "Your Results",
      topic: "Topics",
      outOf: "out of",
      time: "Time Taken",
      leave: "Leave Quiz",
      restart: "Start Over",
    },
  },

  /* ──────────────────────────────── FRENCH ──────────────────────────────── */
  fr: {
    welcome: {
      title: "Bienvenue sur le Quiz Dev",
      friendlySentence:
        "En tant que développeurs, nous avons constamment des notions à garder à l'esprit. Comme toute compétence, la mémoire s'entraîne. Voici un quiz interactif pour réviser et affûter vos connaissances techniques !",
      noDifficultySentence:
        "Pas de niveau rigide ! Les questions sont tirées aléatoirement, du niveau débutant aux concepts avancés.",
      haveFun: "Bonne chance !",
      pickTopic: "Choisissez un thème",
      setNumber: "Nombre de questions",
      start: "DÉMARRER",
      startButton: "Commencer le quiz",
    },

    /* ──────────────── CHOISIR UN THÈME ──────────────── */
    chooseTopic: {
      title: "Choisissez vos thèmes",
      error: "Veuillez sélectionner au moins un thème.",
      selected: "Thèmes sélectionnés :",
      cancel: "Annuler",
      nextButton: "Suivant",

      topics: {
        coreConcepts: {
          name: "Concepts Fondamentaux",
          description:
            "Fondamentaux essentiels : POO, structures de données, algorithmes et patrons de conception.",
        },
        javascript: {
          name: "JavaScript",
          description:
            "Le langage en profondeur : syntaxe, types, fermetures (closures), prototypes et plus.",
        },
        typescript: {
          name: "TypeScript",
          description:
            "Typage statique, interfaces, génériques, options du compilateur et fonctionnalités avancées.",
        },
        node: {
          name: "Node.js",
          description:
            "Environnement d'exécution : boucle d'événements (event loop), module FS, middleware et asynchronisme.",
        },
        database: {
          name: "Bases de données",
          description:
            "SQL vs NoSQL, indexation, normalisation, transactions et requêtes pratiques.",
        },
        cloud: {
          name: "Cloud & DevOps",
          description:
            "Vue d'ensemble du Cloud (AWS, Azure, GCP), déploiement, IaC, serverless et montée en charge.",
        },
        html: {
          name: "HTML",
          description:
            "Balises sémantiques, formulaires, accessibilité, responsive design et API HTML5.",
        },
        css: {
          name: "CSS",
          description:
            "Techniques de style, mises en page (Flexbox/Grid), adaptabilité, préprocesseurs et performances.",
        },
        react: {
          name: "React",
          description:
            "Hooks React, Virtual DOM, cycle de vie, gestion d'état et bonnes pratiques.",
        },
        next: {
          name: "Next.js",
          description:
            "Rendu côté serveur (SSR), génération statique (SSG), routage, routes API et optimisations.",
        },
        reactnative: {
          name: "React Native",
          description:
            "Développement mobile avec React : composants, style, navigation et API natives.",
        },
        api: {
          name: "API & REST",
          description:
            "Méthodes HTTP, principes REST, authentification JWT, GraphQL et gestion d'erreurs.",
        },
        blockchain: {
          name: "Blockchain",
          description:
            "Mécanismes de consensus, smart contracts, dApps et cas d'usage décentralisés.",
        },
        csharp: {
          name: "C#",
          description:
            "Fonctionnalités du langage C#, POO, LINQ, async/await et collections.",
        },
        dotnet: {
          name: ".NET",
          description:
            ".NET Core/5+, ASP.NET Core, Entity Framework, Blazor, SignalR et middleware.",
        },
      },
    },

    selectNumber: {
      title: "Combien de questions ?",
      total: "Questions totales :",
      cancel: "Annuler",
      previous: "Précédent",
      startButton: "Commencer le quiz",
    },

    quiz: {
      topic: "Thème :",
      question: "Question",
      of: "sur",
      quit: "Quitter",
      quitQuiz: "Quitter le quiz",
      areYouSureToQuit: "Êtes-vous sûr de vouloir abandonner le quiz ?",
      cancel: "Annuler",
      finish: "Terminer",
      next: "Suivant",
      leaveQuiz: "Quitter le quiz",
      areYouSureToLeave: "Êtes-vous sûr de vouloir quitter le quiz ?",
      leave: "Quitter",
      correct: "Correct !",
      incorrect: "Incorrect.",
    },

    result: {
      title: "Vos Résultats",
      topic: "Thèmes",
      outOf: "sur",
      time: "Temps écoulé",
      leave: "Quitter le quiz",
      restart: "Recommencer",
    },
  },
};

export default devQuizTranslations;
