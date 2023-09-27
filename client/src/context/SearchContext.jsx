import { useReducer } from 'react';
import { createContext } from 'react';

const INITIAL_STATE = {
	city: undefined,
	dates: [],
	options: {
		adult: undefined,
		children: undefined,
		room: undefined,
	},
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
	switch (action.type) {
		case 'NEW_SEARCH':
			return action.payload; //payload va a ser la data que venga cuando ejecute el dispatch y con la que se va actualizar el state
		case 'RESET_SEARCH':
			return INITIAL_STATE;
		default:
			return state;
	}
};
//el useReducer es un hook similar al useState per que me permite ejecutar acciones mas complejas. va a tomar como argumento una funcion que esa funcion(SearchReducer) va tomar como argumentos state y action. Con el dispatch que es similar al setState, lo que voy a hacer es ejecutar en cualquier lado el tipo de case y según cual sea se va a actualizar el state
export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

	return (
		<SearchContext.Provider
			value={{ city: state.city, dates: state.dates, options: state.options, dispatch }}>
			{children}
		</SearchContext.Provider>
	);
};
