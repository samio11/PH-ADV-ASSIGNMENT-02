import express from 'express';
import { orderController } from './order.controller';

const orderRoute = express.Router();
orderRoute.post('/orders', orderController.create_a_car_info);
orderRoute.get('/orders/revenue', orderController.get_all_car_info);

export default orderRoute;
