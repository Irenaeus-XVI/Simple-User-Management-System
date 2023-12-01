import { globalErrorHandling } from "./middleware/globalErrorHandling.js"
import { AppError } from "./utils/AppError.js"
import authRouter from '../src/modules/auth/auth.routes.js'



export const bootstrap = (app) => {




    app.use('/api/v1/auth', authRouter)
    app.get('/', (req, res) => res.send('Hello World!'))


    app.all('*', (req, res, next) => {
        next(new AppError('Invalid Path', 404))
    })




    app.use(globalErrorHandling)
}