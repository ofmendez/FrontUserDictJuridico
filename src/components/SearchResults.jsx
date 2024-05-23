import SearchResultElement from './SearchResultElement.jsx';

const SearchResults = ({ results }) => {
	console.log('SearchResults', results);
	return (
		<div className='ContenedorDefiniciones'>

			<h3>Resultados</h3>
			<div className='ContenedorResultadosScroll ScrollVerde'>
				{results.length === 0 && <><br /><p>No se encontraron resultados</p></>}
				{results.map((r, i) =>
					<div key={i}>
						<SearchResultElement r={r} />
						<hr className='ResultadoBusquedaSeparador' />
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchResults;
