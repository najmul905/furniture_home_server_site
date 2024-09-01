import express,{Express,Request,Response} from "express"


require('dotenv').config()
const cors=require("cors")
const app:Express=express()

const port=process.env.PORT||3000

app.use(cors())
app.use(express.json())

app.get("/",(req:Request,res:Response)=>(
    res.send("Connect with typescript")
))

app.listen(port,()=>{
    console.log(`server is running now ${port}`)
})