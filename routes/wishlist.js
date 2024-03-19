const express = require("express");
const router = express.Router();
const wishlistDal = require("../services/pg.wishlist.dal");

router.get("/", async (req, res) => {
  try {
    let theWishlist = await wishlistDal.getDestinations();
    if (DEBUG) console.table(theWishlist);
    res.render("wishlist", { theWishlist });
  } catch {
    res.render("503");
  }
});

module.exports = router;