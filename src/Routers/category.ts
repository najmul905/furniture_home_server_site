import express from 'express';

import{getCategory}from '../Controllers/category' 

const router=express.Router()
router.get('/',getCategory)

export default router