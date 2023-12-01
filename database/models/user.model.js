import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'




const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true })




userSchema.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, Number(process.env.SALT_ROUNDS))
})


userSchema.pre('findOneAndUpdate', function () {
    if (this._update.password) this._update.password = bcrypt.hashSync(this._update.password, Number(process.env.SALT_ROUNDS))
})

export const userModel = model('user', userSchema)