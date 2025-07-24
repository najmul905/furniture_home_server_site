import express from 'express';

import{getLatestProducts,createLatestsProducts}from '../Controllers/latest_porducts' 

const router=express.Router()
router.get('/',getLatestProducts)
router.get('/',createLatestsProducts)

export default router