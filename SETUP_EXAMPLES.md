# Setup Examples

This file shows how to use `AI_ENGINEERING_STUDIO` in real projects.

Important idea:

- `AI_ENGINEERING_STUDIO` is a toolbox repo.
- Your real app lives in its own folder.
- You can keep this toolbox separate, then copy templates or `.codex/` into your app when needed.

## Option 1: React-Only App

Use this when you only need a frontend.

### Folder Layout

```text
Projects/
  AI_ENGINEERING_STUDIO/
  my-react-app/
```

### Better Working Layout

```text
Projects/
  AI_ENGINEERING_STUDIO/
  my-react-app/
    src/
    public/
    package.json
    README.md
```

### How To Set It Up

1. Create your app folder, for example `my-react-app`.
2. Copy the contents of `templates/react_app` into `my-react-app`.
3. Use `prompts/project_bootstrap.md` to describe the frontend you want.
4. Ask the AI to extend the React starter with your real pages and features.
5. Run:

```bash
npm install
npm run dev
```

### Optional

If you want the same AI rules inside your app, copy `.codex/` into `my-react-app/`.

Result:

- `AI_ENGINEERING_STUDIO` stays your shared toolbox
- `my-react-app` becomes the real frontend project

## Option 2: React + Node Full-Stack App

Use this when you need both frontend and backend.

### Folder Layout

```text
Projects/
  AI_ENGINEERING_STUDIO/
  campus-hub/
    frontend/
    backend/
```

### Better Working Layout

```text
Projects/
  AI_ENGINEERING_STUDIO/
  campus-hub/
    frontend/
      src/
      package.json
    backend/
      src/
      test/
      package.json
    README.md
```

### How To Set It Up

1. Create your project folder, for example `campus-hub`.
2. Create `frontend/` and `backend/` inside it.
3. Copy `templates/react_app` into `frontend/`.
4. Copy `templates/node_api` into `backend/`.
5. Use `prompts/project_bootstrap.md` to describe the whole system.
6. Ask the AI to extend both sides together.
7. Add real features such as auth, database models, dashboard pages, and API routes.

### Run It

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
npm install
npm run dev
```

### Optional

- Copy `.codex/` into `campus-hub/` if you want project-specific AI rules.
- Use ideas from `templates/dockerized_app` if you also want Docker and Postgres.

Result:

- `frontend/` is the UI
- `backend/` is the API
- `AI_ENGINEERING_STUDIO` remains the toolbox used to guide generation

## Option 3: Python Backend App

Use this when your main backend is Python, such as FastAPI.

### Folder Layout

```text
Projects/
  AI_ENGINEERING_STUDIO/
  my-python-service/
```

### Better Working Layout

```text
Projects/
  AI_ENGINEERING_STUDIO/
  my-python-service/
    app/
    tests/
    requirements.txt
    requirements-dev.txt
    README.md
```

### How To Set It Up

1. Create your app folder, for example `my-python-service`.
2. Copy the contents of `templates/python_service` into that folder.
3. Use `prompts/project_bootstrap.md` to describe the backend you want.
4. Ask the AI to extend the FastAPI starter with your real endpoints, models, and validation.
5. Create a virtual environment.
6. Install dependencies.
7. Run tests.

### Typical Commands

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
pip install -r requirements-dev.txt
pytest
```

Result:

- `my-python-service` becomes the real backend
- `AI_ENGINEERING_STUDIO` stays separate as the reusable guide

## Best Practice

For most developers, this is the cleanest setup:

```text
Projects/
  AI_ENGINEERING_STUDIO/
  app-name/
```

Why:

- one toolbox can support many apps
- your real app stays clean
- you can copy only what you need
- templates do not get mixed with production code by accident

## Simple Rule

Use `AI_ENGINEERING_STUDIO` like a construction kit:

1. keep it separate
2. copy the nearest template into your real app
3. use the prompts to tell the AI what to build
4. let the AI extend the starter into your first version
5. keep improving from there
