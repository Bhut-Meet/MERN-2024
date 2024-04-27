const User = require('../models/user-model');
const Contact = require('../models/contact-model')
const Service = require('../models/service-model');

// * --------------------------------
// * get all Users logic
// * --------------------------------
const getAllUsers = async (req,res)=>{
    try {
        const users= await User.find({},{password:0});
        console.log(users);
        if(!users || users.length===0){
            return res.status(404).json({message:"No Users found"})
        }
        return res.status(200).json(users);
    } catch (error) {
        next();
    }
}



// * --------------------------------
// * get all Users contact logic
// * --------------------------------
const getAllContacts =async (req,res) =>{
    try {
        const contacts= await Contact.find();
        console.log(contacts);
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No Contacts found"})
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

// * --------------------------------
// * add service
// * --------------------------------
const AddServices = async (req, res) =>{
    try {
        const response = req.body;
        await Service.create(response);
        return res.status(200).json({message:"service send successfully"});
    } catch (error) {
        return res.status(500).json({message:"service not delivered"});
    }
}

// * --------------------------------
// * get all service  logic
// * --------------------------------
const getAllServices =async (req,res) =>{
    try {
        const Services= await Service.find();
        console.log(Service);
        if(!Service || Service.length==0){
            return res.status(404).json({message:"No service found"})
        }
        return res.status(200).json(Services);
    } catch (error) {
        console.log(error);
    }
}


// * --------------------------------
// *  contact delete logic
// * --------------------------------
const deleteServiceById =async(req,res)=>{
    try {
        const id = req.params.id;
        await Service.deleteOne({_id:id});
        return res.status(200).json({message:"service deleted successfully!"});
    } catch (error) {
        next();
    }
}


// * --------------------------------
// *  single User edit logic
// * --------------------------------
const getUsersById =async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0});
        return res.status(200).json(data);
    } catch (error) {
        next();
    }
}

// * --------------------------------
// *  single User edit logic
// * --------------------------------
const UpdateUserById =async(req,res)=>{
    try {
        const id = req.params.id;
        const UpdateUserData = req.body;

        const UpdatedData = await User.updateOne({_id:id},{
            $set:UpdateUserData,
        }
    );
        return res.status(200).json(UpdatedData);
    } catch (error) {
        next(error);
    }
}

// * --------------------------------
// *  contact delete logic
// * --------------------------------
const deleteContactById =async(req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"contact deleted successfully!"});
    } catch (error) {
        next();
    }
}

// * --------------------------------
// *  Users delete logic
// * --------------------------------
const deleteUserById =async(req,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User deleted successfully!"});
    } catch (error) {
        next();
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUserById,getUsersById,UpdateUserById,deleteContactById,AddServices,getAllServices,deleteServiceById};