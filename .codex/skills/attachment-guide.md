# Skill Attachment Guide

Use this guide to decide which skills should attach together and which ones should stay separate.

## Default Baseline

- `industry-standard-engineer`: Attach for any implementation or refactor task that needs official-language best practices.
- `clean-code-enforcer`: Attach for any task that changes existing code or introduces new modules.

## Architecture and Delivery

- `architecture-guard`: Attach when defining module boundaries, service boundaries, or folder structures.
- `senior-engineer-agent`: Attach when the task is mainly implementation of production-ready code.
- `tech-lead-agent`: Attach when reviewing tradeoffs, refactor scope, or engineering consistency across multiple modules.
- `performance-optimizer`: Attach when latency, memory, rendering cost, or query efficiency is a primary concern.

## Security and Quality

- `security-auditor`: Attach for code review, endpoint review, auth review, or dependency-risk review.
- `security-engineer-agent`: Attach for designing security controls, hardening deployment, or improving operational security posture.
- `test-engineer`: Attach when adding or improving unit, integration, or contract tests.
- `qa-engineer-agent`: Attach when validating user flows, regression risk, or release readiness.

## Stack-Specific Skills

- `react-senior-engineer`: Attach for React component architecture, hooks, and client rendering behavior.
- `node-backend-architect`: Attach for Node or Express APIs, middleware, service layering, and runtime concerns.
- `docker-devops-master`: Attach for Dockerfiles, Compose, image hardening, or container runtime setup.
- `python-pep-master`: Attach for Python services or scripts that need idiomatic PEP-aligned structure.
- `typescript-strict-enforcer`: Attach for TypeScript-heavy work where type safety is a core requirement.
- `go-idiomatic-guard`: Attach for Go services and libraries.
- `rust-memory-safety-guard`: Attach for Rust systems work.
- `database-optimizer`: Attach for schema changes, SQL tuning, indexing, or ORM performance issues.

## Product and Strategy

- `product-manager-agent`: Attach when turning vague product ideas into scoped requirements and delivery slices.
- `cto-agent`: Attach when choosing stacks, approving architecture direction, or balancing long-term platform risk.
- `ceo-agent`: Attach when the task is business model, market positioning, monetization, or growth strategy.
- `ai-prompt-architect`: Attach when the output is primarily prompt design, prompt orchestration, or reusable prompt systems.

## Skills to Avoid Combining by Default

- Do not attach both `security-auditor` and `security-engineer-agent` unless the task needs both review and design.
- Do not attach both `qa-engineer-agent` and `test-engineer` for simple unit-test tasks; prefer `test-engineer`.
- Do not attach `ceo-agent`, `cto-agent`, and `product-manager-agent` together unless the task is explicitly strategic.
