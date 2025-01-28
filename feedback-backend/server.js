const express = require("express");

const bodyparser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(bodyparser.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is listening on port " + port);
});

app.post("/feedback", (req, res) => {
  const { name, email, subject, message } = req.body;
  res.send({
    msg: "Feedback received",
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
