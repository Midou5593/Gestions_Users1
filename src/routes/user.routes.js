const {Router} = require('express');
const userController = require("../controllers/user.controller");
const route = Router();



//route pour lire(recuperer) toutes les users dans mongodb loacal
route.get("/users",userController.getAllUsers)
//route pour creer un user
route.post("/users",userController.signUp);
// route pour lire un user par userid
route.get('/users/:id',userController.getUserById);
//route pour supprimer un user par userid
route.delete("/users/:id",userController.deleteUserById);
//route pour mettre a jour  un user par userid
route.put("/users/:id",userController.updateUserById);


module.exports = route;