const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;

global.DEBUG = true;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Wishlist Maker" });
});

const wishlistRouter = require("./routes/wishlist");
app.use("/wishlist", wishlistRouter);


app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`The app running on port ${PORT}`);
});