import { app } from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Todoist server listening at PORT ${PORT}`);
});