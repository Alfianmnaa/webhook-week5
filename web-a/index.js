const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodeParser);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Website A");
});

app.post("/website-a", (req, res) => {
  if (req.body.data === "data a") {
    console.log("Data foto a");

    const yourData = db.dataFotoRandom;
    return res.json({ message: "hallo a", data: yourData });
  } else if (req.body.data === "data b") {
    console.log("Data foto b");

    const yourData = db.dataFotoRandom;
    return res.json({ message: "hallo b", data: yourData });
  }

  console.log("something went wrong");
  res.status(400).json();
});

app.listen(port, () => {
  console.log(`Running on Alfian port ${port} yoi`);
});
