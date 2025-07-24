"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users"));
const products_1 = __importDefault(require("./products"));
const order_products_1 = __importDefault(require("./order_products"));
const category_1 = __importDefault(require("./category"));
const best_selling_1 = __importDefault(require("./best_selling"));
const user_growth_1 = __importDefault(require("./user_growth"));
const products_2 = __importDefault(require("./products"));
const latest_products_1 = __importDefault(require("./latest_products"));
const router = express_1.default.Router();
router.use('/users', users_1.default);
router.use('/products', products_1.default);
router.use('/orderProducts', order_products_1.default);
router.use('/category', category_1.default);
router.use('/best_selling', best_selling_1.default);
router.use('/users_growth', user_growth_1.default);
router.use('/sales_growth', products_2.default);
router.use('/latest_products', latest_products_1.default);
// Add more routers here
exports.default = router;
