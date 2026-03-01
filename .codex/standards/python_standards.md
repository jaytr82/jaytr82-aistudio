# Python Standards

## General

- Follow PEP 8 naming and formatting.
- Use type hints on public functions and core domain models.
- Keep functions focused and modules cohesive.
- Prefer explicit code over clever shortcuts.

## Project Structure

- Separate API, services, models, and infrastructure concerns.
- Keep framework-specific code at the edge of the system.
- Group related modules by domain where practical.

## Error Handling

- Raise domain-appropriate exceptions.
- Catch exceptions at boundaries to return safe, structured responses.
- Avoid broad `except Exception` unless re-raising or converting intentionally.

## Security

- Validate external input.
- Keep secrets out of source control.
- Avoid string-built SQL; use parameterized queries or ORM protections.
- Be careful with file paths, shell execution, and deserialization.

## FastAPI or Web Services

- Use Pydantic models for request and response validation.
- Keep route handlers thin.
- Put orchestration and business rules into service modules.
- Add health endpoints for containerized deployments.

## Testing

- Use `pytest`.
- Prefer isolated unit tests for business logic.
- Add API tests for critical endpoints.
- Keep fixtures small and readable.
