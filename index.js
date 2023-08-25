/*
    1. Ubah API CRUD berikut menggunakan Database.
*/

const express = require("express");
const UserService = require("./services/userService.js");

const app = express();
const port = 8080;
const host = "localhost";
app.use(express.json());

app.get("/users", UserService.getUsers);
app.post("/users", UserService.addUser);
app.put("/users/:id", UserService.updateUser);
app.delete("/users/:id", UserService.deleteUser);

app.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});
