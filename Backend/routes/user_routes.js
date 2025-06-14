import express from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controller/user_controller.js';

const router = express.Router();

//& Routes
router.get('/', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
