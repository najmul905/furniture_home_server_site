import express from 'express';

import{getSalesGrowthData}from '../Controllers/sales_growth' 

const router=express.Router()
router.get('/',getSalesGrowthData)

export default router