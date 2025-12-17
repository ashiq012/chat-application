import express from 'express'
import {register,login,logout , getOtherUser} from '../controller/userController.js'
const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/getalluser').get(getOtherUser)

export default router;