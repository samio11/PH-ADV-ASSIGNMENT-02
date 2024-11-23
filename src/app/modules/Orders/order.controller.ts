import { Request, Response } from 'express';
import OrderValidation from './order.validation';
import { orderServices } from './order.service';

const create_a_car_info = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
    const validatedOrder = OrderValidation.parse(carData);
    const result = await orderServices.order_a_car(validatedOrder);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Car Order Failed', data: err });
  }
};
const get_all_car_info = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.get_all_orders();
    res.status(200).json({
      message: '"Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: '"Revenue calculated Failed',
      data: err,
    });
  }
};

export const orderController = {
  create_a_car_info,
  get_all_car_info,
};
