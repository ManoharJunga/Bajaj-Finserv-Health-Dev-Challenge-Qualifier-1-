import express from 'express';
import { createUser, getOperationCode } from '../controllers/userController.js';

const router = express.Router();

router.post('/bfhl', createUser);
router.get('/bfhl', getOperationCode);

export default router;
