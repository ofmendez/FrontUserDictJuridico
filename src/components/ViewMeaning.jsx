const ViewMeaning = ({ meaning, id }) => {
	// console.log(id);
	return (

		<div className='ContenidoDefinicion' id={id}>
			<div className='ContenedorSuperiorDefinicion'>
				<div>
					<p className='InformacionDefinicion'><span className='Negrilla'>DESCRIPTOR: {meaning.descriptor}</span></p>
					<p className='InformacionDefinicion'><span className='Negrilla'>AÑO:</span> {meaning.year}</p>
					<p className='InformacionDefinicion'><span className='Negrilla'>MATERIA:</span> {meaning.subject}</p>
				</div>
			</div>
			<div className='SeparadorSecciones' />
			<div className='DefinicionTermino ScrollVerde'>
				<p style={{ whiteSpace: 'pre-wrap' }}>
					{meaning.definition}
				</p>
			</div>
			<div className='SeparadorSecciones' />
			<p className='InformacionDefinicion'><span className='Negrilla'>FUENTE:</span> {meaning.source}</p>
			<a className='EnlaceFuente' href={meaning.file ? meaning.file : ''} target='_blank' rel='noreferrer'>
				{meaning.file ? 'Ver documento completo' : ''}
			</a>
		</div>
	);
};

export default ViewMeaning;
