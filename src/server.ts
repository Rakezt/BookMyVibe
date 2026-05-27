import './jobs/booking.job';
import './jobs/eventUpdate.job';
import http from 'http';
import app from './app';
import mongoose from 'mongoose';
import { env } from './config/env';
import { initSocket } from './config/socket';

const startServer = async () => {
  try {
    await mongoose.connect(env.MONGO_URI, {
      maxPoolSize: 10,
    });

    console.log('MongoDB Connected');
    const server = http.createServer(app);

    initSocket(server);

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
