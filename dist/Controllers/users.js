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
exports.updateUser = exports.deleteUser = exports.getUserById = exports.createUser = exports.getUsers = void 0;
const mongodb_1 = require("mongodb");
const client_1 = require("../db/client");
const usersCollection = client_1.client.db("Furniture_HomeDB").collection("users");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usersCollection.find().toArray();
    res.send(users);
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const email = userData.email;
    const existing = yield usersCollection.findOne({ email });
    if (existing)
        return res.send({ message: "User already exists" });
    const result = yield usersCollection.insertOne(userData);
    res.send(result);
});
exports.createUser = createUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield usersCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.send(result);
});
exports.getUserById = getUserById;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield usersCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.send(result);
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield usersCollection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { userStatus: data.status } });
    res.send(result);
});
exports.updateUser = updateUser;
