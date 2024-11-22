import express, { Request, Response } from 'express';
import cors from 'cors';
import carRoutes from './app/modules/Cars/car.routes';

const app = express();
app.use(express.json());
app.use(cors());

// All Car Info
app.use('/api', carRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Samio Server Running');
});

export default app;
