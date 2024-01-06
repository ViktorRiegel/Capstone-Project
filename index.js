import express from "express";

let app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.get("/update", (req, res) => {
  res.render("update.ejs");
});

app.get("/view", (req, res) => {
  res.render("view.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
