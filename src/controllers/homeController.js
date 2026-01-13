const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  console.log("check data", results);
  return res.render("home.ejs", { listUsers: results });
};

const getMinhpage = (req, res) => {
  res.render("sample");
};

const getCreateUser = (req, res) => {
  res.render("create");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log(email, name, city);
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log(results);
  res.send("Create success!");
};

module.exports = {
  getHomepage,
  getMinhpage,
  postCreateUser,
  getCreateUser,
};
