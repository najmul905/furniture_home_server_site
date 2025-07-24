"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_growth_1 = require("../Controllers/user_growth");
const router = express_1.default.Router();
router.get('/', user_growth_1.getUsersGrowthData);
exports.default = router;
