import { Request,Response } from "express";
import { client } from '../db/client';


const CategoryCollection=client.db("Furniture_HomeDB").collection("furniture_category")
export const getCategory=async(req:Request,res:Response)=>{
    const result=await CategoryCollection.find().toArray()
    res.send(result)
}