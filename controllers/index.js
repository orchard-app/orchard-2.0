const router = require('express').Router();
const itemRoutes = require('./items.js break'); // route works
const listingRoutes = require("../Listings");


router.use('/items', itemRoutes); // add items
router.use("/Listings", listingRoutes); // add items

module.exports = router;
