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
    let aDest = await wishlistDal.getDestById(req.params.id);
    if (aDest === undefined) {
      res.render("norecord");
    } else {
      if (DEBUG) console.table(aDest);
      res.render("dest", { aDest });
    }
  } catch (err) {
    res.render("503");
  }
});

router.get("/:id/edit", async (req, res) => {
  if (DEBUG) console.log("dest.Edit : " + req.params.id);
  res.render("destPatch.ejs", {
    destination: req.query.destination,
    country: req.query.country,
    city: req.query.city,
  });
});


router.get("/:id/delete", async (req, res) => {
  if (DEBUG) console.log("dest.Delete : " + req.params.id);
  res.render("destDelete.ejs", {
    destination: req.query.destination,
    theId: req.params.id,
  });
});

router.post("/", async (req, res) => {
  if (DEBUG) console.log("wishlist.POST");
  try {
    await wishlistDal.addDest(
      req.body.destination,
      req.body.country,
      req.body.city
    );
    res.redirect("/wishlist/");
  } catch (err) {
    // if (DEBUG) console.log(err);
    res.render("503");
  }
});

router.patch("/:id", async (req, res) => {
  if (DEBUG) console.log("wishlist.PATCH: " + req.params.id);
  try {
    await wishlistDal.patchDest(
      req.params.id,
      req.body.destination,
      req.body.country,
      req.body.city
    );
    res.redirect("/wishlist/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

router.delete("/:id", async (req, res) => {
  if (DEBUG) console.log("wishlist.DELETE: " + req.params.id);
  try {
    await wishlistDal.deleteDest(req.params.id);
    res.redirect("/wishlist/");
  } catch {
    // log this error to an error log file.
    res.render("503");
  }
});

module.exports = router;