-- Lesson on One to Many RelationShip
-- One to many : An actor can have many houses, but a house is owned by only one actor

CREATE TABLE houses(
	house_id SERIAL PRIMARY KEY,
	city VARCHAR (20) NOT NULL,
	street VARCHAR (20) NOT NULL,
	street_number SMALLINT NOT NULL,
	number_rooms SMALLINT NOT NULL,	
	heir_id INTEGER REFERENCES actors (actor_id)
)

INSERT INTO houses (city, street,street_number, number_rooms, heir_id)
VALUES('Paris', 'Rue de la Paix', 20, 5, (SELECT actor_id FROM actors WHERE first_name='Emma' AND last_name='Watson')),
	  ('London', 'Buckingham', 2, 100, (SELECT actor_id FROM actors WHERE first_name='Emma' AND last_name='Watson')),
	  ('NewYork', 'Timesquare', 123, 10, (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'))
RETURNING *

-- How many houses are owned by Watson
SELECT COUNT(*)
FROM actors
INNER JOIN houses
ON actor_id=heir_id
WHERE last_name='Watson'

SELECT first_name, last_name, COUNT(*) AS nbHouses
FROM actors
INNER JOIN houses
ON actor_id=heir_id
GROUP BY first_name, last_name
ORDER BY nbHouses ASC;

INSERT INTO houses (city, street,street_number, number_rooms, heir_id)
VALUES('Paris', 'Madeleine', 20, 5, (SELECT actor_id FROM actors WHERE first_name='Matt' AND last_name='Damon'))
RETURNING *

-- Nb of houses per cities
SELECT city, COUNT(*) AS nbHouses FROM houses
GROUP BY city
ORDER BY city