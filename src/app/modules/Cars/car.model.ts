import { Schema, model, connect } from 'mongoose';
import { TCarInfo } from './car.interface';

const carSchema = new Schema<TCarInfo>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message: 'Invalid Category Type',
      },
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    inStock: { type: Boolean, required: true, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

//Middleware for creating a Car

export const Cars = model<TCarInfo>('Cars', carSchema);
