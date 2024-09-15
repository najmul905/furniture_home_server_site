import express,{Express,Request,Response} from "express"


require('dotenv').config()
const cors=require("cors")
const app:Express=express()

const port=process.env.PORT||3000

app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_Name}:${process.env.DB_Pass}@cluster0.yq5wikg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const Furniture_HomeDB=client.db("Furniture_HomeDB")
    const BestSellingCollection=Furniture_HomeDB.collection("best_selling")
    const CategoryCollection=Furniture_HomeDB.collection("furniture_category")
    
    //Read data from mongoDB
    app.get("/best_selling",async(req:Request,res:Response)=>{
        const result=await BestSellingCollection.find().toArray()
        res.send(result)
    })
    app.get('/category',async(req:Request,res:Response)=>{
      const result =await CategoryCollection.find().toArray()
      res.send(result)
    }) 


    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/",(req:Request,res:Response)=>(
    res.send("type script add in node and express")
))

app.listen(port,()=>{
    console.log(`server is running now ${port}`)
})