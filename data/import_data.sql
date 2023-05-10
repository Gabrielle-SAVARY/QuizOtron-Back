-- Database for Quiz'O'tron

BEGIN;

-- Pour éviter les erreurs de contraintes lors de l'insertion de données (les tables answer et question sont liées dans les deux sens), on supprime la contrainte de clé étrangère qui référence la table "question"
ALTER TABLE "answer"
    DROP CONSTRAINT "answer_question_id_fkey";

-- Données de la table "role"
INSERT INTO "role" ("id", "label") VALUES
(1, 'user'),
(2, 'admin');

-- Données de la table "user"
INSERT INTO "user" ("id", "email", "pseudo", "firstname", "lastname", "password", "global_score", "role_id") VALUES
(1, 'sami@gmail.com' , 'sami-dev', 'Sami', 'BEN ABDALLAH', 'test', 1000001, 2),
(2, 'romain@gmail.com', 'romain-dev', 'Romain', 'ANDINÉ', 'test', 1000000, 2),
(3, 'gabrielle@gmail.com', 'gabrielle-dev', 'Gabrielle', 'SAVARY', 'test', 1000000, 2),
(4, 'michel@gmail.com', 'el-famoso', 'Michel', 'MICHOU', 'testmichel', 900, 1);

-- Données de la table "level"
INSERT INTO "level" ("id", "name") VALUES
(1, 'facile'),
(2, 'moyen'),
(3, 'difficile');

-- Données de la table "quiz"
INSERT INTO "quiz" ("id", "title", "description", "thumbnail", "user_id", "level_id") VALUES
(1, 'Connaissances cinématographiques', 'Testez vos connaissances en cinéma avec ce quiz de 10 questions !', 'https://res.cloudinary.com/dqxylwxpp/image/upload/v1683295809/Quiz%27O%27Tron/Le-best-of-video-des-Oscars-2014_rva1nc.jpg', 1, 1),
(2, 'Connaissances historiques', 'Ce quiz comporte 10 questions pour tester vos connaissances en histoire. Les questions portent sur diverses périodes de l''histoire, de l''Antiquité à l''époque moderne.', 'https://res.cloudinary.com/dqxylwxpp/image/upload/v1683295322/Quiz%27O%27Tron/image-titre-lhistoire_f6jdtt.jpg', 2, 3),
(3, 'Connaissances géographiques', 'Testez vos connaissances en géographie avec ces dix questions sur des sujets variés, de la topographie aux cultures du monde entier.', 'https://res.cloudinary.com/dqxylwxpp/image/upload/v1683297637/Quiz%27O%27Tron/62f2c3efa296b02bb30dffd9_Beautiful_20Map_20Main_sqqgp8.jpg', 3, 2);

-- Données de la table "tag"
INSERT INTO "tag" ("id", "name") VALUES
(1, 'cinéma'),
(2, 'histoire'),
(3, 'géographie');

