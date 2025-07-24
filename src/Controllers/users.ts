import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { client } from '../db/client';

const usersCollection = client.db("Furniture_HomeDB").collection("users");

export  const getUsers=async(req: Request, res: Response)=> {
  const users = await usersCollection.find().toArray();
  res.send(users);
}

export const createUser=async(req: Request, res: Response) =>{
  const userData = req.body;
  const email = userData.email;
  const existing = await usersCollection.findOne({ email });

  if (existing) return res.send({ message: "User already exists" });

  const result = await usersCollection.insertOne(userData);
  res.send(result);
}

export const getUserById=async(req: Request, res: Response) =>{
  const id = req.params.id;
  const result = await usersCollection.findOne({ _id: new ObjectId(id) });
  res.send(result);
}

export const deleteUser=async(req: Request, res: Response)=> {
  const id = req.params.id;
  const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
}

export const updateUser=async(req: Request, res: Response) =>{
  const id = req.params.id;
  const data = req.body;
  const result = await usersCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { userStatus: data.status } }
  );
  res.send(result);
}