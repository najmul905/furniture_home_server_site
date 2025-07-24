import { Request, Response } from "express";
import { client } from '../db/client';


const OrderProductsCollection= client.db("Furniture_HomeDB").collection("orderProducts")
export const getOrderProducts=async(req:Request,res:Response)=>{
      const getOrderProducts=await OrderProductsCollection.find().toArray()
      res.send(getOrderProducts)
}
export const createOrderProducts=async(req:Request,res:Response)=>{
    const data=req.body
    const addOrderData=await OrderProductsCollection.insertOne(data)
    res.send(addOrderData)
}