import express  from "express";
import UserController from '../controllers/user_controller.js';
const router = express.Router()


//Connecting router wil controllers

router.get('/', UserController.getAlldata);
router.post('/', UserController.createUser);
router.get('/edit/:id', UserController.editUser);
router.post('/update/:id', UserController.editUserbyId);
router.post('/delete/:id', UserController.deleteUserbyId);


export default router;