-- Données de la table "answer"
INSERT INTO "answer" ("id", "description", "question_id") VALUES
-- réponses Connaissances cinématographiques
(1, 'Rambo', 1),
(2, 'Terminator', 1),
(3, 'Predator', 1),
(4, 'Die Hard', 1),
(5, 'Seul au monde', 2),
(6, 'Philadelphia', 2),
(7, 'Forrest Gump', 2),
(8, 'Apollo 13', 2),
(9, 'Steven Spielberg', 3),
(10, 'Martin Scorsese', 3),
(11, 'Francis Ford Coppola', 3),
(12, 'Woody Allen', 3),
(13, 'Pulp Fiction', 4),
(14, 'Kill Bill', 4),
(15, 'Reservoir Dogs', 4),
(16, 'Jackie Brown', 4),
(17, 'La Liste de Schindler', 5),
(18, 'The Dark Knigh', 5),
(19, 'Le Seigneur des anneaux', 5),
(20, 'Les Évadés', 5),
(21, 'Christopher Nolan', 6),
(22, 'Tim Burton', 6),
(23, 'David Yates', 6),
(24, 'Peter Jackson', 6),
(25, 'Le Silence des agneaux', 7),
(26, 'Dragon Rouge', 7),
(27, 'Hannibal', 7),
(28, 'Le Sixième Sens', 7),
(29, 'The Revenant', 8),
(30, 'Les Infiltrés', 8),
(31, 'Shutter Island', 8),
(32, 'Arrête-moi si tu peux', 8),
(33, 'Damien Chazelle', 9),
(34, 'Wes Anderson', 9),
(35, 'Sofia Coppola', 9),
(36, 'Darren Aronofsky', 9),
(37, 'Autant en emporte le vent', 10),
(38, 'Pearl Harbor', 10),
(39, 'Titanic', 10),
(40, 'Le Patient anglais', 10),
-- réponses Connaissances historiques
(41, 'Auguste', 11),
(42, 'Néron', 11),
(43, 'Marc Antoine', 11),
(44, 'Jules César', 11),
(45, 'La guerre de Quatre-Vingts Ans', 12),
(46, 'La guerre de Trente Ans', 12),
(47, 'La guerre de Cent Ans', 12),
(48, 'La guerre de Sept Ans', 12),
(49, 'Benjamin Franklin', 13),
(50, 'George Washington', 13),
(51, 'Thomas Jefferson', 13),
(52, 'John Adams', 13),
(53, 'Élisabeth II', 14),
(54, 'Victoria', 14),
(55, 'Marie-Antoinette', 14),
(56, 'Catherine la Grande', 14),
(57, 'La prise de la Bastille', 15),
(58, 'La fuite du roi Louis XVI', 15),
(59, 'La déclaration des Droits de l''homme et du citoyen', 15),
(60, 'Le procès de Marie-Antoinette', 15),
(61, 'Alexandre le Grand', 16),
(62, 'Jules César', 16),
(63, 'Napoléon Bonaparte', 16),
(64, 'Genghis Khan', 16),
(65, 'Athènes', 17),
(66, 'Paris', 17),
(67, 'Rome', 17),
(68, 'Londres', 17),
(69, 'Ferdinand Magellan', 18),
(70, 'Vasco de Gama', 18),
(71, 'Francisco Pizarro', 18),
(72, 'Hernán Cortés', 18),
(73, 'L''Armistice du 11 novembre 1918', 19),
(74, 'La bataille de Stalingrad', 19),
(75, 'La chute de Berlin', 19),
(76, 'La reddition de l''Allemagne', 19),
(77, 'Christophe Colomb', 20),
(78, 'Vasco de Gama', 20),
(79, 'Magellan', 20),
(80, 'Marco Polo', 20),
-- réponses Connaissances géographiques
(81, 'Le Gobi', 21),
(82, 'Le désert d''Atacama', 21),
(83, 'Le désert du Kalahari', 21),
(84, 'Le Sahara', 21),
(85, 'Madagascar', 22),
(86, 'Groenland', 22),
(87, 'Sumatra', 22),
(88, 'Bornéo', 22),
(89, 'Londres', 23),
(90, 'Berlin', 23),
(91, 'Paris', 23),
(92, 'Madrid', 23),
(93, 'Le Zambèze', 24),
(94, 'Le Congo', 24),
(95, 'Le Niger', 24),
(96, 'Le Nil', 24),
(97, 'Bombay', 25),
(98, 'New Delhi', 25),
(99, 'Agra', 25),
(100, 'Chennai', 25),
(101, 'Vancouver', 26),
(102, 'Montréal', 26),
(103, 'Toronto', 26),
(104, 'Québec', 26),
(105, 'Le mont Kilimandjaro', 27),
(106, 'Le mont Everest', 27),
(107, 'Le mont Denal', 27),
(108, 'Le mont Fuji', 27),
(109, 'Le lac Baïkal', 28),
(110, 'Le lac Victoria', 28),
(111, 'Le lac Tanganyika', 28),
(112, 'Le lac Supérieur', 28),
(113, 'Les États-Unis', 29),
(114, 'L''Inde', 29),
(115, 'Le Brésil', 29),
(116, 'La Chine', 29),
(117, 'Maroc', 30),
(118, 'Algérie', 30),
(119, 'Tunisie', 30),
(120, 'Égypte', 30);

