-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

-- SELECT * FROM SecondTab

-- Q1. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- we check how many rows there are from first table where id is not null from the second table
-- after checking - 0 - i'm not sure what happens here

-- Q2. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
-- we will get 2 (because there are 2 id's which are not equal to 5 (and one null which we do not count))
-- after checking - 2 

-- Q3. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- 0 - because all of the ids from the first table are in the second

-- Q4. What will be the OUTPUT of the following statement?
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
-- 2 - because we check how many rows there are that have id that is not 5(we do not count null)