import { Schema, model, connect } from 'mongoose';
import { TOrders } from './order.interface';
import { Cars } from '../Cars/car.model';

const orderSchema = new Schema<TOrders>({
  email: { type: String, required: true },
  car: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

orderSchema.pre('save', async function (next) {
  const orderInfo = this;
  const carId = orderInfo.car; // Extract car ID from the order

  try {
    // Find the car by ID
    const find_the_car = await Cars.findById(carId);

    if (!find_the_car) {
      throw new Error('Car not found');
    }

    // Check if the car is out of stock
    if (find_the_car.quantity === 0) {
      await Cars.updateOne({ _id: carId }, { inStock: false });
      throw new Error('Car is out of stock');
    }

    // Check if the requested quantity exceeds available stock
    if (find_the_car.quantity < orderInfo.quantity) {
      throw new Error(`Insufficient stock.`);
    }

    // Update the car's inventory
    await Cars.updateOne(
      { _id: carId },
      {
        $inc: { quantity: -orderInfo.quantity },
      }
    );

    next();
  } catch (err: any) {
    next(err);
  }
});

export const Orders = model<TOrders>('Orders', orderSchema);
