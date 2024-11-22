import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Samio Server Running');
});

export default app;
