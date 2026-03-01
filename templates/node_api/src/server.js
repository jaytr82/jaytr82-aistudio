import { createApp, getRuntimeConfig } from "./app.js";

const { port } = getRuntimeConfig(process.env);
const app = createApp();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
