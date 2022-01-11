-- Lesson ON FK
-- Foreign Key

-- CREATE TABLE movies(
-- 	movie_id SERIAL PRIMARY KEY,
-- 	movie_title VARCHAR (50) NOT NULL,
-- 	movie_story TEXT,
-- 	actor_playing_id INTEGER REFERENCES actors (actor_id)
-- );

-- ERROR, the id 10 doesn't exist in the actors table
-- INSERT INTO movies (movie_title, movie_story,actor_playing_id)
-- VALUES('Gravity','Gravity is a 2013 science fiction thriller',10);

-- -- SUBQUERY
-- INSERT INTO movies (movie_title, movie_story,actor_playing_id)
-- VALUES('Gravity',
-- 	   'Gravity is a 2013 science fiction thriller',
-- 	   (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'))
-- RETURNING *;

-- INSERT INTO movies (movie_title, movie_story,actor_playing_id)
-- VALUES('Ocean's Eleven',
-- 	   'bla bla',
-- 	   (SELECT actor_id FROM actors WHERE first_name='Matt' AND last_name='Damon'));

-- INSERT INTO movies (movie_title, movie_story,actor_playing_id)
-- VALUES('Beauty&Beast',
-- 	   'bla bla',
-- 	   (SELECT actor_id FROM actors WHERE first_name='Matt' AND last_name='Damon'));


-- SELECT * FROM actors;

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actor_id = actor_playing_id
-- WHERE first_name='George' AND last_name='Clooney';

-- -- THE SAME
-- SELECT first_name, last_name, movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actor_id = actor_playing_id
-- WHERE first_name='George' AND last_name='Clooney';