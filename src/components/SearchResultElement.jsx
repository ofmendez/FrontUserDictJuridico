import { Link } from 'react-router-dom';

const SearchResultElement = ({ r }) => {
	const getDocument = (r) => {
		if (r.highlights.length === 0)
			return r;
		let allText = '';
		const bestHighlight = r.highlights.reduce((max, tmp) => max.score > tmp.score ? max : tmp);
		const path = bestHighlight.path;
		bestHighlight.texts.map((t) => {
			allText += t.value;
			return null;
		});
		let meaningMatch = null;
		if (r.meanings)
			meaningMatch = r.meanings.find(m => {
				let dbText = '';

				switch (path) {
				case 'term':
					dbText = r.term;
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
				return dbText.includes(allText);
			});
		return meaningMatch || r;
	};
	return (
		<Link to={`/terms/${r._id}#${getDocument(r)._id}`} className='ResultadoBusqueda'>
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
				<span className='snippet'> {getDocument(r).subject} {getDocument(r).year}</span>
			</div>

		</Link>
	);
};

export default SearchResultElement;
