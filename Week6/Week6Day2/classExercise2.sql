-- SELECT * FROM actors;
-- In the table actors, write the following commands:

-- Get the average number of oscars in the table
-- SELECT AVG(number_oscars)) from actors;
-- SELECT round(AVG(number_oscars), 2) FROM actors;

-- Get distinct actors depending on their number of oscars
-- SELECT DISTINCT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars ASC;
-- SELECT nationality, AVG(number_oscars) FROM actors GROUP BY nationality HAVING nationality = 'American';

-- Get the actors born after 01/01/1970
-- Get the actors which names are 'David', 'Morgan' or 'Will'
