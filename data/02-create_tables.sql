BEGIN;

ALTER TABLE IF EXISTS "article" DROP CONSTRAINT article_user_id_fkey;
ALTER TABLE IF EXISTS "article_has_category" DROP CONSTRAINT article_has_category_article_id_fkey;
ALTER TABLE IF EXISTS "article_has_category" DROP CONSTRAINT article_has_category_category_id_fkey;

DROP TABLE IF EXISTS "article", "category", "user", "article_has_category";


CREATE TABLE IF NOT EXISTS "article" (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  image TEXT NULL,
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  resume TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NULL
);

CREATE TABLE IF NOT EXISTS "category" (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NULL
);

CREATE TABLE IF NOT EXISTS "article_has_category" (
  category_id INTEGER NOT NULL,
  article_id INTEGER NOT NULL,
  PRIMARY KEY (category_id, article_id)
);

CREATE TABLE IF NOT EXISTS "user" (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  firstname TEXT NULL,
  lastname TEXT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  pseudo TEXT NULL,
  avatar TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NULL
);

ALTER TABLE "article" ADD FOREIGN KEY (user_id) REFERENCES "user" (id);
ALTER TABLE "article_has_category" ADD FOREIGN KEY (article_id) REFERENCES "article" (id);
ALTER TABLE "article_has_category" ADD FOREIGN KEY (category_id) REFERENCES "category" (id);

COMMIT;