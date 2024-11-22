import { z } from 'zod';

const carValidateData = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'model is required'),
  year: z.number().int().positive('Year must be a positive integer'),
  price: z.number().positive('Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    invalid_type_error: 'Invalid Category Type',
  }),
  description: z.string().min(10, 'Description is required'),
  quantity: z.number().int().default(0),
  inStock: z.boolean().default(true),
  createdAt: z.string().default(() => new Date().toISOString()),
  updatedAt: z.string().default(() => new Date().toISOString()),
});

export default carValidateData;
