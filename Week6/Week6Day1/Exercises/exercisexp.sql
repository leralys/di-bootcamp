-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item VARCHAR (20) NOT NULL,
--  price SMALLINT NOT NULL
-- );


-- CREATE TABLE customers(
--  item_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (20) NOT NULL,
--  last_name VARCHAR (25) NOT NULL
-- );


-- INSERT INTO items (item, price)
-- VALUES
--  ('Small Desk', 100),
--  ('Large desk', 300),
-- 	('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES
--  ('Greg', 'Jones'),
--  ('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor', 'Green'),
-- 	('Melanie', 'Johnson');
	
-- Select All items--
-- SELECT * FROM items;

-- Select All the items with a price above 80 (80 not included) --
-- SELECT * FROM items WHERE price > 80;

-- Select All the items with a price below 300. (300 included) --
-- SELECT * FROM items WHERE price <= 300;

-- Select All customers whose last name is ‘Smith’ (What will be your outcome?)
-- SELECT first_name, last_name FROM customers WHERE last_name LIKE 'Smith';
-- no customers with the last name Smith

-- Select All customers whose last name is ‘Jones’
-- SELECT first_name, last_name FROM customers WHERE last_name LIKE 'Jones';

-- Select All customers whose firstname is not ‘Scott’.
-- SELECT first_name, last_name FROM customers WHERE NOT last_name LIKE 'Scott';


