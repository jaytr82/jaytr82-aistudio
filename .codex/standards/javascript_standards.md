# JavaScript and TypeScript Standards

## General

- Prefer modern ECMAScript syntax.
- Use `const` by default and `let` only when reassignment is needed.
- Keep functions small and purpose-specific.
- Use descriptive names and avoid abbreviations that hide intent.
- Favor early returns over deep nesting.

## Project Structure

- Separate routes, services, data access, and utilities.
- Avoid business logic inside controllers or UI components.
- Group code by feature when the project grows.

## Error Handling

- Throw or return structured errors consistently.
- Do not swallow exceptions.
- Convert internal failures into safe user-facing responses at the boundary layer.

## Security

- Validate all external input.
- Do not trust request bodies, query strings, headers, or environment variables blindly.
- Keep secrets in environment variables or secret managers.
- Sanitize logs to avoid leaking tokens or personal data.

## React

- Use functional components.
- Keep heavy logic out of JSX.
- Extract reusable hooks when stateful behavior repeats.
- Handle loading, empty, and error states explicitly.

## Node

- Keep HTTP handlers thin.
- Put business logic in services.
- Centralize request validation and error middleware.
- Shut down gracefully on fatal startup errors.

## Testing

- Unit test pure logic.
- Integration test API boundaries and critical flows.
- Avoid brittle tests tied to incidental implementation details.
