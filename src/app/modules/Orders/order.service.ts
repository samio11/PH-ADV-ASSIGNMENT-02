import { TOrders } from './order.interface';
import { Orders } from './order.model';

const order_a_car = async (carData: TOrders) => {
  const result = await Orders.create(carData);
  return result;
};

export const orderServices = {
  order_a_car,
};
