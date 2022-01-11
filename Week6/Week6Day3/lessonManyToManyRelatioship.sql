Lesson on Many to Many Relationship
-- -------------------------------------------------
-- Many to Many : 
-- An actor can play in many different movies, 
-- a movies can cast a lot of different actors

-- Then we create the new table
CREATE TABLE actors_movies (
  actor_id INTEGER NOT NULL REFERENCES actors(actor_id) ON DELETE CASCADE ON UPDATE CASCADE,
  movie_id INTEGER NOT NULL REFERENCES movies(movie_id) ON DELETE CASCADE ON UPDATE CASCADE,
  actor_role VARCHAR(30) NOT NULL,
  is_lead_role BOOLEAN NOT NULL,
  PRIMARY KEY (actor_id, movie_id)
);

INSERT into actors_movies(actor_id, movie_id, actor_role, is_lead_role) 
VALUES 
(
	(SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney'), 
	(SELECT movie_id FROM movies where movie_title = 'Gravity'), 
	'Matt Kowalski', 
	TRUE
),

(
	(SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney' ), 
	(SELECT movie_id FROM movies where movie_title = 'Oceans Eleven'), 
	'Danny Ocean', 
	FALSE
),

(
	(SELECT actor_id FROM actors where first_name = 'Matt' AND last_name = 'Damon' ),
	(SELECT movie_id FROM movies where movie_title = 'Oceans Eleven'),
	'Linus Caldwell', 
	FALSE
)

SELECT * FROM actors_movies;

-- Find the movies played by Clooney
SELECT first_name, last_name, movie_title, actor_role
FROM actors_movies AS am
INNER JOIN actors ON actors.actor_id = am.actor_id
INNER JOIN movies ON movies.movie_id = am.movie_id
WHERE last_name = 'Clooney';

-- Find the nb of movies played by Clooney
SELECT COUNT(*)
FROM actors_movies AS am
INNER JOIN actors ON actors.actor_id = am.actor_id
INNER JOIN movies ON movies.movie_id = am.movie_id
WHERE last_name = 'Clooney';