import express from "express";

const app = express();
const port = Number(process.env.PORT || 3000);

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/", (_request, response) => {
  response.json({
    message: "Dockerized app template",
    databaseUrlConfigured: Boolean(process.env.DATABASE_URL),
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
