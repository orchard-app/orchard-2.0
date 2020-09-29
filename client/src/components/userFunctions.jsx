const axios = require("axios");

export const item = (newItem) => {
  return axios
    .post("/api/items/items", {
      name: newItem.name,
      quantity: newItem.quantity,
      price: newItem.price,
      date_received: newItem.date_received,
      exp_date: newItem.exp_date,
    })
    .then((res) => {
      console.log("TESTING req.body");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const listing = (newListing) => {
  return axios
    .post("/api/listings/listings", {
      title: newListing.title,
      address: newListing.address,
      city: newListing.city,
      state: newListing.state,
      zipcode: newListing.zipcode,
      start_date: newListing.start_date,
      end_date: newListing.end_date,
      start_time: newListing.start_time,
      end_time: newListing.end_time
    })
    .then((res) => {
      console.log("TESTING req.body");
    })
    .catch((err) => {
      console.log(err);
    });
};