-- Instructions
-- Create a table called orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the orders table and the items table. An order can have many items, but an item can belong to only one order.

-- Create a function that returns the total price for a given order.

-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY NOT NULL,
-- 	item VARCHAR(30) NOT NULL,
-- 	price SMALLINT NOT NULL DEFAULT 0
-- )

-- INSERT INTO items (item, price)
-- VALUES
-- ('Cappuccino', 5),
-- ('Americano', 3)

-- CREATE TABLE orders (
-- 	order_id SERIAL PRIMARY KEY NOT NULL,
-- 	item_id INTEGER REFERENCES items(item_id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
-- 	quantity SMALLINT DEFAULT 1 NOT NULL
-- );

-- INSERT INTO orders (item_id, quantity)
-- VALUES
-- ((SELECT item_id FROM items WHERE item = 'Cappuccino'), 2);

-- -- Create a function that returns the total price for a given order.

-- CREATE OR REPLACE FUNCTION calculate_total(od_id INTEGER)
-- RETURNS INTEGER
-- 	AS 
-- $$
-- DECLARE
-- 	total INTEGER;
-- BEGIN
-- 	SELECT price*quantity AS res
-- 	FROM items
-- 	FULL JOIN orders
-- 	ON orders.item_id = items.item_id
-- 	WHERE orders.order_id = od_id
-- 	INTO total;
-- 	RETURN total;
-- END;
-- $$
-- LANGUAGE 'plpgsql';

-- SELECT calculate_total((SELECT order_id
-- 						FROM orders
-- 						INNER JOIN items
-- 						ON items.item_id = orders.item_id
-- 						WHERE item = 'Cappuccino'));
	
-- SAME AS --
-- -- SELECT calculate_total(1);
	
	