-- Lesson on Update, Delete
-- Alter table : 
-- * Add 2 more columns: 
-- salary (integer), 
-- nationality (varchar)

-- Creating a column named salary of type integer
-- ALTER TABLE actors ADD COLUMN salary integer;
-- ALTER TABLE actors ADD COLUMN nationality varchar(20);
-- Add several columns in one line
-- ALTER TABLE table ADD COLUMN col1 int, ADD COLUMN col2 int;

-- Update
-- Salary of 100000 for actors that have more than 2 oscars

-- UPDATE actors
-- SET salary = 100000
-- WHERE
--     number_oscars > 2
-- RETURNING first_name, last_name;

-- Salary of 50000 for actors that have less than 2 oscars

-- UPDATE actors
-- SET salary = 50000
-- WHERE
-- 	number_oscars<=2
-- RETURNING *

-- Update the nb of oscar of Matt Damon to one more

-- UPDATE actors
-- SET number_oscars = number_oscars+1
-- WHERE first_name='Matt' AND last_name='Damon'
-- RETURNING *;

-- We are in Hollywood, add to all actors a nationality "American"

-- NO WHERE Clause

-- UPDATE actors
-- SET nationality = 'American'
-- RETURNING *

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES('Jennifer','Aniston','1970-10-08',0), ('Emma', 'Watson','1970-10-08',0)
-- RETURNING *

-- Change the salary proportionaly to their number of oscars, for the 2 first actors (IN clause)

-- UPDATE actors
-- SET salary = 100000*number_oscars
-- WHERE actor_id IN (1,2)
-- RETURNING *


-- --Delete
-- Delete Jennifer Aniston
-- WITHOUT THE "WHERE" you delete everything from the table


-- DELETE FROM actors
-- WHERE last_name='Aniston'
-- RETURNING *;


-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES('test1','test1','1970-10-08',0);


-- DELETE FROM actors;
-- TRUNCATE TABLE actors RESTART IDENTITY; -- to restard the primary key 

-- SELECT * FROM actors ORDER BY actor_id ASC;