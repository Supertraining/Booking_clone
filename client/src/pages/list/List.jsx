import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import './list.css';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
	//with useLocation hook i receive an object, inside that object are the states from Navigate send from header
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);
	const [dates, setDates] = useState(location.state.dates);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);

	function addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}

	const { data, loading, error, reFetch } = useFetch(`http://localhost:8080/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

  const handleClick = () => {
      reFetch()
  }

	return (
		<div>
			<Navbar />
			{/* le asigno un type, lo paso por props a Header, en header lo uso para un renderizado condicional */}
			<Header type='list' />
			<div className='listContainer'>
				<div className='listWrapper'>
					<div className='listSearch'>
						<h1 className='lsTitle'>Search</h1>
						<div className='lsItem'>
							<label>Destination</label>
							<input
								type='text'
								name=''
								id=''
								placeholder={destination}
							/>
						</div>
						<div className='lsItem'>
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								dates[0].startDate,
								'MM/dd/yyyy'
							)} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDates([item.selection])}
									minDate={addDays(dates[0].endDate, 1)}
									ranges={dates}
                  />
                  )}
						</div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={(e) => setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={(e) => setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
					<div className='listResult'>
            {loading ? 'Loading' : <>
            {data.map(item => (
              <SearchItem item={item} key={item._id}/>
            ))}
            
            </>}
            
          </div>
				</div>
			</div>
		</div>
	);
};

export default List;
