// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const path = require("path");
//const routes = require('./controllers/');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const appOrigin = process.env.APP_ORIGIN;
var db = require("./database");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.use('/api/categories', require('./controllers/Categories'));
  app.use("/api/items", require("./controllers/Items"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}
// Add routes, both API and view
//app.use(routes);
// adding category route

//CHANGES: Refactored route definitions to be shorter and more clear
// app.use('/api/categories', require('./controllers/Categories'));
app.use("/api/items", require("./controllers/Items"));
app.use("/api/listings", require("./controllers/Listings"));
app.use("/api/user", require("./controllers/Users"));

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
