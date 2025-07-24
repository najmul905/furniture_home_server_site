import express from 'express';
import {
  getUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser
} from '../Controllers/users';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;