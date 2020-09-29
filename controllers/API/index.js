const router = require("express").Router();
const itemRoutes = require("./items.js break"); // route works
const listingRoutes = require("../Listings");

router.use("/inventory", inventoryRoutes); // add inventory
router.use("/items", itemRoutes); // add items
router.use("/listings", listingRoutes); // add items
router.use("/categories", categoryRoutes); // add categories

module.exports = router;
