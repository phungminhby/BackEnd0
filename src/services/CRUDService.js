const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users u");
  return results;
};

const getUserById = async (userID) => {
  let [results, fields] = await connection.query(
    `select * from Users where id=?`,
    [userID]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userID) => {
  const [results, fields] = await connection.query(
    `UPDATE Users SET email=?, name=?, city=? WHERE id=?`,
    [email, name, city, userID]
  );
};

const destroyUserById = async (userID) => {
  const [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [userID]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  destroyUserById,
};
