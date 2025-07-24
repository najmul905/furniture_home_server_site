import { Request, Response } from "express";
import { client } from '../db/client';


const LatestProductsCollection = client.db("Furniture_HomeDB").collection("latest_products")
export const getLatestProducts = async (req: Request, res: Response) => {
    const result = await LatestProductsCollection.find().toArray()
    res.send(result)
}

export const createLatestsProducts = async (req: Request, res: Response) => {
    const data = req.body
    const addLatestProducts = await LatestProductsCollection.insertOne(data)
    res.send(addLatestProducts)
}