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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderProducts = exports.getOrderProducts = void 0;
const client_1 = require("../db/client");
const OrderProductsCollection = client_1.client.db("Furniture_HomeDB").collection("orderProducts");
const getOrderProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getOrderProducts = yield OrderProductsCollection.find().toArray();
    res.send(getOrderProducts);
});
exports.getOrderProducts = getOrderProducts;
const createOrderProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const addOrderData = yield OrderProductsCollection.insertOne(data);
    res.send(addOrderData);
});
exports.createOrderProducts = createOrderProducts;
