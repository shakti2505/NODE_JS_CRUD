//defining Schema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type :String, 
        required:true,
        trim:true,
        minLength:5

    }, 
    email:{
        type: String,
        required:true

    },
    mobile:{
        type: String,
        
    }

})

//Model
const UserModel = mongoose.model('item',userSchema ) 
export default UserModel;

