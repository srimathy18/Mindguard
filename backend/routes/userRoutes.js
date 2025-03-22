import express from 'express';
import { registerUser, loginUser, getDashboard ,forgotPassword} from '../controllers/usercontroller.js';
import userAuth from '../middlewares/auth.js'; 

const userRouter = express.Router();

// Endpoints to match your front-end routes:
// Signup: /api/auth/signup
userRouter.post('/signup', registerUser);

// Login: /api/auth/login
userRouter.post('/login', loginUser);

//forgetpassword:  /forgot-password
userRouter.post("/forgot-password", forgotPassword);

// Dashboard: /api/auth/dashboard
userRouter.get('/dashboard', userAuth, getDashboard);

export default userRouter;
