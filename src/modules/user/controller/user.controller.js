import { userModel } from "../../../../database/models/user.model.js";
import { handleAsyncError } from "../../../utils/handleAsyncError.js";



const addUser = handleAsyncError(async (req, res, next) => {

    const existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) return next(new AppError('User Already Registered', 409));

    const user = new userModel(req.body)
    await user.save()
    res.status(201).json({ message: 'success' })
})



export {
    addUser
}