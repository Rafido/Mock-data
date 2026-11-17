# Mock-data

A small JavaScript project for generating and serving fake user data for a React front end.

Last updated: 2026-11-17

## What's in the repo

- `buildScripts/mockDataSchema.js`: JSON schema describing 3–5 users, each with `id`, `firstName`, `lastName` and `email`.
- `buildScripts/generateMockData.js`: generates fake data from that schema with `json-schema-faker` and writes it to `src/api/db.json`.
- `src/api/db.json`: the generated sample data.
- `src/api/userApi.js`: front-end helpers to fetch users (`getUsers`) and delete a user (`deleteUser`).
- `src/api/baseUrl.js`: points API calls at `http://localhost:3001/` in development.
- `src/index.js`, `src/index.html`, `src/index.css`: the front-end app.
- `buildScripts/srcServer.js`: a webpack dev server on port 3000. It serves `src/index.html` and a hardcoded list of three users at `/users`. It doesn't read `db.json`.
- `main.js`: a separate Express app on port 3000 with a `/grade` endpoint, unrelated to the mock data.

## Usage

Generate new mock data:

```bash
node buildScripts/generateMockData.js
```
