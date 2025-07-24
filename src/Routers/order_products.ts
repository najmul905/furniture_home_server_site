import express from 'express';

import{getOrderProducts}from '../Controllers/order_products' 

const router=express.Router()
router.get('/',getOrderProducts)

export default router