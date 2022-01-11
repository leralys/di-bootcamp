Lesson on One to One relationship
-- One to One

-- One person has One TZ
-- One TZ belongs to ONLY ONE PERSON

-- One person has One profile
-- One profile belongs to ONLY ONE PERSON

-- One to One :  
-- An actor can own only one car, 
-- and a car belongs to only one person

-- UNIQUE FK
CREATE TABLE cars (
  car_id SERIAL PRIMARY KEY,
  brand VARCHAR(30) NOT NULL,
  color VARCHAR(30) NOT NULL,
  owner_id INTEGER UNIQUE REFERENCES actors (actor_id)
);

-- SUBQUERIES
INSERT INTO cars (brand, color, owner_id)
VALUES('Renault', 'black',(SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney')),
	  ('Mazda', 'red', (SELECT actor_id FROM actors WHERE first_name='Emma' AND last_name='Watson'))
RETURNING *

INSERT INTO cars (brand, color)
VALUES('Jaguar', 'yellow'),('BMW', 'pink')
RETURNING *

-- Find the car owned by Emma Watqon
SELECT last_name, brand
FROM cars
INNER JOIN actors
ON actor_id = owner_id
WHERE last_name='Watson';

-- Find the actors that own a car, and the cars not yet bought
SELECT last_name, brand
FROM actors
RIGHT JOIN cars
ON actor_id = owner_id;

-- SELECT * FROM cars;

UPDATE cars
SET owner_id = (SELECT actor_id FROM actors WHERE last_name='Damon')
WHERE brand='BMW'
RETURNING *

-- ERROR:  duplicate key value violates unique constraint "cars_owner_id_key"
-- DETAIL:  Key (owner_id)=(3) already exists.
UPDATE cars
SET owner_id = (SELECT actor_id FROM actors WHERE last_name='Clooney')
WHERE brand='Jaguar'
RETURNING *