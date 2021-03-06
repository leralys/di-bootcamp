Lesson of today
SQL
CREATE TABLE actors(
actor_id SERIAL PRIMARY KEY,
first_name VARCHAR (20) NOT NULL,
last_name VARCHAR (25) NOT NULL,
date_birth DATE NOT NULL,
number_oscars SMALLINT NOT NULL
)

SELECT first_name, last_name FROM actors;

-- INSERT
-- The INSERT statement is used to populate a table with rows:

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('Matt','Damon','1970-10-08',5);

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('George','Clooney','1961-05-06',2);

-- SELECTING

SELECT first_name, last_name FROM actors;
SELECT \* FROM actors;

--WHERE
--A query can be "qualified" by adding a WHERE clause that specifies which rows are wanted.
--The WHERE clause contains a Boolean (truth value) expression, and only rows for which the Boolean expression
--is true are returned. The usual Boolean operators (AND, OR, and NOT) are allowed in the qualification.

SELECT first_name, last_name, number_oscars FROM actors WHERE number_oscars>2;
SELECT first_name, last_name, number_oscars FROM actors WHERE actor_id=1;
SELECT first_name, last_name, number_oscars FROM actors WHERE date_birth >= '1961-05-05';

-- Extract
SELECT first_name, last_name, number_oscars FROM actors WHERE EXTRACT(YEAR from date_birth) = 1961;
SELECT first_name, last_name, number_oscars, EXTRACT(MONTH from date_birth) AS month_birth FROM actors WHERE number_oscars>2;

-- Born a Wednesday
SELECT first_name, last_name, number_oscars, EXTRACT(DOW from date_birth) AS month_number FROM actors WHERE number_oscars>2;

-- age function
SELECT first_name, last_name, number_oscars, EXTRACT(YEAR from age(date_birth)) AS age_actor FROM actors WHERE number_oscars>2;
SELECT upper(last_name) FROM actors WHERE number_oscars >= 2 AND char_length(first_name) >= 4 ;

-- operations
SELECT upper(last_name), EXTRACT(YEAR from age(date_birth))+10 AS age_in_10_years FROM actors WHERE number_oscars >= 2;

-- Or and Not
SELECT upper(last_name),number_oscars FROM actors WHERE number_oscars >= 2 OR first_name = 'Georges';
SELECT upper(last_name),number_oscars FROM actors WHERE number_oscars = 2 OR number_oscars != 2;
SELECT upper(last_name), date_birth FROM actors WHERE EXTRACT(YEAR from date_birth) BETWEEN 1955 AND 1965;
SELECT upper(last_name) AS uppercased_lastName, date_birth FROM actors WHERE EXTRACT(YEAR from date_birth) NOT BETWEEN 1955 AND 1965;

SELECT _ FROM actors ORDER BY last_name ASC;
SELECT _ FROM actors ORDER BY number_oscars DESC;

-- Order
SELECT upper(last_name), EXTRACT(YEAR from age(date_birth)) FROM actors ORDER BY age(date_birth);
SELECT upper(last_name), EXTRACT(YEAR from age(date_birth)) FROM actors ORDER BY age(date_birth) DESC;
SELECT \* FROM actors WHERE date_birth >= '1960-01-01' ORDER BY number_oscars DESC;

-- limit
SELECT _ FROM actors WHERE date_birth >= '1960-01-01' ORDER BY number_oscars DESC LIMIT 1;
SELECT _ FROM actors ORDER BY date_birth ASC LIMIT 1; -- OLDER ACTOR

-- Like
-- select the actors which last name finishes by "y"
SELECT first_name FROM actors WHERE last_name LIKE '%y';
