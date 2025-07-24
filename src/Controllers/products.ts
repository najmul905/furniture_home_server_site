import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { client } from '../db/client';

const ProductsCollection = client.db("Furniture_HomeDB").collection("products");

export const getProducts = async (req: Request, res: Response) => {
    const products = await ProductsCollection.find().toArray()
    res.send(products)
}
export const createProducts = async (req: Request, res: Response) => {
    const item = req.body
    const addProducts = await ProductsCollection.insertOne(item)
    res.send(addProducts)
}


