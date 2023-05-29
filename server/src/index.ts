import app from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Todoist server listening at PORT ${PORT}`);
});
