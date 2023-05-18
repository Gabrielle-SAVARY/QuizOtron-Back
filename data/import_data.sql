-- Database for Quiz'O'tron

BEGIN;

-- Pour éviter les erreurs de contraintes lors de l'insertion de données (les tables answer et question sont liées dans les deux sens), on supprime la contrainte de clé étrangère qui référence la table "question"
-- ALTER TABLE "answer"
--     DROP CONSTRAINT "answer_question_id_fkey";

-- Données de la table "role"
INSERT INTO "role" ("id", "label") VALUES
(1, 'user'),
(2, 'admin');

-- Données de la table "user"
INSERT INTO "user" ("id", "email", "pseudo", "firstname", "lastname", "password", "global_score", "role_id") VALUES
(1, 'sami@gmail.com' , 'sami-dev', 'Sami', 'BEN ABDALLAH', 'test', 1000001, 2),
(2, 'romain@gmail.com', 'romain-dev', 'Romain', 'ANDINÉ', 'test', 1000000, 2),
(3, 'gabrielle@gmail.com', 'gabrielle-dev', 'Gabrielle', 'SAVARY', 'test', 1000000, 2),
(4, 'michel@gmail.com', 'el-famoso', 'Michel', 'MICHOU', 'testmichel', 900, 1),
(5, 'elon@gmail.com', 'elon-musk', 'Elon', 'MUSK', '$2b$10$cEJfuFnHidw5syvXuKknMuN5mkR5OsZycc3MoD1OKriZCzVi0CEPm', 100, 1);

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

-- Données de la table "question"
INSERT INTO "question" ("id", "question", "quiz_id") VALUES
-- Questions Connaissances cinématographiques
(1, 'Dans quel film peut-on entendre la célèbre réplique "I''ll be back" ?', 1),
(2, 'Dans quel film joue Tom Hanks un employé de FedEx échoué sur une île déserte ?', 1),
(3, 'Qui a réalisé le film "Le Parrain" ?', 1),
(4, 'Dans quel film peut-on voir la célèbre scène de danse entre John Travolta et Uma Thurman ?', 1),
(5, 'Dans quel film les personnages principaux sont-ils nommés Andy et Red ?', 1),
(6, 'Qui est le réalisateur de la saga Harry Potter ?', 1),
(7, 'Dans quel film voit-on le personnage de Hannibal Lecter pour la première fois ?', 1),
(8, 'Dans quel film joue Leonardo DiCaprio un braqueur de banques ?', 1),
(9, 'Qui a réalisé le film "La La Land" ?', 1),
(10, 'Dans quel film peut-on entendre la chanson "My Heart Will Go On" interprétée par Céline Dion ?', 1),
-- Questions Connaissances historiques
(11, 'Quel célèbre empereur romain a été assassiné en 44 avant J.-C. ?', 2),
(12, 'Quelle guerre a opposé la France et l''Angleterre de 1337 à 1453 ?', 2),
(13, 'Qui a été le premier président des États-Unis ?', 2),
(14, 'Quelle reine a régné sur l''Angleterre pendant plus de 63 ans, de 1837 à 1901 ?', 2),
(15, 'Quel événement a marqué le début de la Révolution française en 1789 ?', 2),
(16, 'Quel empereur a dirigé l''Empire mongol au 13ème siècle ?', 2),
(17, 'Dans quelle ville s''est déroulé le premier Jeux olympiques modernes en 1896 ?', 2),
(18, 'Qui était le célèbre conquistador espagnol qui a conquis l''Empire Inca en 1532 ?', 2),
(19, 'Quel événement a mis fin à la Seconde Guerre mondiale en Europe ?', 2),
(20, 'Quel grand explorateur portugais a découvert le passage maritime vers les Indes en 1498 ?', 2),
-- Questions Connaissances géographiques
(21, 'Quel est le plus grand désert du monde ?', 3),
(22, 'Quelle est la plus grande île du monde ?', 3),
(23, 'Dans quelle ville se trouve la célèbre tour Eiffel ?', 3),
(24, 'Quel est le plus long fleuve d''Afrique ?', 3),
(25, 'Dans quelle ville se trouve le Taj Mahal ?', 3),
(26, 'Quelle est la plus grande ville du Canada ?', 3),
(27, 'Quel est le plus haut sommet du monde ?', 3),
(28, 'Quel est le plus grand lac du monde ?', 3),
(29, 'Quel est le pays le plus peuplé du monde ?', 3),
(30, 'Dans quel pays se trouve la ville de Marrakech ?', 3);

