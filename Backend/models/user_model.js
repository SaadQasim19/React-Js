//* moongoose Schema & model here

import mongoose from 'mongoose'

const userSchema  = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        
    },{timestamps:true}
)

//^ Creating the user Model -- it acts as a blueprint for the documents in the collection ( allow us to do a CRUD operation)

//^ Even though you wrote "User" in your code, Mongoose will store your documents inside a MongoDB collection called products. it automatically pluralizes the model name to create the collection name.


const userModel = mongoose.model("User", userSchema);
export default userModel;