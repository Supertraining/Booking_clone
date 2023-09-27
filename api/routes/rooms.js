import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/:hotelid', verifyAdmin, createRoom) //hotelid because is in witch hotel the roomId is gonna be inserted 
//UPDATE
router.put('/:id', verifyAdmin, updateRoom)
//el id de availability corresponde al que tenemos adentro de roomNumbers (unavailableDates)
router.put('/availability/:id', updateRoomAvailability)
//DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
//GET
router.get('/:id', getRoom)
//GETALL
router.get('/', getRooms)

export default router;
