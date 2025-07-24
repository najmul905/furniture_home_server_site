import express from 'express';
import userRoutes from './users';
import productRoutes from './products';
import order_productRoutes from './order_products';
import categoryRoutes from './category';
import best_selling_productRoutes from './best_selling';
import user_growthRoutes from './user_growth';
import sales_growthRoutes from './products';
import latest_productRoutes from './latest_products';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/orderProducts', order_productRoutes);
router.use('/category', categoryRoutes);
router.use('/best_selling', best_selling_productRoutes);
router.use('/users_growth', user_growthRoutes);
router.use('/sales_growth', sales_growthRoutes);
router.use('/latest_products', latest_productRoutes);
// Add more routers here

export default router;