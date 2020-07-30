const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
//routes
app.get("/", function (req, res) {
   res.render("index.html");
   });
app.get("/contact", function(req, res) {
    res.render("contact.html");
});
// Venus
app.get("/courses", function(req, res) {
    res.render("courses.html");
});
// Earth
app.get("/more", function(req, res) {
    res.render("more.html");
});

app.get("/reference", function(req, res) {
    res.render("reference.html");
});
//starting server 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running....");
});