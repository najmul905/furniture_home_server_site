import { Request, Response } from "express";
import { client } from '../db/client';


const usersGrowthCollection= client.db("Furniture_HomeDB").collection("user_growth")
export const getUsersGrowthData=async(req:Request,res:Response)=>{
     const getUsersGrowthData=await usersGrowthCollection.find().toArray()
     res.send(getUsersGrowthData)
}