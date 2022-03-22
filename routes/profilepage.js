const router = require("express").Router();
const { requiredLogin } = require("../middleware/authentication");
const express = require('express');
const Item = require("../models/items.model");
const mongoose = require("mongoose");

router.use("/profilepage", requiredLogin);

router.get("/profilepage", (req, res, next) => {
  res.render("profilepage");
});

/* GET list of items */
/*router.get("/profilepage", async (req, res, next) => {
  const itemsFromDB = await Item.find();
  res.render("profilepage", { allItems:itemsFromDB }); // add allItems tag in the profilepage.hbs to show the list of items
});*/

/* Edit Item */
/*router.get('/item/:id/edit', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  const item = await Item.findById(itemId);
  res.render("items/edit", { item }); // not working yet - where edit items?
});*/

/* Submit edited item */
/*router.post('/item/:id/edit', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  await Item.findByIdAndUpdate(itemId, { ...req.body });
  res.redirect("/profilepage");
});*/

/* Delete item - Question: Delete journey or delete item? */
/*router.post('/item/:id/delete', async (req, res, next) => {
  const itemId = mongoose.Types.ObjectId(req.params.id);
  console.log("itemId to delete", itemId);

  await Item.findByIdAndDelete(itemId);
  console.log("Successfully deleted");

  res.redirect("/profilepage");
});*/

module.exports = router;