Lesson On Delete with FK
-- ONE TO MANY
-- A genre can have many music
-- A music can belong to only one genre

-- CREATE TABLE genre (
--   genre_id SERIAL PRIMARY KEY,
--   genre VARCHAR(30) NOT NULL
-- );

-- CONSTRAINT - ON DELETE SET NULL : If the parent record is deleted the column ref_genre_id  in the child table will be set to null
-- CREATE TABLE musicalPiece (
--   musicalPiece_id SERIAL PRIMARY KEY,
--   musicalPiece_name VARCHAR(30) NOT NULL,
--   author VARCHAR(30) NOT NULL,
--   ref_genre_id INTEGER REFERENCES genre (genre_id) ON DELETE SET NULL
-- );

-- INSERT INTO genre (genre)
-- VALUES('Blues'),('Classical')
-- RETURNING *

-- INSERT INTO musicalPiece (musicalPiece_name, author,ref_genre_id)
-- VALUES
-- 	  ('I Cant Quit You Baby', 'Otis Rush', (SELECT genre_id FROM genre WHERE genre='Blues')),
-- 	  ('Crossroad Blues', 'Robert Johnson', (SELECT genre_id FROM genre WHERE genre='Blues'))
-- RETURNING *

-- Successful delete
-- DELETE from genre WHERE genre='Blues';

-- UPDATE musicalPiece
-- SET ref_genre_id = (SELECT genre_id FROM genre WHERE genre = 'Classical')
-- RETURNING *

SELECT musicalpiece_name
FROM genre
INNER JOIN musicalPiece
ON genre_id = ref_genre_id
WHERE genre = 'Classical'