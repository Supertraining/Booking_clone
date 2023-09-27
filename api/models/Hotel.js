import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    distance: {
        type: String,
        require: true,
    },
    photos: {
        type: [String], 
    },
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String], //its gonna have rooms id
        require: true,
    },
    cheapestPrice: {
        type: Number, //its gonna have rooms id
        require: true,
    },
    featured: { //featured es destacados
        type: Boolean, 
        default: false,
    }
})

export default mongoose.model('Hotel', HotelSchema)

