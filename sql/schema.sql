CREATE TABLE topics (
    id serial PRIMARY KEY,
    topic text
);

CREATE TABLE ranking_scale (
    id serial PRIMARY KEY,
    ranking text,
    rankingNumber integer,
    topic_id integer,
    FOREIGN KEY (topic_id) REFERENCES topics (id)
);

CREATE TABLE languages_rankings (
    id serial PRIMARY KEY,
    name text,
    ranking text,
    rankingnumber integer
);