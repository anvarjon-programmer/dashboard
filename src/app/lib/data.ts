import {User} from "./models";
import{connectToDB} from './utels';
// import{IUserPromise} from "../types/users"
// import{IProductPromise} from "../types/products"


export const fetchUser = async(q:string)=>{
    const regex = new RegExp(q, "i")
    try{
        connectToDB()
        const users = await User.find({username:{$regex: regex}})
        return users
    }catch(error){
        console.log(error);
        
    }
}