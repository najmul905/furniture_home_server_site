import express from 'express';

import{getProducts,createProducts}from '../Controllers/products' 

const router=express.Router()
router.get('/',getProducts)
router.get('/',createProducts)

export default router