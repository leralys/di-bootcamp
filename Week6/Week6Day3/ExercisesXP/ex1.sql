-- Instructions
-- Get a list of all film languages.
-- SELECT name FROM language;

-- Get a list of all films joined with their languages – select the following details :
-- film title, description, and language name. Try your query with different joins:

-- Get all films, even if they don’t have languages.
-- SELECT title, description, name FROM film
-- LEFT JOIN language ON
-- film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages.
-- SELECT title, description, name FROM film
-- RIGHT JOIN language ON
-- film.language_id = language.language_id
-- ORDER BY name DESC;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film(
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50) NOT NULL
-- 	)

-- INSERT INTO new_film (name)
-- VALUES
-- ('Knight Of Utopia'),
-- ('Ghosts Of Destruction'),
-- ('Footprints In The Mist'),
-- ('Planet Of Death'),
-- ('Phantoms Of The Ancestors');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY NOT NULL,
-- 	film_id INTEGER REFERENCES new_film (new_film_id) ON DELETE CASCADE,
-- language_id INTEGER REFERENCES language ON DELETE NO ACTION,
-- title VARCHAR(100) NOT NULL,
-- score SMALLINT NOT NULL,
-- review_text TEXT,
-- last_update 	TIMESTAMP
-- 	)


-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review 
-- (film_id, language_id, title, score, review_text, last_update)
-- VALUES
-- (
-- 	(SELECT new_film_id FROM new_film WHERE name LIKE 'Knight%'),
-- 	(SELECT language_id FROM language WHERE name='Japanese'),
-- 	'Very good movie',
-- 	10,
-- 	'I liked it very much',
-- 	NOW()
-- );

-- INSERT INTO customer_review 
-- (film_id, language_id, title, score, review_text, last_update)
-- VALUES
-- (
-- 	(SELECT new_film_id FROM new_film WHERE new_film_id=4),
-- 	(SELECT language_id FROM language WHERE name='German'),
-- 	'Bad bad bad',
-- 	1,
-- 	'So bad!',
-- 	NOW()
-- );


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film 
-- WHERE new_film_id=4
-- RETURNING *;

-- SELECT * FROM customer_review;

-- it will be deleted because we we have ON DELETE CASCADE constraint, which allow to delete a parent record,
-- but its corresponding child record will be deleted as well.


