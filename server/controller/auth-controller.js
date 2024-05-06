//* ----------------------------------------------------------------
// controller
//* ----------------------------------------------------------------



const User = require("../models/user-model")
const bcrypt= require("bcryptjs")

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.






//* ----------------------------------------------------------------
// Home Logic
//* ----------------------------------------------------------------

const home =async (req,res) => {
    try{
        res.status(200).send('Hello World using router!')
    }
    catch(error){
        console.log(error);
    }
}

//* ----------------------------------------------------------------
// user Registration Logic
//* ----------------------------------------------------------------
// 1. Get Registration Data: Retrieve user data (username, email, password).
// 2. Check Email Existence: Check if the email is already registered.
// 3. Hash Password: Securely hash the password.
// 4. Create User: Create a new user with hashed password.
//5. Save to DB: Save user data to the database.
// 6. Respond: Respond with "Registration Successful" or handle errors.

const register =async (req,res) => {
    try{
        const {username,email,phone,password} =req.body
        
        const useExist = await User.findOne({email})
        if(useExist){
            return res.status(400).json({message: "email already exists"})
        }

        // first type of hash the password

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound)
        // const userCreated = await User.create({username,email,phone,password:hash_password})

        const userCreated = await User.create({username,email,phone,password})



        // console.log(req.body);
        res.status(201).send({msg:"registration successful", token: await userCreated.generatedToken(),userId:userCreated._id.toString()})
    }
    catch(error){
        // res.status(500).send("internal server error")
        next(error);
    }
}

//* ----------------------------------------------------------------
// User Login Logic
//* ----------------------------------------------------------------

const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(404).json({message:"invalid credentials"});
        }
        // const user = await bcrypt.compare(password,userExist.password);
        const user = await userExist.comparePassword(password);
        if(user){
            res.status(201).send({message:"Login successful", token: await userExist.generatedToken(),userId:userExist._id.toString()})
        }
        else{
            res.status(401).json({message:"Invalid email or password"});
        }

    } catch (error) {
        res.status(500).send("internal server error")
    }
}

//* ----------------------------------------------------------------
// send user data -User Logic
//* ----------------------------------------------------------------

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`Error from the user data route: ${error}`);
    }
} 


// * --------------------------------
// *  single User edit logic
// * --------------------------------
const getUsersById =async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0,isAdmin:0});
        return res.status(200).json(data);
    } catch (error) {
        // next();
        console.log(error);
    }
}

// * --------------------------------
// *  update User edit logic
// * --------------------------------
const UpdateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        let updatedData = req.body;

        // Check if there's an uploaded image
        if (req.file) {
            // Get the uploaded image path
            const imagePath = req.file.path;
            
            // Add the image path to the updated data
            updatedData = {
                ...updatedData,
                image: imagePath
            };
        }

        // Update the user data
        const result = await User.updateOne({ _id: id }, { $set: updatedData });

        // Check if the update was successful
        if (result.nModified > 0) {
            return res.status(200).json({ message: "User updated successfully" });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



module.exports = {home, register,login,user,getUsersById,UpdateUserById}