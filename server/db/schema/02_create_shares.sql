-- some shares in database
DROP TABLE IF EXISTS shares CASCADE;
CREATE TABLE shares (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC,
  ts TIMESTAMP
);