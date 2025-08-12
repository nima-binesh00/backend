const { Router } = require("express");
const {
  Add,
  getdata,
  deletebyid,
  chengedata,
  finditem,
} = require("../controllers/Task.controllers.js");
const router = Router();
router.get("/", getdata);
router.get("/:dirId/tasks", finditem);
router.post("/", Add);
router.put("/:id", chengedata);
router.delete("/:id", deletebyid);
module.exports = router;
