const { Router } = require("express");
const {
  Adduser,
  getAllusers,
  chengeUser,
  deletebyid,
  Login,
  finditemuser,
} = require("../controllers/user.controllers.js");
const router = Router();
router.get("/", getAllusers);
router.get("/:id/tasks", finditemuser);
router.post("/", Adduser);
router.post("/Login", Login);
router.put("/:id", chengeUser);
router.delete("/:id", deletebyid);
module.exports = router;
