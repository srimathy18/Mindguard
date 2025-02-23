import express from 'express';
import { registerUser, loginUser, getDashboard } from '../controllers/usercontroller.js';
import userAuth from '../middlewares/auth.js'; // Ensure your middleware correctly verifies the JWT

const userRouter = express.Router();

// Endpoints to match your front-end routes:
// Signup: /api/auth/signup
userRouter.post('/signup', registerUser);

// Login: /api/auth/login
userRouter.post('/login', loginUser);

// Dashboard: /api/auth/dashboard
userRouter.get('/dashboard', userAuth, getDashboard);

export default userRouter;
