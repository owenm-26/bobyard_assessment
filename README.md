# Bobyard Assessment
I got through part 1 & 2 in 2 hours and decided to stop there given the instructions as well as the backend functionality already being implemented that would support step 3.

If I had more time I would accomplish part 3 in the following ways:
1. **Edit existing Comment:** I would repurpose / extend my `handleLike()` function to also handle edits and rename the function (becuase they both do the same thing to just different attributes). I would add a new state for the content of the comment so the user instantly sees their changes and would also add a pencil icon / a form to fill in to change it.
2. **Add a comment as Admin**: I would use a similar form that only has the ability to fill in the text of the comment to make a new one. Everytime it was created it would update the comments state list and the default values for Admin would be there for the name, time, and profile picture.
3. **Delete Comments**: I would have to pass state around in order to allow a garbage can icon on each comment to affect the comments list in its parent. I would also just use the API I've already written in `api.ts`


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
```

## Install Django
```bash
python -m venv .venv
source .venv/bin/activate 
python -m pip install Django
```

# Running the App

## Prereqs
1. Go through the Setup
2. Populate your own `.env` in the root dir (`/bobyard`) and fill in the secrets from the `.env.example`

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