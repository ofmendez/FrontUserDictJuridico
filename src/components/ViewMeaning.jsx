const ViewMeaning = ({ meaning }) => {
	return (

		<div className='ContenidoDefinicion'>
			<div className='ContenedorSuperiorDefinicion'>
				<div>
					<p className='InformacionDefinicion'>DESCRIPTOR: {meaning.descriptor}</p>
					<p className='InformacionDefinicion'>AÑO: {meaning.year}</p>
					<p className='InformacionDefinicion'>MATERIA: {meaning.subject}</p>
				</div>
			</div>
			<div className='SeparadorSecciones' />
			<div className='DefinicionTermino ScrollVerde'>
				<p style={{ whiteSpace: 'pre-wrap' }}>
					{meaning.definition}
				</p>
			</div>
			<div className='SeparadorSecciones' />
			<p className='InformacionDefinicion'>FUENTE: {meaning.source}</p>
		</div>
	);
};

export default ViewMeaning;
