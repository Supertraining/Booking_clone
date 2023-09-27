import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
	//en el package json del client se agrega una key , proxy, en este caso con el localohost/api asi no hay que escribir la direccion completa en el use fetch. No me anduvo el proxy por lo que tuve que instalar npm i cors e importarlo en el index para poder hacer el fetch.
	const { data, loading } = useFetch('http://localhost:8080/api/hotels/countByCity?cities=Ranelagh,madrid,london');
	//Aqui data va a traer lo que venga del metodo que se ejecuta en el back cuando hacemos el get a esta url
	
	return (
		<div className='featured'>
			{loading ? (
				'Loading please wait'
			) : (
				<>
					<div className='featuredItem'>
						<img
							className='featuredImg'
							src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
							alt=''
						/>
						<div className='featuredTitles'>
							<h1>Ranelagh</h1>
							<h2>{data[0]} properties</h2>
						</div>
					</div>
					<div className='featuredItem'>
						<img
							className='featuredImg'
							src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='
							alt=''
						/>
						<div className='featuredTitles'>
							<h1>Madrid</h1>
							<h2>{data[1]} properties</h2>
						</div>
					</div>
					<div className='featuredItem'>
						<img
							className='featuredImg'
							src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
							alt=''
						/>
						<div className='featuredTitles'>
							<h1>London</h1>
							<h2>{data[2]} properties</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Featured;
