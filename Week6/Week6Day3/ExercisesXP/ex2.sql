-- Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film 
-- SET language_id=(SELECT language_id FROM language WHERE name='Italian')
-- WHERE title = 'Chamber Italian'
-- RETURNING *;

-- UPDATE film 
-- SET language_id=(SELECT language_id FROM language WHERE name='German')
-- WHERE title = 'Grosse Wonderful'
-- RETURNING *;

-- UPDATE film 
-- SET language_id=(SELECT language_id FROM language WHERE name='Mandarin')
-- WHERE title = 'Adaptation Holes'
-- RETURNING *;

-- Which foreign keys (references) are defined for the customer table?
-- store_id, adress_id
-- How does this affect the way in which we INSERT into the customer table?
-- we need to reference address table for address_id, and store table through address_table to get store_id

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- It is an easy step, it references only new_film table, but it's a child, no information depends on it

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT (*) FROM rental WHERE return_date=NULL;
-- SELECT * FROM rental ORDER BY rental_date DESC;
-- SELECT COUNT(*) FROM RENTAL WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT title, rental_rate
-- FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- WHERE return_date IS NULL
-- ORDER BY rental_rate DESC
-- LIMIT 30

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies,
-- but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT title, first_name,last_name FROM film
-- INNER JOIN film_actor ON film.film_id=film_actor.film_id
-- INNER JOIN actor ON actor.actor_id=film_actor.actor_id
-- WHERE description ILIKE '%sumo%' AND first_name='Penelope' AND last_name='Monroe';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT title FROM film WHERE rating='R' AND length<60 AND description ~ 'Documentary';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental,
-- and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT title FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan'
-- AND return_date > '2005-07-28' AND return_date < '2005-08-01'
-- AND rental_rate > 4;

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat”
-- in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT title, replacement_cost FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan' 
-- AND description ~ 'Boat'
-- GROUP BY title, replacement_cost
-- ORDER BY replacement_cost DESC LIMIT 1