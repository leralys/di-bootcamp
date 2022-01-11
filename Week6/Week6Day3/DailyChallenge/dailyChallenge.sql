-- You are going to practice tables relationships
-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- Use all the types of Joins to display the data.

-- CREATE TABLE customer (
--   customer_id SERIAL PRIMARY KEY,
--   full_name VARCHAR(50) NOT NULL
-- 	);
	
-- CREATE TABLE customer_profile (
--   profile_id SERIAL PRIMARY KEY,
--   owner_id INTEGER UNIQUE REFERENCES customer (customer_id)
-- 	);

-- INSERT INTO customer (full_name)
-- VALUES
-- ('Trix Walsh'),
-- ('Atwater Steele'),
-- ('Osmond Day'),
-- ('Carl Neel'),
-- ('Ursula Hum');

-- INSERT INTO customer_profile (owner_id)
-- VALUES
-- ((SELECT customer_id FROM customer WHERE full_name ='Trix Walsh'))
--  ((SELECT customer_id FROM customer WHERE full_name ='Atwater Steele')),
--  ((SELECT customer_id FROM customer WHERE full_name ='Osmond Day')),
--  ((SELECT customer_id FROM customer WHERE full_name ='Carl Neel')),
--  ((SELECT customer_id FROM customer WHERE full_name ='Ursula Hum'));

-- SELECT *
-- FROM customer
-- INNER JOIN customer_profile 
-- ON customer_profile.owner_id = customer.customer_id;

-- SELECT *
-- FROM customer
-- RIGHT JOIN customer_profile 
-- ON customer_profile.owner_id = customer.customer_id;

-- SELECT *
-- FROM customer
-- LEFT JOIN customer_profile 
-- ON customer_profile.owner_id = customer.customer_id;

-- SELECT *
-- FROM customer
-- FULL JOIN customer_profile 
-- ON customer_profile.owner_id = customer.customer_id;



-- Create 2 other tables : Product and Order.
-- Order is a table with a Many to Many relationship with the Customer and Product tables.
-- Use all the types of Joins to display the data.


-- CREATE TABLE product(
-- 	product_id SERIAL PRIMARY KEY NOT NULL,
-- 	price INTEGER NOT NULL,
-- 	name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE orders (
-- 	customer_id INTEGER NOT NULL REFERENCES customer(customer_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	product_id INTEGER NOT NULL REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	order_date DATE NOT NULL,
-- 	PRIMARY KEY (customer_id, product_id)
-- );

-- INSERT INTO product (price, name) VALUES
-- (2, 'Apple'),
-- (10, 'Strawberry'),
-- (3, 'Banana'),
-- (1, 'Potato'),
-- (8, 'Avocado');

-- INSERT INTO orders (customer_id, product_id, order_date)
-- VALUES
-- ((SELECT customer_id FROM customer WHERE full_name='Carl Neel'), (SELECT product_id FROM product WHERE name = 'Banana'), NOW()),
-- ((SELECT customer_id FROM customer WHERE full_name='Ursula Hum'), (SELECT product_id FROM product WHERE name = 'Avocado'), NOW()),
-- ((SELECT customer_id FROM customer WHERE full_name='Carl Neel'), (SELECT product_id FROM product WHERE name = 'Potato'), NOW()),
-- ((SELECT customer_id FROM customer WHERE full_name='Ursula Hum'), (SELECT product_id FROM product WHERE name = 'Apple'), NOW()),
-- ((SELECT customer_id FROM customer WHERE full_name='Atwater Steele'), (SELECT product_id FROM product WHERE name = 'Apple'), NOW());

-- SELECT * FROM orders
-- INNER JOIN customer ON customer.customer_id = orders.customer_id
-- INNER JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders
-- LEFT JOIN customer ON customer.customer_id = orders.customer_id
-- LEFT JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders
-- RIGHT JOIN customer ON customer.customer_id = orders.customer_id
-- RIGHT JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders
-- FULL JOIN customer ON customer.customer_id = orders.customer_id
-- FULL JOIN product ON product.product_id = orders.product_id;


