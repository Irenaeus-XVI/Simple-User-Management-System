import { userModel } from "../../../../database/models/user.model.js";
import { handleAsyncError } from "../../../utils/handleAsyncError.js";
import { AppError } from '../../../utils/AppError.js'


const addUser = handleAsyncError(async (req, res, next) => {

    const existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) return next(new AppError('User Already Registered', 409));

    const user = new userModel(req.body)
    await user.save()
    res.status(201).json({ message: 'success' })
})



const getAllUsers = handleAsyncError(async (req, res, next) => {

    const users = await userModel.find()
    res.status(200).json({ message: 'success', users })
})


const getSpecificUser = handleAsyncError(async (req, res, next) => {

    const { id } = req.params
    const user = await userModel.findById(id)
    !user && next(new AppError('User Is Not Found', 404))
    user && res.status(200).json({ message: 'success', user })
})



const updateUser = handleAsyncError(async (req, res, next) => {

    const { id } = req.params
    console.log(req.body);
    const user = await userModel.findByIdAndUpdate(id, req.body)
    !user && next(new AppError('User Is Not Found', 404))
    user && res.status(200).json({ message: 'success', user })
})


const deleteUser = handleAsyncError(async (req, res, next) => {

    const { id } = req.params
    const user = await userModel.findByIdAndDelete(id)
    !user && next(new AppError('User Is Not Found', 404))
    user && res.status(200).json({ message: 'success' })
})


export {
    addUser,
    getAllUsers,
    getSpecificUser,
    updateUser,
    deleteUser
}