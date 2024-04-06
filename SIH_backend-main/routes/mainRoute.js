import express from 'express';
// import {registerController, loginController} from '../controllers/userController.js';
import {registerController, loginController, checkLoggedInController, logOutController, getUser} from '../controllers/userController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';  //for jwt token check

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/checkLoggedIn', requireSignIn, checkLoggedInController);  //for jwt token check we use requireSignIn   //for admin check isAdmin

router.post('/logout', logOutController);

router.get('/getuser/:userId', getUser);

export default router;