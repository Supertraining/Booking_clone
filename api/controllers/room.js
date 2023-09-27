import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js'; //Hotel has inside rooms

//after creating room we should add room inside Hotel model --> room:[roomId]
export const createRoom = async (req, res, next) => {
    
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body) //create a newRoom with body data

    try {
        const savedRoom = await newRoom.save() //save the newRoom in db
        try {
            //find the hotel by the id pased at params and push savedRoom(newRoom) into the array at key=rooms at Hotel
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            })
        } catch (err) {
        next(err)
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err)
    }
};
export const updateRoom = async (req, res, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}) //new:true me devuelve el objeto ya con las actualizaciones hechas, sino en la DB cambia pero devuelve el que fue actualizado
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);    }
}
//lo que vamos a actualizar es lo que esta adentro de roomNumbers que esta adentro de del room
export const updateRoomAvailability = async (req, res, next) => {
    try{
        await Room.updateOne({'roomNumbers._id': req.params.id}, {
            $push: {
                'roomNumbers.$.unavailableDates': req.body.dates
            }
        })
        res.status(200).json('room dates have been updated');
    }catch(err){
        next(err);    }
}
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;

    try{
        await Room.findByIdAndDelete(req.params.id) 
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id}
            })
        } catch (err) {
        next(err)
        }
        res.status(200).json('Room has been deleted');
    }catch(err){
        next(err);    }
}
export const getRoom = async (req, res, next) => {
    try{
        const room = await Room.findById(req.params.id) 
        res.status(200).json(room);
    }catch(err){
        next(err);    }
}
export const getRooms = async (req, res, next) => {
    try{
        const rooms = await Room.find() 
        res.status(200).json(rooms);
    }catch(err){
        next(err);    }
}
