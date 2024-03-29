import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            min:3,
            max:20,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            default:"ayubxonrahimov@gmail.com"
        },
        password:{
            type:String,
            required:true,
            default:"12345"
        },
        img:{
            type:String
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        isActive:{
            type:Boolean,
            default:true
        },
        phone:{
            type:String 
        },
        address:{
            type:String,
            default:"Uzbekiston"
        }
    },
    {timestamps:true}
);

const productSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
            unique:true,
        },
        desc:{
            type: String,
            unique:true,
        },
        price:{
            type: Number,
            required:true,
            min:0,
        },
        stock:{
            type: Number,
            required:true,
            min:0,
        },
         img:{
            type: String,
        },
         size:{
            type:String
        },
    },
    {timestamps:true}
);

export const User = mongoose.models.User || mongoose.model("User",userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product",productSchema)