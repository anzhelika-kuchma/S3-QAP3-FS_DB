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

router.get("/:id", async (req, res) => {
  try {
    let aSong = await wishlistDal.getDestById(req.params.id);
    if (aSong === undefined) {
      res.render("norecord");
    } else {
      if (DEBUG) console.table(aDest);
      res.render("destination", { aDest });
    }
  } catch (err) {
    res.render("503");
  }
});

router.post("/", async (req, res) => {
  if (DEBUG) console.log("wishlist.POST");
  try {
    await wishlistDal.addDest(
      req.body.destination,
      req.body.city,
      req.body.country
    );
    res.redirect("/wishlist/");
  } catch (err) {
    // if (DEBUG) console.log(err);
    res.render("503");
  }
});

module.exports = router;