-- Données de la table "answer"
INSERT INTO "answer" ("id", "description", "is_valid", "question_id") VALUES
-- réponses Connaissances cinématographiques
(1, 'Rambo', 'false', 1),
(2, 'Terminator', 'true', 1),
(3, 'Predator', 'false', 1),
(4, 'Die Hard', 'false', 1),
(5, 'Seul au monde', 'true', 2),
(6, 'Philadelphia', 'false', 2),
(7, 'Forrest Gump', 'false', 2),
(8, 'Apollo 13', 'false', 2),
(9, 'Steven Spielberg', 'false', 3),
(10, 'Martin Scorsese', 'false', 3),
(11, 'Francis Ford Coppola', 'true', 3),
(12, 'Woody Allen', 'false', 3),
(13, 'Pulp Fiction', 'true', 4),
(14, 'Kill Bill', 'false', 4),
(15, 'Reservoir Dogs', 'false', 4),
(16, 'Jackie Brown', 'false', 4),
(17, 'La Liste de Schindler', 'false', 5),
(18, 'The Dark Knigh', 'false', 5),
(19, 'Le Seigneur des anneaux', 'false', 5),
(20, 'Les Évadés', 'true', 5),
(21, 'Christopher Nolan', 'false', 6),
(22, 'Tim Burton', 'false', 6),
(23, 'David Yates', 'true', 6),
(24, 'Peter Jackson', 'false', 6),
(25, 'Le Silence des agneaux', 'false', 7),
(26, 'Dragon Rouge', 'true', 7),
(27, 'Hannibal', 'false', 7),
(28, 'Le Sixième Sens', 'false', 7),
(29, 'The Revenant', 'false', 8),
(30, 'Les Infiltrés', 'false', 8),
(31, 'Shutter Island', 'false', 8),
(32, 'Arrête-moi si tu peux', 'true', 8),
(33, 'Damien Chazelle', 'true', 9),
(34, 'Wes Anderson', 'false', 9),
(35, 'Sofia Coppola', 'false', 9),
(36, 'Darren Aronofsky', 'false', 9),
(37, 'Autant en emporte le vent', 'false', 10),
(38, 'Pearl Harbor', 'false', 10),
(39, 'Titanic', 'true', 10),
(40, 'Le Patient anglais', 'false', 10),
-- réponses Connaissances historiques
(41, 'Auguste', 'false', 11),
(42, 'Néron', 'false', 11),
(43, 'Marc Antoine', 'false', 11),
(44, 'Jules César', 'true', 11),
(45, 'La guerre de Quatre-Vingts Ans', 'false', 12),
(46, 'La guerre de Trente Ans', 'false', 12),
(47, 'La guerre de Cent Ans', 'true', 12),
(48, 'La guerre de Sept Ans', 'false', 12),
(49, 'Benjamin Franklin', 'false', 13),
(50, 'George Washington', 'true', 13),
(51, 'Thomas Jefferson', 'false', 13),
(52, 'John Adams', 'false', 13),
(53, 'Élisabeth II', 'false', 14),
(54, 'Victoria', 'true', 14),
(55, 'Marie-Antoinette', 'false', 14),
(56, 'Catherine la Grande', 'false', 14),
(57, 'La prise de la Bastille', 'true', 15),
(58, 'La fuite du roi Louis XVI', 'false', 15),
(59, 'La déclaration des Droits de l''homme et du citoyen', 'false', 15),
(60, 'Le procès de Marie-Antoinette', 'false', 15),
(61, 'Alexandre le Grand', 'false', 16),
(62, 'Jules César', 'false', 16),
(63, 'Napoléon Bonaparte', 'false', 16),
(64, 'Genghis Khan', 'true', 16),
(65, 'Athènes', 'true', 17),
(66, 'Paris', 'false', 17),
(67, 'Rome', 'false', 17),
(68, 'Londres', 'false', 17),
(69, 'Ferdinand Magellan', 'false', 18),
(70, 'Vasco de Gama', 'false', 18),
(71, 'Francisco Pizarro', 'true', 18),
(72, 'Hernán Cortés', 'false', 18),
(73, 'L''Armistice du 11 novembre 1918', 'false', 19),
(74, 'La bataille de Stalingrad', 'false', 19),
(75, 'La chute de Berlin', 'false', 19),
(76, 'La reddition de l''Allemagne', 'true', 19),
(77, 'Christophe Colomb', 'false', 20),
(78, 'Vasco de Gama', 'true', 20),
(79, 'Magellan', 'false', 20),
(80, 'Marco Polo', 'false', 20),
-- réponses Connaissances géographiques
(81, 'Le Gobi', 'false', 21),
(82, 'Le désert d''Atacama', 'false', 21),
(83, 'Le désert du Kalahari', 'false', 21),
(84, 'Le Sahara', 'true', 21),
(85, 'Madagascar', 'false', 22),
(86, 'Groenland', 'true', 22),
(87, 'Sumatra', 'false', 22),
(88, 'Bornéo', 'false', 22),
(89, 'Londres', 'false', 23),
(90, 'Berlin', 'false', 23),
(91, 'Paris', 'true', 23),
(92, 'Madrid', 'false', 23),
(93, 'Le Zambèze', 'false', 24),
(94, 'Le Congo', 'false', 24),
(95, 'Le Niger', 'false', 24),
(96, 'Le Nil', 'true', 24),
(97, 'Bombay', 'false', 25),
(98, 'New Delhi', 'false', 25),
(99, 'Agra', 'true', 25),
(100, 'Chennai', 'false', 25),
(101, 'Vancouver', 'false', 26),
(102, 'Montréal', 'false', 26),
(103, 'Toronto', 'true', 26),
(104, 'Québec', 'false', 26),
(105, 'Le mont Kilimandjaro', 'false', 27),
(106, 'Le mont Everest', 'true', 27),
(107, 'Le mont Denal', 'false', 27),
(108, 'Le mont Fuji', 'false', 27),
(109, 'Le lac Baïkal', 'true', 28),
(110, 'Le lac Victoria', 'false', 28),
(111, 'Le lac Tanganyika', 'false', 28),
(112, 'Le lac Supérieur', 'false', 28),
(113, 'Les États-Unis', 'false', 29),
(114, 'L''Inde', 'false', 29),
(115, 'Le Brésil', 'false', 29),
(116, 'La Chine', 'true', 29),
(117, 'Maroc', 'true', 30),
(118, 'Algérie', 'false', 30),
(119, 'Tunisie', 'false', 30),
(120, 'Égypte', 'false', 30);



-- Données de la table de liaison "quiz_has_tag"
INSERT INTO "quiz_has_tag" ("quiz_id", "tag_id") VALUES
(1, 1),
(2, 2),
(3, 3);

-- Données de la table de liaison "favorite"
INSERT INTO "favorite" ("user_id", "quiz_id") VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(3, 3),
(3, 2);

-- Données de la table de liaison "score"
INSERT INTO "score" ("score", "user_id", "quiz_id") VALUES
(10, 1, 1),
(4, 1, 3),
(7, 1, 2),
(10, 2, 2),
(10, 2, 3),
(3, 2, 1),
(10, 3, 3),
(10, 3, 2),
(10, 3, 1);

-- Une fois les données insérées, on met à jour la table answer pour ajouter la clé étrangère qui référence les questions
-- ALTER TABLE "answer"
--   ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

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