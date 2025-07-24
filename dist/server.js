"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const client_1 = require("./db/client");
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app_1.default.get("/", (req, res) => {
    res.send("TypeScript added to Node and Express");
});
(0, client_1.connectDB)().then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});
