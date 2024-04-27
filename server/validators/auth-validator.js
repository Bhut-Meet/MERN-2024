const {z} = require("zod");

//creating an object schema

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Name must be at least 3 characters"})
    .max(255, {message:"Name must be at most 255 characters"}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(3, {message:"email must be at least 3 characters"})
    .max(255, {message:"email must be at most 255 characters"}),

    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10, {message:"phone must be at least 10 characters"})
    .max(20, {message:"phone must be at most 20 characters"}),

    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6, {message:"password must be at least 6 characters"})
    .max(1024, {message:"password must be at most 1024 characters"})
})



const loginSchema = z.object({

    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(3, {message:"email must be at least 3 characters"})
    .max(255, {message:"email must be at most 255 characters"}),


    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6, {message:"password must be at least 6 characters"})
    .max(1024, {message:"password must be at most 1024 characters"})
})

module.exports = {signupSchema,loginSchema};