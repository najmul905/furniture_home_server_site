import { Request,Response } from "express";
import { client } from '../db/client';


const BestSellingCollection=client.db("Furniture_HomeDB").collection("best_selling")
export const getBest_Selling=async(req:Request,res:Response)=>{
    const result=await BestSellingCollection.find().toArray()
    res.send(result)
}