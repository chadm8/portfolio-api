const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/test", (req, res) => {
  const thing = req.body;
  console.log(thing);
  res.send("test success");
});

app.listen(port, () => console.log(`listening on port ${port}`));
