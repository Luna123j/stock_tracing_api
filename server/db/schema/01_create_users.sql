-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  avatar VARCHAR(255),
  balance NUMERIC NOT NULL DEFAULT 0,
  boughtshare TEXT [],
  soldshare TEXT []
);