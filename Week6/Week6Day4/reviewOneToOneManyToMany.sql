Review on One to One and Many to Many relationships
-- Create 2 tables : 
-- Customer and Customer profile. 
-- They have a One to One relationship. Use all the types of Joins to display the data.

CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY,
	username VARCHAR(20)
);

CREATE TABLE profile (
	profile_id SERIAL PRIMARY KEY,
	online BOOLEAN,
	profile_customer_id INTEGER UNIQUE REFERENCES customer (customer_id)
);

INSERT INTO customer (username) VALUES ('John'),('Sarah'),('Tom');
INSERT INTO profile (online,profile_customer_id) VALUES 
(true, (SELECT customer_id FROM customer WHERE username='John')),
(false, (SELECT customer_id FROM customer WHERE username='Tom'));

-- Check if the customers are online : username, online 
SELECT username, online
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id;

-- Check the customers ONLINE : username
SELECT username
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id
WHERE online=true;

-- Check the customers ONLINE : username
SELECT username AS client
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id
WHERE online=true;

-- Number of ppl online
SELECT COUNT(*) AS nbClientsOnline
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id
WHERE online=true;

-- The username of the clients and their profile - no matter if they have one or not
SELECT username, online, profile_id 
FROM customer
LEFT JOIN profile
ON customer_id = profile_customer_id;


-- If I try to create another profile for John -- NOT POSSIBLE
INSERT INTO profile (online,profile_customer_id) VALUES 
(false, (SELECT customer_id FROM customer WHERE username='John'));

-- Create 2 other tables : 
-- Product and Order. 
-- Order is a table with a Many to Many relationship 
-- with the Customer and Product tables. 
-- Use all the types of Joins to display the data.

CREATE TABLE product (
	product_id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	price INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE order_products (
	client_id INTEGER NOT NULL REFERENCES customer (customer_id),
	purchase_id INTEGER NOT NULL REFERENCES product (product_id),
	quantity INTEGER,
	PRIMARY KEY(client_id, purchase_id)
)


-- INSERT INTO product (name,price) VALUES ('chair', 20),('table',40),('lamp',10);
INSERT INTO order_products (client_id, purchase_id, quantity) 
VALUES 
((SELECT customer_id FROM customer WHERE username='John'), 
 (SELECT product_id FROM product WHERE name='chair'), 2),
 
((SELECT customer_id FROM customer WHERE username='John'), 
  (SELECT product_id FROM product WHERE name='table'), 3),
  
((SELECT customer_id FROM customer WHERE username='Sarah'), 
 (SELECT product_id FROM product WHERE name='table'), 1)
RETURNING *

INSERT INTO order_products (client_id, purchase_id, quantity) 
VALUES 
((SELECT customer_id FROM customer WHERE username='Tom'), 
 (SELECT product_id FROM product WHERE name='chair'), null)
RETURNING *



-- See the client name, the product name, price and quantity
SELECT username, product.name, price, quantity
FROM order_products
INNER JOIN customer ON customer_id = client_id
INNER JOIN product ON product_id = purchase_id;

-- Check how much John spent
SELECT customer.username, SUM(product.price*order_products.quantity)
FROM order_products
INNER JOIN customer ON customer_id = client_id
INNER JOIN product ON product_id = purchase_id
WHERE customer.username = 'John'
GROUP BY customer.username;

-- Check how many tables where bought
SELECT product.name, COUNT(quantity)
FROM order_products
INNER JOIN customer ON customer_id = client_id
INNER JOIN product ON product_id = purchase_id
WHERE product.name = 'chair'
GROUP BY product.name;

-- count(*) - bigint - number of input rows
-- count(expression) - any	bigint - number of input rows for which the value of expression is not null