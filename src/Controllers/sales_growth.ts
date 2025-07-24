import { Request, Response } from "express";
import { client } from '../db/client';


const sales_growth_collection= client.db("Furniture_HomeDB").collection("sales_growth")
export const getSalesGrowthData=async(req:Request,res:Response)=>{
     const getSalesGrowthData=await sales_growth_collection.find().toArray()
     res.send(getSalesGrowthData)
}