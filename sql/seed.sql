INSERT INTO topics (topic)
    VALUES ('HTML'), ('CSS'), ('JavaScript'), ('PostgreSQL'), ('Node'), ('Express');

INSERT INTO ranking_scale (ranking, rankingNumber)
    VALUES ('Awesome', 5), ('Great', 4), ('Good', 3), ('Okay', 2), ('Poor', 1), ('Unranked', 0);






id serial PRIMARY KEY,
    ranking text,
    rankingNumber integer,