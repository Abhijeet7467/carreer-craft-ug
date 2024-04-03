const express = require("express");
const app = express();
const PORT = process.env.PORT || 5003;
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.all("*", (req, res, next) => {
  res.send("404, Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
