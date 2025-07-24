import express from 'express';

import{getBest_Selling}from '../Controllers/best_selling' 

const router=express.Router()
router.get('/',getBest_Selling)

export default router