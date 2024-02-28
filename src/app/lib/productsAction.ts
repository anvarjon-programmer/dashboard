"use server"
import { revalidatePath } from "next/cache"
import { connectToDB } from "./utels"
import { redirect } from "next/navigation"
import { Product } from "./models"

export const addProduct = async (formData:FormData)=>{
 const {price,stock,size,description,color} = Object.fromEntries(formData)
 console.log(Object.fromEntries(formData));
 
   try{
    connectToDB()
    const newProduct = new Product({
        ...Object.fromEntries(formData)
    })
     await newProduct.save();
     console.log(newProduct);
     
   }catch(error){
    console.log(error);
   }
   revalidatePath('/dashboard/products');
   redirect('/dashboard/products')
}



export const updateProduct = async (formData:FormData)=>{
  const {id,price,stock,size,desc,color,title} = Object.fromEntries(formData)
    try{
      console.log(Object.fromEntries(formData))
     connectToDB()
     const updateFields ={
      
      price,stock,size,desc,color,title
     }
     await Product.findByIdAndUpdate(id,updateFields)
      
    }catch(error){
     console.log(error);
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products')
 }



 export const deleteProduct = async(formData:FormData)=>{
  const {id} = Object.fromEntries(formData)
  try{
    connectToDB()
    await Product.findByIdAndDelete(id)
  }catch(error){
    console.log(error);
  }
  revalidatePath('/dashboard/products')
 }