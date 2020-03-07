const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("stepper");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Stepper server running");
});