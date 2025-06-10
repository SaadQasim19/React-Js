//* separately adding routes for users to maintain the code clean.

import express from 'express';
import { createUsers, deleteUsers, getUsers, updateUsers } from '../controller/user_controller';
const router = express.Router();

//& GET USERS

router.get('/',getUsers)

//& POST USERS
router.post('/',createUsers)

//& PUT USERS
router.put('/:id',updateUsers)

//& DELETE USERS
router.delete('/:id',deleteUsers)

export default router;
