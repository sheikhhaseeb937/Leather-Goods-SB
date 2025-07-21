import { model, Schema } from "mongoose";


const userCreateSchema = new Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
       
        unique: true,
    },
    password: {
        type: String,
   
    },
    image:{
        type:String,
    },
})

const Usercreate = model("SignUpUser",userCreateSchema)
export default Usercreate;