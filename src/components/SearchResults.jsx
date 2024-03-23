import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
	console.log('SearchResults', results);
	return (
		<div className='ContenedorDefiniciones'>
			<h3>Resultados</h3>
			{results.length === 0 && <><br /><p>No se encontraron resultados</p></>}
			<br />
			{results.map((r, i) =>
				<div key={i}>

					<Link to={`/terms/${r._id}`} className='ResultadoBusqueda'>
						<div className='ResultadoBusqueda hovered'>
							<p className='ResultadoBusquedaTermino'>
								{r.term}
							</p>
							<p className='ResultadoBusquedaFuentemongodb+srv://ofmendez:nQz8yrKytGPYQEOw@cluster0.bss36fz.mongodb.net/?retryWrites=true&w=majority&authMechanism=DEFAULT'>
								{
									r.highlights.reduce((max, tmp) => max.score > tmp.score ? max : tmp).texts.map((t, i) => {
										if (t.type === 'text')
											return <span key={i}> {t.value}</span>;
										else
											return <mark key={i}> {t.value} </mark>;
									})
								}
							</p>
						</div>

					</Link>
					<hr className='ResultadoBusquedaSeparador' />
				</div>
			)}
		</div>
	);
};

export default SearchResults;
