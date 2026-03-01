# AI Engineering Studio Instructions

Read `README.md` first to understand the repository layout and intended usage.

## Core Operating Rules

- Follow `.codex/config.yaml` for default skills, auto-attach behavior, and strictness settings.
- Use `.codex/skills/attachment-guide.md` to choose the smallest useful set of skills for the task.
- Prefer existing prompts and templates over inventing new scaffolding from scratch.
- Keep changes aligned with `.codex/standards/` when working in JavaScript, TypeScript, or Python.

## Workflow Selection

When the user wants to start or scaffold a project:

- Use `.codex/workflows/full_stack_bootstrap.workflow`
- Prefer `prompts/project_bootstrap.md`
- Start from the closest template in `templates/`

When the user wants architecture help:

- Use `prompts/architecture_design.md`
- Apply the architecture-focused skills referenced in `.codex/skills/attachment-guide.md`

When the user wants a code review or audit:

- Use `.codex/workflows/code_review.workflow`
- Prefer `prompts/code_review.md`
- Prioritize bugs, regressions, security issues, performance problems, and missing tests

When the user wants a refactor:

- Use `prompts/refactor.md`
- Preserve intended behavior unless explicitly asked to change it

## Template Usage

Available starter templates:

- `templates/react_app`
- `templates/node_api`
- `templates/python_service`
- `templates/dockerized_app`

Choose the nearest template first, then extend it for the user’s actual product requirements.

## Validation

When touching the React template:

- Run `npm run lint`
- Run `npm test`

When touching the Node API template:

- Run `npm run lint`
- Run `npm test`

When touching the Python service template:

- Create a virtual environment if needed
- Install `requirements.txt` and `requirements-dev.txt`
- Run `pytest`

## Change Discipline

- Keep prompts concise and reusable.
- Keep skills narrowly scoped and non-overlapping.
- Do not weaken CI or validation without a clear reason.
- Prefer improving an existing template over adding a duplicate one.
