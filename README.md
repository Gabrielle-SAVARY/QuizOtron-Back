# Quiz-O-Tron-Back
Bienvenue sur le repo back-end du projet QuizOtron !  
QuizOtron est un site de quiz qui a deux objectifs:
- **Satisfaire les joueurs** : en proposant des quiz interactifs dans différentes catégories et niveaux de difficultés. 
- **Offrir le rôle de « créateur de contenu » à ses utilisateurs** en leurs permettant de créer leurs quiz.  

#### [VIDÉO DÉMO DE QUIZOTRON](https://youtu.be/XAlN5DYLVeI)</br>



## Fonctionnalités
- 	&#x2705; **Jouer à un quiz avec le score affiché** (accessibles à tous: visiteurs et utilisateurs).
- &#x1F50D; **Filtrage de la liste des quiz** (barre de recherche, filtres par catégories et niveaux).  

<u>Réservés aux utilistateurs:</u>
- &#x1F642; **Créer et gérer son profil utilisateur - CRUD utilisateur**: inscription, authentification, modification et suppression du profil utilisateur.
- &#x2753; **Créer et gérer ses quiz utilisateurs - CRUD des quiz de l'utilisateur** (création, modification et suppression des propres quiz).
- 	&#x1F3C1; **Moyenne des scores obtenus.**
- 	&#x1F4D8; **Historique des quiz joués avec les scores.**
- 	&#x1F499; **Quiz en favoris**: ajout ou suppression sur les cartes de quiz ou dans l'espace utilisateur.
<br>
<br>

## Le projet QuizOtron
QuizOtron est un projet de groupe réalisé par une équipe de 3 développeurs à l'occasion de la fin de notre formation d'Oclock. 
L'objectif était de produire en 1 mois un MVP (Minimum Viable Product).  
Le projet a été développé de la partie conception à son développement en méthode agile/SCRUM.
QuizOtron a été présenté à l'oral de mon Titre Professionnel de Développeur Web et Web Mobile.
<br>
<br>

## Installation de QuizOtron
&#x1F6A9; Il faut installer puis lancer les deux repo front-end et back-end.  
#### <u>I. Installation du back-end</u>
1. Télécharger en zip le commit le plus récent de la branche main du repo Back (nous sommes toujours en développement).
2. Installation du repo `npm i`
3. Créer la structure de la base de données sur postgres SQL (doit être installé sur le pc)
   * Exemple sur windows, en vous plaçant à l'intérieur du repo BACK, ouvrir une fenêtre Powershell ou invité de commandes.
   * `CREATE ROLE quizotron WITH LOGIN ENCRYPTED PASSWORD 'quizotron';`
   * `CREATE DATABASE quizotron WITH OWNER quizotron;`
4. Importer les données de la base de données
   Dans le repo BACk, placez vous à l'intérieur du fichier 'data' et ouvrer une fenêtre Powershell.
    * importer les tables de la base de données: `psql -U quizotron -d quizotron -f import_tables.sql`
    * importer les données des tables: `psql -U quizotron -d quizotron -f import_data.sql`
5. Créer le fichier `.env` 
   * dupliquer le fichier `.env.example`
   * PG_URL: remplacer YourUserName, YourPassword et YourDatabaseName par ce qui a été utilisé pour créer la bdd avec postgres SQL: `quizotron`.
   * PORT: remplacer par la valeur par `3000`.

#### <u>II. Lancer le back avec la commande</u> `nodemon`
#### <u>III. Installer puis lancer le fron-end</u>  [Cf. repo front-end de QuizOtron](https://github.com/Gabrielle-SAVARY/QuizOtron-Front).
<br>


  ## Technologies
#### <u>Front-end</u>
- React, React Router Dom, Redux (utilisé pour l'authentification)
- Sass
- Typescript / Eslint
- JWT (token d'authentification)
- Vite
  
#### <u>Back-end</u>
- Node.js
- PostgreSQL
- Sequelize
- API REST
- JWT (token d'authentification)
- Joi (validateur)
- Swagger
- Bcrypt