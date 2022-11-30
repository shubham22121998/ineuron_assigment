import { Router } from "express";
import userController from "../controller/user.controller";
const route = Router()



route.post('/user',userController.addUserController);
route.put('/user',userController.updateUserController);
route.get('/user/:id',userController.getUserController);
route.delete('/user/:id',userController.deleteUserController);

export default route;