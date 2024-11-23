import { z } from 'zod';

const OrderValidation = z.object({
  email: z.string().email(),
  car: z.string().min(1, 'Car is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  totalPrice: z.number().nonnegative('Total price must be non-negative'),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export default OrderValidation;
