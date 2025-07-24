"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const best_selling_1 = require("../Controllers/best_selling");
const router = express_1.default.Router();
router.get('/', best_selling_1.getBest_Selling);
exports.default = router;
