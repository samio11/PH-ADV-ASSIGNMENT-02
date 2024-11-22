import express from 'express';
import { carController } from './car.controller';
const carRoutes = express.Router();

carRoutes.post('/cars', carController.create_a_car);

export default carRoutes;
