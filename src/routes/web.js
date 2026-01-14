const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getMinhpage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/minh", getMinhpage);

router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update/:id", getUpdateUser);

router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user/", postHandleRemoveUser);

module.exports = router;
