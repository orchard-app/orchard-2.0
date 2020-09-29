const express = require("express");
const listing = express.Router();

const Listing = require("../models/listing");

listing.get("/listing", (req, res) => {
  Listing.findAll()
    // If successful, send status code and json object of all listing in db
    .then((dbList) => res.status(200).json(dbList))
    // If error, send status code and message
    .catch((err) => res.status(500).json({ status: `Server Error: ${err}` }));
});

module.exports = listing;
