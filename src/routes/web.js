const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getMinhpage,
  postCreateUser,
  getCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/minh", getMinhpage);

router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);

module.exports = router;
