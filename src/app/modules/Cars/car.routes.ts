import express from 'express';
import { carController } from './car.controller';
const carRoutes = express.Router();

carRoutes.post('/cars', carController.create_a_car);
carRoutes.get('/cars', carController.get_all_car_info);
carRoutes.get('/cars/:carId', carController.get_a_car_info);
carRoutes.put('/cars/:carId', carController.update_a_car_info);
carRoutes.delete('/cars/:carId', carController.delete_a_car_info);
export default carRoutes;
