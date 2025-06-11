import express from 'express';
import { getUser } from '../controller/user_controller';

const Route = express.Router();

//& GET
Route.get('/' , getUser);

//& POST
Route.post('/' , createUser);

//& PUT
Route.put('/:id', updateUser);

//& DELETE
Route.delete('/:id', deleteUser);

export default Route;