const router = require("express").Router();
const Item = require("../models/items.model");
const { requiredLogin } = require("../middleware/authentication");

/* Use authentication middleware */
router.use("/launch", requiredLogin);

/* GET launch page */
router.get("/launch", async (req, res, next) => {
  res.render("launch");
});

/* POST launch page */
router.post("/launch", async (req, res, next) => {
  console.log(req.body);

  const userAddedItem = new Item({
    spacesuitQuantity: req.body.spacesuitQuantity,
    foodQuantity: req.body.foodQuantity,
    oxygenQuantity: req.body.oxygenQuantity,
    fuelQuantity: req.body.fuelQuantity,
    solarpanelQuantity: req.body.solarpanelQuantity,
    sproutQuantity: req.body.sproutQuantity,
    waterbottleQuantity: req.body.waterbottleQuantity,
  });

  await userAddedItem.save();

  res.redirect("/launch");
});

module.exports = router;