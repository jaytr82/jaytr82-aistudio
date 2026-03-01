# AI Engineering Studio

`AI_ENGINEERING_STUDIO` is a Codex workspace scaffold for generating, reviewing, and refining software projects with a consistent engineering standard.

## Purpose

This repository packages four things:

- reusable agent skills in `.codex/skills`
- workflow definitions in `.codex/workflows`
- prompt packs in `prompts`
- starter templates in `templates`

It is meant to be a foundation for AI-assisted delivery, not a deployed application.

## Repository Layout

```text
AI_ENGINEERING_STUDIO/
  .codex/
    config.yaml
    skills/
      <skill-name>/
        SKILL.md
        agents/openai.yaml
    standards/
    workflows/
  prompts/
  templates/
    react_app/
    node_api/
    python_service/
    dockerized_app/
```

## Core Behavior

The workspace defaults to:

- `industry-standard-engineer`
- `clean-code-enforcer`

It can auto-attach stack-specific skills for:

- React
- Node
- Docker

Strict mode, security review, and test suggestions are enabled in `.codex/config.yaml`.

## Workflows

### `full_stack_bootstrap`

Use this when starting a new project. The workflow expects the agent to:

1. analyze the project goal
2. design the architecture
3. generate structure and configuration
4. build core modules
5. add validation, error handling, tests, and Docker suggestions

### `code_review`

Use this when reviewing an existing codebase. The workflow focuses on:

1. anti-pattern detection
2. security fixes
3. performance upgrades
4. refactoring guidance

## Prompt Packs

The `prompts` directory contains reusable prompts for:

- architecture design
- code review
- project bootstrap
- refactoring

These prompts are written to be copied into a Codex or LLM session and then tailored to a target stack.

## Standards

Language standards live in `.codex/standards`. They provide concise engineering baselines for:

- JavaScript / TypeScript projects
- Python projects

## Templates

Each template directory contains a minimal starter implementation:

- `react_app`: Vite-style React starter
- `node_api`: Express API starter
- `python_service`: FastAPI service starter
- `dockerized_app`: containerized Node + Postgres starter

These are intentionally small. They are reference scaffolds, not complete production systems.

The `node_api` template is the most production-oriented starter in this repository and includes environment validation, linting, and test scaffolding.
The `react_app` template now includes linting, Vitest, and a modular component/data split suitable for extension.

## Skill Selection

Use [`attachment-guide.md`](.codex/skills/attachment-guide.md) to decide which skills should auto-attach together and where role boundaries should stay separate.

## Suggested Usage

1. Pick the closest workflow.
2. Attach the relevant stack skill.
3. Use a prompt from `prompts/`.
4. Start from the nearest template in `templates/`.
5. Extend the project with project-specific business logic and tests.
