const express = require("express");
let router = express.Router();
const chirpsStore = require("../chirpsstore");

router.post("/", (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.get("/", (req, res) => {
  res.json(chirpsStore.GetChirps());
  console.log("GetChirps");
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json(chirpsStore.GetChirp(id));
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.UpdateChirp(id, req.body);
  res.send("This is updated");
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.DeleteChirp(id, req.body);
  res.sendStatus(200);
});

module.exports = router;
