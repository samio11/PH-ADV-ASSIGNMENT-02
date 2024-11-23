import { TOrders } from './order.interface';
import { Orders } from './order.model';

const order_a_car = async (carData: TOrders) => {
  const result = await Orders.create(carData);
  return result;
};

const get_all_orders = async () => {
  const result = await Orders.aggregate([
    {
      $group: {
        _id: null, // Group all results together
        totalRevenue: {
          $sum: {
            $multiply: ['$quantity', '$totalPrice'], // Calculate total price
          },
        },
      },
    },
  ]);
  return result;
};

export const orderServices = {
  order_a_car,
  get_all_orders,
};
