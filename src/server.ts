import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database as string);
    app.listen(config.port, () => {
      console.log(`Server running at ${config.port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

main();
