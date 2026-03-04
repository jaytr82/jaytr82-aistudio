# Dockerized App Template

Production-oriented Node API starter for local Docker development with:

- validated environment loading
- route registration separated from startup
- centralized JSON error handling
- a real Postgres connection using `pg`
- ESLint configuration
- Node test runner coverage for HTTP behavior
- Docker Compose setup for API + Postgres

## Setup

1. Copy `.env.example` to `.env`.
2. Run `npm install` if you want to lint or test outside Docker.
3. Start the stack with `docker compose up --build`.

## Scripts

- `npm run dev`
- `npm start`
- `npm run lint`
- `npm test`

## Notes

- `GET /health` verifies that the API can reach Postgres.
- `GET /` returns the current database name when the connection succeeds.