-- Données de la table "question"
INSERT INTO "question" ("id", "question", "quiz_id", "level_id", "answer_id") VALUES
-- Questions Connaissances cinématographiques
(1, 'Dans quel film peut-on entendre la célèbre réplique "I''ll be back" ?', 1, 1, 2),
(2, 'Dans quel film joue Tom Hanks un employé de FedEx échoué sur une île déserte ?', 1, 1, 5),
(3, 'Qui a réalisé le film "Le Parrain" ?', 1, 1, 11),
(4, 'Dans quel film peut-on voir la célèbre scène de danse entre John Travolta et Uma Thurman ?', 1, 1, 13),
(5, 'Dans quel film les personnages principaux sont-ils nommés Andy et Red ?', 1, 1, 20),
(6, 'Qui est le réalisateur de la saga Harry Potter ?', 1, 1, 23),
(7, 'Dans quel film voit-on le personnage de Hannibal Lecter pour la première fois ?', 1, 1, 26),
(8, 'Dans quel film joue Leonardo DiCaprio un braqueur de banques ?', 1, 1, 32),
(9, 'Qui a réalisé le film "La La Land" ?', 1, 1, 33),
(10, 'Dans quel film peut-on entendre la chanson "My Heart Will Go On" interprétée par Céline Dion ?', 1, 1, 39),
-- Questions Connaissances historiques
(11, 'Quel célèbre empereur romain a été assassiné en 44 avant J.-C. ?', 2, 2, 44),
(12, 'Quelle guerre a opposé la France et l''Angleterre de 1337 à 1453 ?', 2, 2, 47),
(13, 'Qui a été le premier président des États-Unis ?', 2, 2, 50),
(14, 'Quelle reine a régné sur l''Angleterre pendant plus de 63 ans, de 1837 à 1901 ?', 2, 2, 54),
(15, 'Quel événement a marqué le début de la Révolution française en 1789 ?', 2, 2, 57),
(16, 'Quel empereur a dirigé l''Empire mongol au 13ème siècle ?', 2, 2, 64),
(17, 'Dans quelle ville s''est déroulé le premier Jeux olympiques modernes en 1896 ?', 2, 2, 65),
(18, 'Qui était le célèbre conquistador espagnol qui a conquis l''Empire Inca en 1532 ?', 2, 2, 71),
(19, 'Quel événement a mis fin à la Seconde Guerre mondiale en Europe ?', 2, 2, 76),
(20, 'Quel grand explorateur portugais a découvert le passage maritime vers les Indes en 1498 ?', 2, 2, 78),
-- Questions Connaissances géographiques
(21, 'Quel est le plus grand désert du monde ?', 3, 3, 84),
(22, 'Quelle est la plus grande île du monde ?', 3, 3, 86),
(23, 'Dans quelle ville se trouve la célèbre tour Eiffel ?', 3, 3, 91),
(24, 'Quel est le plus long fleuve d''Afrique ?', 3, 3, 96),
(25, 'Dans quelle ville se trouve le Taj Mahal ?', 3, 3, 99),
(26, 'Quelle est la plus grande ville du Canada ?', 3, 3, 103),
(27, 'Quel est le plus haut sommet du monde ?', 3, 3, 106),
(28, 'Quel est le plus grand lac du monde ?', 3, 3, 109),
(29, 'Quel est le pays le plus peuplé du monde ?', 3, 3, 116),
(30, 'Dans quel pays se trouve la ville de Marrakech ?', 3, 3, 117);

-- Données de la table de liaison "quiz_has_tag"
INSERT INTO "quiz_has_tag" ("id", "quiz_id", "tag_id") VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3);

-- Données de la table de liaison "favorite"
INSERT INTO "favorite" ("id", "user_id", "quiz_id") VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 2),
(6, 3, 3),
(7, 3, 2);

-- Données de la table de liaison "score"
INSERT INTO "score" ("id", "score", "user_id", "quiz_id") VALUES
(1, 10, 1, 1),
(2, 4, 1, 3),
(3, 7, 1, 2),
(4, 10, 2, 2),
(5, 10, 2, 3),
(6, 3, 2, 1),
(7, 10, 3, 3),
(8, 10, 3, 2),
(9, 10, 3, 1);

-- Une fois les données insérées, on met à jour la table answer pour ajouter la clé étrangère qui référence les questions
ALTER TABLE "answer"
  ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

COMMIT;

BEGIN;

SELECT setval('level_id_seq', (SELECT MAX(id) from "level"));
SELECT setval('answer_id_seq', (SELECT MAX(id) from "answer"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));
SELECT setval('question_id_seq', (SELECT MAX(id) from "question"));
SELECT setval('quiz_id_seq', (SELECT MAX(id) from "quiz"));
SELECT setval('tag_id_seq', (SELECT MAX(id) from "tag"));
SELECT setval('role_id_seq', (SELECT MAX(id) from "role"));
SELECT setval('quiz_has_tag_id_seq', (SELECT MAX(id) from "quiz_has_tag"));
SELECT setval('favorite_id_seq', (SELECT MAX(id) from "favorite"));
SELECT setval('score_id_seq', (SELECT MAX(id) from "score"));

COMMIT;