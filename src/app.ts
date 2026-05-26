import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './modules/auth/auth.routes';
import eventRoutes from './modules/event/event.routes';
import bookingRoutes from './modules/booking/booking.routes';
import globalErrorHandler from './middleware/error.middleware';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running');
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use(globalErrorHandler);

export default app;
