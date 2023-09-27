import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    maxPeople: {
        type: Number,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }]
}, {timestamps: true});

export default mongoose.model('Room', roomSchema)

//*example how roomNumbers would work*/
// roomNumbers : [ {number: 101, unavailableDates: [01.05.2022, 02.05.2022]},
//                 {number: 102, unavailableDates: []},
//                 {number: 103, unavailableDates: []},
//                 {number: 104, unavailableDates: []},
//                 {number: 105, unavailableDates: []}
//             ]
    
    
