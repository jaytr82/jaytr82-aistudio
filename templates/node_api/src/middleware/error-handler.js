export function errorHandler(error, _request, response, _next) {
  const statusCode =
    typeof error?.statusCode === "number" ? error.statusCode : 500;
  const message =
    statusCode >= 500 ? "Internal server error" : error.message || "Request failed";

  response.status(statusCode).json({ message });
}
