import { Link } from 'react-router-dom';

const SearchResultElement = ({ r }) => {
	const getMeaningId = (r) => {
		if (r.highlights.length === 0)
			return r._id;
		let allText = '';
		const bestHighlight = r.highlights.reduce((max, tmp) => max.score > tmp.score ? max : tmp);
		const path = bestHighlight.path;
		bestHighlight.texts.map((t) => {
			allText += t.value;
			return null;
		});
		const meaningMatch = r.meanings.find(m => {
			let dbText = '';

			switch (path) {
			case 'term':
				dbText = m.term;
				break;
			case 'meanings.descriptor':
				dbText = m.descriptor;
				break;
			case 'meanings.definition':
				dbText = m.definition;
				break;
			case 'meanings.source':
				dbText = m.source;
				break;
			default:
				break;
			}
			if (r.term === 'Barequeo') {
				console.log('path:', path);
				console.log('dbText:', dbText);
			}

			return dbText.includes(allText);
		});
		if (r.term === 'Barequeo')
			console.log('meaningMatch:', meaningMatch);

		if (meaningMatch)
			return meaningMatch._id;
		return r._id;
	};
	return (
		<Link to={`/terms/${r._id}#${getMeaningId(r)}`} className='ResultadoBusqueda'>
			<div className='ResultadoBusqueda hovered'>
				<p className='ResultadoBusquedaTermino'>
					{r.term}
				</p>
				<p className='ResultadoBusqueda'>
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
	);
};

export default SearchResultElement;
