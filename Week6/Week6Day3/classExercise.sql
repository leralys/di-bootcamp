-- Exercise
-- Using the Department tables,
-- 	* Create a Boss table with the columns manager_id, manager_name, manager_type (ie.nice, angry, funny ect...):
-- 		* that has a one to one relationship with the department table:
--                 * a department can be managed by only 1 manager, and a manager can manage only 1 department
-- Add a few managers,
-- 2. What is the type and name of the manager of the dept 10

-- CREATE TABLE boss(
-- 	manager_id SERIAL PRIMARY KEY,
-- 	manager_name VARCHAR(30) NOT NULL,
-- 	manager_type VARCHAR(10) NOT NULL,
-- department_id INTEGER UNIQUE REFERENCES department (deptcode)
-- )

-- INSERT INTO boss (manager_name, manager_type, department_id)
-- VALUES
-- ('John Smith', 'nice', (SELECT deptcode FROM department WHERE deptname = 'FINANCE'))

-- INSERT INTO boss (manager_name, manager_type, department_id)
-- VALUES
-- ('Ada Lovelace', 'funny', (SELECT deptcode FROM department WHERE deptname = 'SOFTWARE')),
-- ('Elon Musk', 'strict', (SELECT deptcode FROM department WHERE deptname = 'MARKETING'));

-- What is the type and name of the boss of the dept Finance 
-- SELECT manager_type, manager_name FROM DEPARTMENT
-- INNER JOIN boss
-- ON boss.department_id = department.deptcode
-- WHERE department.deptname = 'FINANCE';



