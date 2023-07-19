# Quiz-O-Tron-Back
## Instructions d'installation
1. Clôner le repo Back
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
6.  Lancer le back avec la commande `nodemon`
  