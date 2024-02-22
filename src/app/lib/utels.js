import mongoose from "mongoose";

const connection = {};


export const connectToDB = async () =>{
    try{
        if(connection.isConnected) return;
        const db = await mongoose.connect(
            "mongodb+srv://arslon0220:NZ0UOcibhLFjDFMh@cluster0.3vviuvi.mongodb.net/?retryWrites=true&w=majority",{
                dbName:"test"
                // "mongodb+srv://mranvarjontojiboyev:yt47qQg51YtIfgZU@cluster3.k4sdjzr.mongodb.net/?retryWrites=true&w=majority",{
                // dbName:"admin-dashboard"
            });
            connection.isConnected = db.connections[0].readyState
    }catch(error){
        console.log(error);
        throw new Error(error)
    }
}