const dbPool = require("../db");

const getData = () => {
  const sql = "SELECT * FROM users";

  const result = dbPool.query(sql);
  return result;
};

const createData = ({ name, email, password, address }) => {
  const sql =
    "INSERT INTO users (name, email, password, address) VALUE(?, ?, ?, ?)";
  const value = [name, email, password, address];
  const result = dbPool.query(sql, value);

  return result.rows[0].id;
};

const updateData = (id, { name, email, password, address }) => {
  const query = `UPDATE FROM users where id = '${id}'`;
  const result = dbPool.query(query);
  return result.rows[0];
};

const deleteData = (id) => {
  const query = `delete from users where d = '${id}'`;
  const result = dbPool.query(query);
  return result;
};

module.exports = {
  getData,
  createData,
  updateData,
  deleteData,
};
