const express = require("express");
const app = express();
const path = require("path");
const validateTime = require("./middleware/validateTime");
app.use(express.json());
const port = process.env.PORT || 9000;

app.use(validateTime);
app.use(express.static("public"));
app.listen(port, (err) => {
  err ? console.log("error") : console.log(`server is running on port ${port}`);
});
