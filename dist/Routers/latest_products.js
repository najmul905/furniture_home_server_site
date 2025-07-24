"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const latest_porducts_1 = require("../Controllers/latest_porducts");
const router = express_1.default.Router();
router.get('/', latest_porducts_1.getLatestProducts);
router.get('/', latest_porducts_1.createLatestsProducts);
exports.default = router;
