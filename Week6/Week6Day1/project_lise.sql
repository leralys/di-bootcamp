-- CREATE TABLE city_info(
-- 	event_datetime TIMESTAMP,
-- 	city VARCHAR(25),
-- 	temperature DECIMAL,
-- 	light DECIMAL,
-- 	airquality_raw DECIMAL,
-- 	sound DECIMAL,
-- 	humidity DECIMAL,
-- 	dust DECIMAL
-- );

-- COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) 
-- FROM '/tmp/city_info.csv' DELIMITER ',' CSV HEADER;

-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
-- SELECT COUNT(*) FROM city_info;
-- 4711

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- SELECT * FROM city_info WHERE city = 'Boston' AND event_datetime = '2015-03-15 11:00:00'

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
-- SELECT event_datetime from city_info WHERE temperature >=28 AND temperature <=30;

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
-- change the sign, find min, change sign again
-- SELECT city, sound FROM city_info ORDER BY sound DESC LIMIT 1;

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- SELECT city, sound FROM city_info ORDER BY sound ASC LIMIT 1;

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- SELECT dust FROM city_info WHERE city = 'San Francisco' AND event_datetime > '2015-03-15 11:00:00';

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT event_datetime, humidity FROM city_info WHERE city = 'Geneva' AND humidity < 40 OR humidity > 60;

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
-- SELECT DISTINCT city FROM city_info WHERE city ILIKE 's%';

-- 10. Add to the table, todays information in Israel - of this very hour.
-- (timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted:

-- INSERT INTO city_info (
-- 	event_datetime,
-- 	city,
-- 	temperature,
-- 	light,
-- 	airquality_raw,
-- 	sound,
-- 	humidity,
-- 	dust)
-- VALUES (
-- 	'2022-01-09 13:32:00',
-- 	'Tel Aviv',
-- 	19.938737484,
-- 	4080.07673500435,
-- 	21.5932157345697,
-- 	1752.42875977977,
-- 	44.335284579349,
-- 	1051.88421970685)
-- RETURNING *;
