# Code Review Prompt

Review the provided code as a senior engineer with emphasis on correctness, security, performance, and maintainability.

## Review Priorities

- Find bugs and behavioral regressions first.
- Identify security weaknesses.
- Flag unnecessary complexity and duplication.
- Point out performance issues that matter in practice.
- Suggest concrete refactors that preserve intent.

## Constraints

- Do not rewrite large sections without justification.
- Do not recommend speculative abstractions.
- Keep the feedback actionable and specific.

## Output Format

Provide:

1. findings ordered by severity
2. file and line references where possible
3. explanation of impact
4. recommended fix for each finding
5. residual risks or testing gaps
