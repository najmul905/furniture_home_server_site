"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const cors = require("cors");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express_1.default.json());
app.get("/", (req, res) => (res.send("Connect with typescript")));
app.listen(port, () => {
    console.log(`server is running now ${port}`);
});
