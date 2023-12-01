import { globalErrorHandling } from "./middleware/globalErrorHandling.js"
import { AppError } from "./utils/AppError.js"
import authRouter from '../src/modules/auth/auth.routes.js'
import userRouter from '../src/modules/user/user.routes.js'



export const bootstrap = (app) => {




    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/user', userRouter)

    app.get('/', (req, res) => res.send('Hello World!'))


    app.all('*', (req, res, next) => {
        next(new AppError('Invalid Path', 404))
    })




    app.use(globalErrorHandling)
}