require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/api/contacts", (req, res) => {
  res.json({ message: "This is the api to get all the contacts" });
});

app.listen(PORT, () => {
  console.log(`🚀 ~ app.listen ~ port is running on ${PORT}:`);
});
