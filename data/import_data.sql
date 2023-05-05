-- Database for Quiz'O'tron

BEGIN;

INSERT INTO "user" ("id", "email", "pseudo", "firstname", "lastname", "password", "global_score", "role_id") VALUES
(1, 'sami@gmail.com' , 'sami-dev', 'Sami', 'BEN ABDALLAH', 'test', 1000001, 2),
(2, 'romain@gmail.com', 'romain-dev', 'Romain', 'ANDINÉ', 'test', 1000000, 2),
(3, 'gabrielle@gmail.com', 'gabrielle-dev', 'Gabrielle', 'SAVARY', 'test', 1000000, 2),
(4, 'michel@gmail.com', 'el-famoso', 'Michel', 'MICHOU', 'testmichel', 900, 1);

INSERT INTO "role" ("id", "label") VALUES
(1, 'user'),
(2, 'admin');

INSERT INTO "level" ("id", "name") VALUES
(1, 'facile'),
(2, 'moyen'),
(3, 'difficile');

INSERT INTO "quiz" ("id", "title", "description", "thumbnail", "user_id", "level_id") VALUES
(1, 'Connaissances cinématographiques', 'Testez vos connaissances en cinéma avec ce quiz de 10 questions !', 'https://res.cloudinary.com/dqxylwxpp/image/upload/v1683295809/Quiz%27O%27Tron/Le-best-of-video-des-Oscars-2014_rva1nc.jpg', 1, 1),
(2, 'Ce quiz comporte 10 questions pour tester vos connaissances en histoire. Les questions portent sur diverses périodes de l''histoire, de l''Antiquité à l''époque moderne.', 'Testez vos connaissances en histoire avec ce quiz de 10 questions !', 'https://res.cloudinary.com/dqxylwxpp/image/upload/v1683295322/Quiz%27O%27Tron/image-titre-lhistoire_f6jdtt.jpg', 2, 3),
(3, 'Les drapeaux du monde', 'Ce quiz permet de tester vos connaissances sur les drapeaux des différents pays du monde.', 'https://res.cloudinary.com/dqxylwxpp/image/upload/v1683295002/Quiz%27O%27Tron/large_BG0pfzM90_bsl3pWCLD2ZvvspIYSUwrhYlc5QyRO96E_gkqst5.jpg', 3, 2);

INSERT INTO "tag" ("id", "name") VALUES
(1, 'cinéma'),
(2, 'histoire'),
(3, 'géographie');

INSERT INTO "answers" ("id", "description", "question_id") VALUES


INSERT INTO "question" ("id", "description", "quiz_id", "level_id", "answer_id") VALUES
(1, 'Dans quel film peut-on entendre la célèbre réplique "I''ll be back" ?', 1, 1, 1),
(2, 'Dans quel film joue Tom Hanks un employé de FedEx échoué sur une île déserte ?', 1, 1, 2),
(3, 'Qui a réalisé le film "Le Parrain" ?', 1, 1, 3),
(4, 'Dans quel film peut-on voir la célèbre scène de danse entre John Travolta et Uma Thurman ?', 1, 1, 4),
(5, 'Dans quel film les personnages principaux sont-ils nommés Andy et Red ?', 1, 1, 5),
(6, 'Qui est le réalisateur de la saga Harry Potter ?', 1, 1, 6),
(7, 'Dans quel film voit-on le personnage de Hannibal Lecter pour la première fois ?', 1, 1, 7),
(8, 'Dans quel film joue Leonardo DiCaprio un braqueur de banques ?', 1, 1, 8),
(9, 'Qui a réalisé le film "La La Land" ?', 1, 1, 9),
(10, 'Dans quel film peut-on entendre la chanson "My Heart Will Go On" interprétée par Céline Dion ?', 1, 1, 10),
(11, 'Quel est le nom du réalisateur de la saga Star Wars ?', 1, 2, 1),
(12, 'Quel est le nom du réalisateur de la saga Harry Potter ?', 1, 2, 2),
(13, 'Quel est le nom du réalisateur de la saga Le Seigneur des Anneaux ?', 1, 2, 3),
(14, 'Quel est le nom du réalisateur de la saga Le Hobbit ?', 1, 2, 4),
(15, 'Quel est le nom du réalisateur de la saga Le Parrain ?', 1, 2, 5),
(16, 'Quel est le nom du réalisateur de la saga Indiana Jones ?', 1, 2, 6),
(17, 'Quel est le nom du réalisateur de la saga Jurassic Park ?', 1, 2, 7),
(18, 'Quel est le nom du réalisateur de la saga Retour vers le Futur ?', 1, 2, 8),
(19, 'Quel est le nom du réalisateur de la saga Alien ?', 1, 2, 9),
(20, 'Quel est le nom du réalisateur de la saga Terminator ?', 1, 2, 10),
(21, 'Quel est le nom du réalisateur de la saga Star Wars ?', 1, 3, 1),
(22, 'Quel est le nom du réalisateur de la saga Harry Potter ?', 1, 3, 2),
(23, 'Quel est le nom du réalisateur de la saga Le Seigneur des Anneaux ?', 1, 3, 3),
(24, 'Quel est le nom du réalisateur de la saga Le Hobbit ?', 1, 3, 4),
(25, 'Quel est le nom du réalisateur de la saga Le Parrain ?', 1, 3, 5),
(26, 'Quel est le nom du réalisateur de la saga Indiana Jones ?', 1, 3, 6),
(27, 'Quel est le nom du réalisateur de la saga Jurassic Park ?', 1, 3, 7),
(28, 'Quel est le nom du réalisateur de la saga Retour vers le Futur ?', 1, 3, 8),
(29, 'Quel est le nom du réalisateur de la saga Alien ?', 1, 3, 9),
(30, 'Quel est le nom du réalisateur de la saga Terminator ?', 1, 3, 10);



