const { Router } = require("express");
const { model } = require("mongoose");
const {
  Add,
  getdata,
  chengedata,
  deletebyid,
} = require("../controllers/Directory.controllers");
const router = Router();
router.get("/", getdata);
router.post("/", Add);
router.put("/:id", chengedata);
router.delete("/:id", deletebyid);
module.exports = router;
