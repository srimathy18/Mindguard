import express from 'express';
import { registerUser, loginUser } from '../controllers/usercontroller.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

//  endpoints to match front-end: /api/auth/signup and /api/auth/login
userRouter.post('/signup', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;
