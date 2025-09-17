# Bobyard Assessment

# Setup

## The Postgres Database
```bash
psql -U postgres # log in to Postgres

CREATE DATABASE bobyard_db; 
\c bobyard_db; # connect to db

CREATE ROLE bobyard_user WITH LOGIN PASSWORD '<password>';

# give permissions to edit tables & schema (for migrations)
GRANT CONNECT ON DATABASE bobyard_db TO bobyard_user;
GRANT USAGE ON SCHEMA public TO bobyard_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO bobyard_user;

GRANT USAGE ON SCHEMA public TO bobyard_user;
GRANT CREATE ON SCHEMA public TO bobyard_user;
ALTER SCHEMA public OWNER TO bobyard_user;

# Create relevant tables
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    profile_picture TEXT
        );
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    likes INT NOT NULL DEFAULT 0
    );
```

## Install Django
```bash
python -m venv .venv
source .venv/bin/activate 
python -m pip install Django
```

# Running the App

## Running the Backend
```bash
cd backend
python manage.py runserver
```

## Running the Frontend
```bash
cd frontend
npm i
npm run dev
```