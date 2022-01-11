-- In the table actors, write the following commands:

-- Update the first name of Matt Damon to "Maty"
-- UPDATE actors SET first_name = 'Maty' WHERE (first_name = 'Matt' AND last_name = 'Damon') RETURNING *;

-- Update the number of oscars of George Clooney to 4, and return the updated record
-- UPDATE actors SET number_oscars = 4 WHERE (first_name = 'George' AND last_name = 'Clooney') RETURNING *;

-- SELECT * from actors;

-- Rename the 'age' column by 'birthdate'
-- ALTER TABLE actors ADD COLUMN age INTEGER;
-- UPDATE actors SET age = 30;
-- ALTER TABLE actors RENAME COLUMN age TO birthdate;

-- Delete one actor and return it
-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Angelina', 'Jolieee', '04/06/1975', 2);
-- DELETE FROM actors WHERE last_name = 'Jolieee' RETURNING *;



