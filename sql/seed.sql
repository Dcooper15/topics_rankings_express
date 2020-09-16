INSERT INTO topics (topic)
    VALUES ('HTML'), ('CSS'), ('JavaScript'), ('PostgreSQL'), ('Node'), ('Express');

INSERT INTO ranking_scale (ranking, rankingNumber)
    VALUES ('Awesome', 5), ('Great', 4), ('Good', 3), ('Okay', 2), ('Poor', 1), ('Unranked', 0);

INSERT INTO topics (ranking_id)
    VALUES (5), (4), (4), (3), (3), (3);




INSERT INTO languages_rankings (name, ranking, rankingnumber)
    VALUES ('HTML', 'Awesome', 5), ('CSS', 'Great', 4), ('JavaScript', 'Good', 3), ('PostgreSQL', 'Good', 3), ('Node', 'Okay', 2), ('Express', 'Good', 3);