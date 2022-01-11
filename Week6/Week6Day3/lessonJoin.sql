-- Lesson on JOIN
-- SELECT * FROM movies;
-- SELECT * FROM actors;

-- The reference is on the table movies
-- CREATE TABLE movies(
-- 	movie_id SERIAL PRIMARY KEY,
-- 	movie_title VARCHAR (50) NOT NULL,
-- 	movie_story TEXT,
-- 	actor_playing_id INTEGER REFERENCES actors (actor_id)
-- );



-- SYNTAX
-- SELECT columns_names
-- FROM TABLE1
-- INNER JOIN TABLE2
-- ON FK_values = PK_values

-- SAME AS
-- SELECT columns_names
-- FROM TABLE1
-- INNER JOIN TABLE2
-- ON PK_values = FK_values

-- INNER JOIN
-- INNER JOIN returns a result set containing a row in the left table that matches the row in the right table.
-- Actors playing in movies
SELECT first_name, last_name, movie_title
FROM actors
INNER JOIN movies
ON actor_id = actor_playing_id

-- LEFT JOIN
-- The LEFT JOIN returns a complete set of rows from the left table with the matching rows 
-- if available from the right table. If there is no match, the right side will have null values.
-- Actors playing in the movies ALSO the actors that are not playing in any movies
SELECT actor_id, first_name, last_name, movie_title
FROM actors
LEFT JOIN movies
ON actor_playing_id = actor_id

--RIGHT JOIN
--The RIGHT JOIN is a reversed version of the left join. 
-- It produces a result set that contains all rows from the right table with 
-- matching rows from the left table. If there is no match, the left side will have null values.
-- Actors playing in movies AND ALSO the movies that don't cast any actor
SELECT actor_id, first_name, last_name, movie_title
FROM actors
RIGHT JOIN movies
ON actor_playing_id = actor_id

--FULL JOIN
-- The FULL JOIN produces a result set that contains all rows from both the left and right tables,
-- with the matching rows from both sides where available. If there is no match, the missing side contains null values.
-- All the actors and all the movies
SELECT actor_id, first_name, last_name, movie_title
FROM actors
FULL JOIN movies
ON actor_playing_id = actor_id