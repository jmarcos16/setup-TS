import express from "express";

const app = express();

app.listen(300, () => {
  console.log(`App ${process.env.PROJECT_NAME} at port 3000`);
});
