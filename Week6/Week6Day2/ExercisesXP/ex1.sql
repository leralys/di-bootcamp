-- Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest)
-- SELECT item FROM items ORDER BY price ASC;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT item, price FROM items WHERE price >=80 ORDER BY price DESC;

-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT first_name FROM customers ORDER BY first_name ASC LIMIT 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC;

-- Create a table named purchases. It should have 2 columns : customer_id and item_id.
-- These columns are references from the tables customers and items.

-- CREATE TABLE purchases(
-- 	customer_id INTEGER REFERENCES customers (customer_id),
-- 	item_id INTEGER REFERENCES items (item_id)
-- );

-- Edit the data of the purchases table:
-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank).
-- INSERT INTO purchases(customer_id, item_id) VALUES (2)
-- Does this work? Why/why not?
-- Do not work - INSERT has more target columns than expressions

-- Add 5 rows which reference existing customers and items.
-- INSERT INTO purchases (customer_id, item_id)
-- VALUES 
-- (2,1),
-- (1,2),
-- (4,2),
-- (3,3),
-- (5,2);

-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?

-- SELECT * FROM purchases;
-- No - it's just numbers

-- All purchases, joining with the customers table
-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id;

-- Purchases of the customer with the ID equal to 4
-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id
-- WHERE purchases.customer_id = 4;

-- Purchases for a large desk AND a small desk
-- SELECT * FROM purchases
-- INNER JOIN items
-- ON purchases.item_id = items.item_id
-- WHERE item LIKE 'Small%' OR item LIKE 'Large%';

-- Create a purchase for Scott Scott – he bought a hard drive
-- INSERT INTO items (item, price) VALUES ('Hard drive', 500) RETURNING *;

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES (( SELECT customer_id FROM customers WHERE last_name = 'Scott' AND first_name = 'Scott'),
-- 		(SELECT item_id FROM items WHERE item = 'Hard drive'));


-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name

-- SELECT first_name, last_name FROM purchases
-- INNER JOIN customers
-- ON customers.customer_id = purchases.customer_id;

