import express from 'express';
import validate from '../../middleware/validate.middleware';
import { registerSchema } from './auth.validation';
import { login, logout, refreshToken, register } from './auth.controller';
import authMiddleware from '../../middleware/auth.middleware';
import authorizeRoles from '../../middleware/role.middleware';
const router = express.Router();

router.post('/register', validate(registerSchema), register);

router.post('/login', login);

router.post('/refresh-token', refreshToken);

router.post('/logout', authMiddleware, logout);

export default router;
