"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
require('dotenv').config();
const cors = require("cors");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express_1.default.json());
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
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            const Furniture_HomeDB = client.db("Furniture_HomeDB");
            const BestSellingCollection = Furniture_HomeDB.collection("best_selling");
            const CategoryCollection = Furniture_HomeDB.collection("furniture_category");
            const ProductsCollection = Furniture_HomeDB.collection("products");
            const LatestProductsCollection = Furniture_HomeDB.collection("latest_products");
            const OrderProductsCollection = Furniture_HomeDB.collection("orderProducts");
            const usersCollection = Furniture_HomeDB.collection("users");
            const usersGrowthCollection = Furniture_HomeDB.collection("user_growth");
            const sales_growth_collection = Furniture_HomeDB.collection("sales_growth");
            //Read data from mongoDB
            app.get("/best_selling", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const result = yield BestSellingCollection.find().toArray();
                res.send(result);
            }));
            app.get('/category', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const result = yield CategoryCollection.find().toArray();
                res.send(result);
            }));
            app.get("/products", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const getProducts = yield ProductsCollection.find().toArray();
                res.send(getProducts);
            }));
            app.get("/latest_products", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const getLatestProducts = yield LatestProductsCollection.find().toArray();
                res.send(getLatestProducts);
            }));
            app.post('/products', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const item = req.body;
                const addProducts = yield ProductsCollection.insertOne(item);
                res.send(addProducts);
            }));
            app.post("/latest_products", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const data = req.body;
                const addLatestProducts = yield LatestProductsCollection.insertOne(data);
                res.send(addLatestProducts);
            }));
            app.post("/orderProducts", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const data = req.body;
                const addOrderData = yield OrderProductsCollection.insertOne(data);
                res.send(addOrderData);
            }));
            app.post("/users", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const userData = req.body;
                const email = userData.email;
                const query = { email: email };
                console.log(query);
                const existingEmail = yield usersCollection.findOne(query);
                console.log(existingEmail);
                if (existingEmail) {
                    return res.send({ message: "You already existing" });
                }
                else {
                    const addUser = yield usersCollection.insertOne(userData);
                    res.send(addUser);
                }
            }));
            // get data
            app.get("/users", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const getUsersData = yield usersCollection.find().toArray();
                res.send(getUsersData);
            }));
            // get user data by id
            app.get('/user/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const id = req.params.id;
                const query = { _id: new mongodb_1.ObjectId(id) };
                const result = yield usersCollection.findOne(query);
                res.send(result);
            }));
            // Delete user function
            app.delete("/user/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const id = req.params.id;
                const query = { _id: new mongodb_1.ObjectId(id) };
                const result = yield usersCollection.deleteOne(query);
                res.send(result);
            }));
            app.patch("/user/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const id = req.params.id;
                const filter = { _id: new mongodb_1.ObjectId(id) };
                const data = req.body;
                const update = {
                    $set: {
                        userStatus: data.status
                    }
                };
                const result = yield usersCollection.updateOne(filter, update);
                res.send(result);
            }));
            app.get("/orderProducts", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const getOrderProducts = yield OrderProductsCollection.find().toArray();
                res.send(getOrderProducts);
            })),
                app.get("/users_growth", (req, res) => __awaiter(this, void 0, void 0, function* () {
                    const getUsersGrowthData = yield usersGrowthCollection.find().toArray();
                    res.send(getUsersGrowthData);
                })),
                app.get("/sales_growth", (req, res) => __awaiter(this, void 0, void 0, function* () {
                    const get_sales_growth_data = yield sales_growth_collection.find().toArray();
                    res.send(get_sales_growth_data);
                }));
            yield client.connect();
            // Send a ping to confirm a successful connection
            yield client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
        finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
    });
}
run().catch(console.dir);
app.get("/", (req, res) => (res.send("type script add in node and express")));
app.listen(port, () => {
    console.log(`server is running now ${port}`);
});
