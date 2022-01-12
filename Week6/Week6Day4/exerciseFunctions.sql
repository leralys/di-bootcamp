-- Exercises on Functions
-- Exercise1:
-- Create a function, that returns the number of oscars depending on the first name and last name of the actors

-- CREATE OR REPLACE FUNCTION number_oscars (firstn VARCHAR(20), lastn VARCHAR (25))
-- RETURNS INTEGER
-- 	AS 
-- $$
-- DECLARE
-- 	num SMALLINT;
-- BEGIN
-- 	SELECT number_oscars FROM actors
-- 	WHERE actors.first_name=firstn AND actors.last_name = lastn 
-- 	INTO num;
-- 	RETURN num;
-- END;
-- $$
-- LANGUAGE plpgsql;

-- SELECT number_oscars('George', 'Clooney');

-- Exercise2
-- Add a column salary to the table, with a default 0
-- Set the salary of all the actors to 5000
-- Create a function that updates the salary of an actor depending on his first and last name.
-- You should pass to the function the argument; salary, first name, last name.
-- The salary of the actor should be salary * number of oscars.
-- Returns the new salary from the function

-- ALTER TABLE actors ADD COLUMN salary INTEGER DEFAULT 0;

-- UPDATE actors SET salary=5000;

-- CREATE OR REPLACE FUNCTION update_salary (firstn VARCHAR(20), lastn VARCHAR (25))
-- RETURNS INTEGER
-- 	AS 
-- $$
-- DECLARE
-- 	sal SMALLINT;
-- BEGIN
-- 	UPDATE actors
-- 	SET salary = salary*number_oscars
-- 	WHERE actors.first_name=firstn AND actors.last_name=lastn
-- 	RETURNING actors.salary INTO sal;
-- 	RETURN sal;
-- END;
-- $$
-- LANGUAGE 'plpgsql';

-- SELECT update_salary('Jennifer', 'Aniston');


