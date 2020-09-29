const express = require("express");
const listing = express.Router();

const Listing = require("../models/Listing");

listing.post("/listings", (req, res) => {
  const userInput = req.body;
  Listing.create({
    listing_title: userInput.listing_title,
    address: userInput.address,
    city: userInput.city,
    state: userInput.state,
    zipcode: userInput.zipcode,
    start_date: userInput.start_date,
    end_date: userInput.end_date,

  })
  .then((listing) => res.status(201).json({status: 'Listing Added!'}))
  .catch((err) =>
    res.status(500).json({ status: `Server Error: ${err}`}),
    );
})

listing.get("/listings", (req, res) => {
  Listing.findAll()
    // If successful, send status code and json object of all listing in db
    .then((dbList) => res.status(200).json(dbList))
    // If error, send status code and message
    .catch((err) => res.status(500).json({ status: `Server Error: ${err}` }));
});

module.exports = listing;
