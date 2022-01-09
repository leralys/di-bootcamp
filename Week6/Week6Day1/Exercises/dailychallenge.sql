-- 1. Count how many actors are in the table.
-- SELECT COUNT(*) FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- Error
-- INSERT INTO actors (first_name, last_name) VALUES ('Timothée', 'Chalamet');

-- ERROR:  null value in column "date_birth" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (7, Timothée, Chalamet, null, null).