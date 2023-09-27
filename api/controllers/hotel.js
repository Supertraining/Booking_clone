import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js'


export const createHotel = async (req, res, next) => {
	const newHotel = new Hotel(req.body);

	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel);
	} catch (err) {
		next(err);
	}
};

export const updateHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		); //new:true me devuelve el objeto ya con las actualizaciones hechas, sino en la DB cambia pero devuelve el que fue actualizado
		res.status(200).json(updatedHotel);
	} catch (err) {
		next(err);
	}
};

export const deleteHotel = async (req, res, next) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json('Hotel has been deleted');
	} catch (err) {
		next(err);
	}
};

export const getHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json(hotel);
	} catch (err) {
		next(err);
	}
};

export const getHotels = async (req, res, next) => {
	const { min, max, ...others } = req.query; //desestructuro min y max por un lado y todo el resto(featured, address, o lo que pase por query) por otro
	try {
		const hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 } }).limit(
			req.query.limit
		);
		res.status(200).json(hotels);
	} catch (err) {
		next(err);
	}
};

export const countByCity = async (req, res, next) => {
	const cities = req.query.cities.split(',');
	try {
		const list = await Promise.all(
			cities.map((city) => {
				//promise all because it receives several elements
				return Hotel.countDocuments({ city: city }); //this mongo command will return the number od hotels that matches the city
			})
		);
		res.status(200).json(list);
	} catch (err) {
		next(err);
	}
};

export const countByType = async (req, res, next) => {
	try {
		const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
		const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });
		const resortCount = await Hotel.countDocuments({ type: 'resort' });
		const villaCount = await Hotel.countDocuments({ type: 'villa' });
		const cabinCount = await Hotel.countDocuments({ type: 'cabin' });
		res.status(200).json([
			{ type: 'hotel', count: hotelCount },
			{ type: 'apartment', count: apartmentCount },
			{ type: 'resort', count: resortCount },
			{ type: 'villa', count: villaCount },
			{ type: 'cabin', count: cabinCount },
		]);
	} catch (err) {
		next(err);
	}
};

export const getHotelRooms = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id)
		//usamos promise.all porque van a venir un array con multiples elementos(rooms) que en realidad solo van a ser los id que los pusheamos adentro de un array de un hotel al momento de crear los Rooms
		const list = await Promise.all(hotel.rooms.map((roomId) => {
			return Room.findById(roomId)
		}))
		return res.status(200).json(list)
	} catch (err) {
		next(err)
	}
}