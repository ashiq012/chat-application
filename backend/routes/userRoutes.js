import express from 'express'
import {register,login,logout , getOtherUser} from '../controller/userController.js'
import isAuthenticated from '../middleware/auth.js'
const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/getalluser').get(isAuthenticated,getOtherUser)

export default router;