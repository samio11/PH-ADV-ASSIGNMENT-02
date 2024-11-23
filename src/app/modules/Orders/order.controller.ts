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

export const orderController = {
  create_a_car_info,
};
