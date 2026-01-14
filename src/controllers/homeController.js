const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  destroyUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  // console.log("check data", results);
  return res.render("home.ejs", { listUsers: results });
};

const getMinhpage = (req, res) => {
  res.render("sample");
};

const getCreateUser = (req, res) => {
  res.render("create");
};

const getUpdateUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);
  if (user.length === 0) {
    return res.send("User not found");
  }
  res.render("update", { userEdit: user });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log(email, name, city);
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log(results);
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city } = req.body;
  let userID = req.body.userID;
  if (!userID) {
    return res.send("Missing user id");
  }
  await updateUserById(email, name, city, userID);
  console.log(email, name, city, userID);

  // console.log(results);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);
  if (user.length === 0) {
    return res.send("User not found");
  }
  res.render("delete", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  let userID = req.body.userID;
  console.log(userID);
  if (!userID) {
    return res.send("Missing user id");
  }
  await destroyUserById(userID);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getMinhpage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
