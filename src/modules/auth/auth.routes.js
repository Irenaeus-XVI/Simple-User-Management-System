import express from 'express'
import * as auth from './controller/auth.controller.js';
const router = express.Router();


router.post('/signUp', auth.signUp)
router.post('/signIn', auth.signIn)



export default router