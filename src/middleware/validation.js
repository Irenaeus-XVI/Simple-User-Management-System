import { AppError } from "../utils/AppError.js"




export const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({ ...req.body }, { abortEarly: false })

        if (!error) {
            next()
        } else {
            return next(new AppError(error, 409))
        }
    }
}