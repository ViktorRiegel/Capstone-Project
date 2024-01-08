import express from "express";
import bodyParser from "body-parser";

let app = express();
let port = 3000;

const postJSON =
  '[{"id": "0001","name": "Chicken Taco","content": "content1" },  {"id": "0002","name": "Chicken 2","content": "content2" }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { post: data });
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

app.post("/post", (req, res) => {
  switch (req.body.posts) {
    case "post1":
      data = JSON.parse(postJSON)[0];
      break;
    case "post2":
      data = JSON.parse(postJSON)[1];
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
