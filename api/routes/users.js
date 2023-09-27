import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
// para crear un usuario esta la función register en auth.js controller

// router.get('/checkAuthentication', verifyToken, (req, res, next) => {
//     res.send('Hello user, you are logged in')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello user, you are logged in and you can delete your account')
// })
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Hello admin, you are logged in and you can delete all accounts')
// })

//UPDATE
//verifyUser: the user or admin can update user
router.put('/:id', verifyUser, updateUser)
//DELETE
//verifyUser: the user or admin can delete user
router.delete('/:id', verifyUser, deleteUser)
//GET
router.get('/:id', verifyUser, getUser)
//GETALL
//verifyAdmin: to get all users only admin can
router.get('/', verifyAdmin, getUsers)

export default router;
