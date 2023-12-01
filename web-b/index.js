const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const jsonParser = bodyParser.json();

const urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodeParser);
const port = 3001;

app.get("/", (req, res) => {
  res.send("Website-b");
});

app.get("/trigger-a", async (req, res) => {
  try {
    const json = {
      data: "data a",
    };
    const response = await fetch("http://localhost:3000/website-a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });

    const responseData = await response.json();

    res.json({
      message: "Ini adalah foto random kelas A",
      response: responseData.data, // Change this to responseData.data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/trigger-b", async (req, res) => {
  try {
    const json = {
      data: "data b",
    };
    const response = await fetch("http://localhost:3000/website-a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });

    const responseData = await response.json();

    res.json({
      message: "ini adalah foto random kelas b",
      response: responseData.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Running on Alfian port ${port} yoi`);
});
