import express from 'express'
import * as user from './controller/user.controller.js';
import { validation } from '../../middleware/validation.js';
import { addUser, updateUser } from './user.validation.js';
import { allowTo, protectedRoutes } from '../auth/controller/auth.controller.js';
const router = express.Router();


router.post('/addUser', validation(addUser), protectedRoutes, allowTo('admin'), user.addUser)
router.get('/getAllUsers', protectedRoutes, allowTo('admin'), user.getAllUsers)
router.get('/getSpecificUser/:id', protectedRoutes, allowTo('admin'), user.getSpecificUser)
router.put('/updateUser/:id', validation(updateUser), protectedRoutes, allowTo('admin'), user.updateUser)



export default router