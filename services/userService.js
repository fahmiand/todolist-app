const {
  createData,
  getData,
  deleteData,
  updateData,
} = require("../repository/user.js");
const { successResponse, errorResponse } = require("../utils/response.js");

// const users = [];

const addUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;

  const userId = createData({
    name,
    email,
    password,
    address,
  });
  if (userId > 0) {
    successResponse(res, "success", userId);
  } else {
    errorResponse(res, "gagal menambahkan user", 500);
  }
};

const getUsers = (req, res, next) => {
  const users = getData();
  successResponse(res, "success", users);
};

const updateUser = (req, res, next) => {
  let id = req.params.id;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  const address = req.body.address;

  const result = updateData(id, { name, email, password, address });
  if (index > -1) {
    let user = users[index];
    user.name = name;
    user.email = email;
    user.password = password;

    successResponse(res, "berhasil update user", user);
  } else {
    errorResponse(res, "user tidak ditemukan");
  }
};

const deleteUser = (req, res, next) => {
  let id = req.params.id;

  const user = deleteData(id);
  if (index > -1) {
    successResponse(res, "berhasil hapus user", user);
  } else {
    errorResponse(res, "user tidak ditemukan");
  }
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
