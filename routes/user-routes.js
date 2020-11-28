let db = require("../models");
let path = require("path");

module.exports = function(app) {
    // Home page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Login page
    app.get("/login", (req, res) => {
        db.User.findAll({}).then(data =>{
            res.render("login", {users: data});
          });
    });

    // Register page
    app.get("/register", (req, res) => {
        res.render("register");
    });

    // POST route for registering new user
    app.post("/register", (req, res) => {
        db.User.create(req.body).then(data => {
            res.json(data);
        });
    });

}