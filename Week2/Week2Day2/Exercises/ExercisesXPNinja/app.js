// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

let yearOlder = 1990;
let yearYounger = 1995;

year = yearYounger;
do {
    year++;
} while ((year - yearYounger) * 2 !== (year - yearOlder));

console.log(year);