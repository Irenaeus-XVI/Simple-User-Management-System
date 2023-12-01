import Joi from "joi";



const addUser =
    Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        role: Joi.string().valid('admin', 'user')

    })


const updateUser =
    Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            role: Joi.string().valid('admin', 'user')

    })



export {
    addUser,
    updateUser

}
