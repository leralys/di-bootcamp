Project
Using the excel file

<!-- Exercise -->

// -- See the lesson here ABOUT IMPORT AND EXPORT: http://learn.di-learning.com/courses/collection/6/course/138/section/337/chapter/404

1. Create a database called "Exercises_In_Class"
2. Create a table city_info, with those columns : event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust
3. Save temporarily the excel file into the "D:"

If you have trouble importing the CSV file, look at the documentation here : https://www.postgresqltutorial.com/import-csv-file-into-posgresql-table/

<!-- INSTRUCTIONS -- Questions -->

-- 1. Select everything from the table. (every row and columns) - How many records does the table have?

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.

-- 10. Add to the table, todays information in Israel - of this very hour.
(timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted:

https://www.postgresqltutorial.com/postgresql-insert/
