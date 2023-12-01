import express from 'express'
import * as auth from './controller/auth.controller.js';
const router = express.Router();


router.post('/signUp', auth.signUp)



export default router