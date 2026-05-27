import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import morgan from 'morgan';
import authRoutes from './modules/auth/auth.routes';
import eventRoutes from './modules/event/event.routes';
import bookingRoutes from './modules/booking/booking.routes';
import globalErrorHandler from './middleware/error.middleware';

dotenv.config();
const app = express();
app.use(morgan('dev'));

app.use(compression());
app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(
  express.json({
    limit: '10kb',
  }),
);
app.use(mongoSanitize());

app.use(hpp());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
);

app.get('/', (req, res) => {
  res.send('API running');
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use(globalErrorHandler);

export default app;
