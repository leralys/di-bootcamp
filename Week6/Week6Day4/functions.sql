Lesson on functions
-- Return the fullname of the actor

CREATE or REPLACE FUNCTION fullname_actor (fn varchar(50), lan varchar(100)) 
RETURNS VARCHAR(100)
LANGUAGE 
AS 
$func$
DECLARE
    full_name VARCHAR(100);
BEGIN
   SELECT CONCAT(first_name, ' ', last_name) FROM actors 
   WHERE actors.first_name = fn AND actors.last_name=lan 
   INTO full_name;
   RETURN full_name;
END;
$func$ 

SELECT fullname_actor('George', 'Clooney');
SELECT fullname_actor('John', 'Doe'); -- don't work
----------------------------------------------------

<!-- Update the number of oscars -->

-- return void: return nothing

CREATE or REPLACE FUNCTION add_oscars (numToAdd integer, firstN varchar(20), lastN varchar(20)) 
RETURNS void AS 
$$
BEGIN
   UPDATE actors SET number_oscars = number_oscars + numToAdd 
   WHERE actors.first_name = firstN 
   AND actors.last_name=lastN;
END;
$$
LANGUAGE 'plpgsql';

SELECT add_oscars(5, 'Matt', 'Damon');
SELECT * FROM actors WHERE last_name='Damon';

-- --------------------------------------------------------------------

CREATE OR REPLACE FUNCTION add_and_return (numToAdd integer, firstN varchar(20), lastN varchar(20)) 
RETURNS integer AS 
$$
DECLARE
    new_num integer;
BEGIN
   UPDATE actors SET number_oscars = number_oscars + numToAdd 
   WHERE actors.first_name = firstN 
   AND actors.last_name=lastN
   RETURNING number_oscars INTO new_num;
   RETURN new_num;
END;
$$
LANGUAGE 'plpgsql';

-- SELECT first_name, last_name, add_and_return(10, first_name, last_name) AS numberOscarsInTenYears FROM actors WHERE actors.first_name = 'George' AND actors.last_name='Clooney';