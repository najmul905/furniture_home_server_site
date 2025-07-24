import express from 'express';

import{getUsersGrowthData}from '../Controllers/user_growth' 

const router=express.Router()
router.get('/',getUsersGrowthData)

export default router