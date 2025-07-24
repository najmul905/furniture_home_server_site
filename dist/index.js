"use strict";
// import express,{Express,Request,Response} from "express"
// import { ObjectId } from "mongodb"
// require('dotenv').config()
// const cors=require("cors")
// const app:Express=express()
// const port=process.env.PORT||3000
// app.use(cors())
// app.use(express.json())
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_Name}:${process.env.DB_Pass}@cluster0.yq5wikg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     const Furniture_HomeDB=client.db("Furniture_HomeDB")
//     const BestSellingCollection=Furniture_HomeDB.collection("best_selling")
//     const CategoryCollection=Furniture_HomeDB.collection("furniture_category")
//     const ProductsCollection=Furniture_HomeDB.collection("products")
//     const LatestProductsCollection=Furniture_HomeDB.collection("latest_products")
//     const OrderProductsCollection=Furniture_HomeDB.collection("orderProducts")
//     const usersCollection=Furniture_HomeDB.collection("users")
//     const usersGrowthCollection=Furniture_HomeDB.collection("user_growth")
//     const sales_growth_collection=Furniture_HomeDB.collection("sales_growth")
//     //Read data from mongoDB
//     app.get("/best_selling",async(req:Request,res:Response)=>{
//         const result=await BestSellingCollection.find().toArray()
//         res.send(result)
//     })
//     app.get('/category',async(req:Request,res:Response)=>{
//       const result =await CategoryCollection.find().toArray()
//       res.send(result)
//     }) 
//     app.get("/products",async(req:Request,res:Response)=>{
//       const getProducts=await ProductsCollection.find().toArray()
//       res.send(getProducts)
//     })
//     app.get("/latest_products",async(req:Request,res:Response)=>{
//       const getLatestProducts=await LatestProductsCollection.find().toArray()
//       res.send(getLatestProducts)
//     })
//     app.post('/products',async(req:Request,res:Response)=>{
//       const item=req.body
//       const addProducts=await ProductsCollection.insertOne(item)
//       res.send(addProducts)
//     })
//     app.post("/latest_products",async(req:Request,res:Response)=>{
//       const data=req.body
//       const addLatestProducts=await LatestProductsCollection.insertOne(data)
//       res.send(addLatestProducts)
//     })
//     app.post("/orderProducts",async(req:Request,res:Response)=>{
//       const data=req.body
//       const addOrderData=await OrderProductsCollection.insertOne(data)
//       res.send(addOrderData)
//     })
//     app.post("/users",async(req:Request,res:Response)=>{
//       const userData=req.body
//       const email=userData.email
//       const query={email:email}
//       console.log(query)
//       const existingEmail=await usersCollection.findOne(query)
//       console.log(existingEmail)
//       if(existingEmail){
//         return res.send({message:"You already existing"})
//       }
//       else{
//         const addUser=await usersCollection.insertOne(userData)
//         res.send(addUser)
//       }
//     })
// // get data
//     app.get("/users",async(req:Request,res:Response)=>{
//       const getUsersData=await usersCollection.find().toArray()
//       res.send(getUsersData)
//     }) 
//     // get user data by id
//     app.get('/user/:id',async(req:Request,res:Response)=>{
//       const id=req.params.id 
//       const query={_id:new ObjectId(id)}
//       const result=await usersCollection.findOne(query)
//       res.send(result)
//      })
//     // Delete user function
//     app.delete("/user/:id",async(req:Request,res:Response)=>{
//       const id=req.params.id
//       const query={_id: new ObjectId(id)}
//       const result=await usersCollection.deleteOne(query)
//       res.send(result)
//     })
//     app.patch("/user/:id",async(req:Request,res:Response)=>{
//       const id=req.params.id
//       const filter={_id:new ObjectId(id)}
//       const data=req.body
//       const update={
//         $set:{
//           userStatus:data.status
//         }
//       }
//       const result= await usersCollection.updateOne(filter,update)
//       res.send(result)
//     })
//     app.get("/orderProducts",async(req:Request,res:Response)=>{
//       const getOrderProducts=await OrderProductsCollection.find().toArray()
//       res.send(getOrderProducts)
//     }),
//     app.get("/users_growth",async(req:Request,res:Response)=>{
//       const getUsersGrowthData=await usersGrowthCollection.find().toArray()
//       res.send(getUsersGrowthData)
//     }),
//     app.get("/sales_growth",async(req:Request,res:Response)=>{
//       const get_sales_growth_data=await sales_growth_collection.find().toArray()
//       res.send(get_sales_growth_data)
//     })
//     // await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// app.get("/",(req:Request,res:Response)=>(
//     res.send("type script add in node and express")
// ))
// app.listen(port,()=>{
//     console.log(`server is running now ${port}`)
// })
