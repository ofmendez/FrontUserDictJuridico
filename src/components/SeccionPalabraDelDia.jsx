import { SectionsSeparator } from '@components/MainSeparator.jsx';

// eslint-disable-next-line no-unused-vars
const SeccionPalabraDelDia = ({ randomTerm }) => {
	console.log('SeccionPalabraDelDia', randomTerm);
	console.log('SeccionPalabraDelDia', randomTerm.term);

	return (
		<div className='SeccionPalabraDelDiaWidget'>
			<h3>Palabra al azar</h3>
			<SectionsSeparator />
			<div className='ContenidoPalabraDelDia ScrollVerde'>
				<h2>
					{randomTerm.term}
				</h2>
				{randomTerm.meanings.map((meaning, i) => (
					<div key={i}>
						<p className='InformacionDefinicion'>DESCRIPTOR: {meaning.descriptor}</p>
						<p className='InformacionDefinicion'>AÑO: {meaning.year}</p>
						<p className='InformacionDefinicion'>MATERIA: {meaning.subject}</p>
						<div className='SeparadorSecciones' />
						<div className='DefinicionTermino ScrollVerde'>
							<p style={{ whiteSpace: 'pre-wrap' }}>
								{meaning.definition}
							</p>
						</div>
						<div className='SeparadorSecciones' />
						<p className='InformacionDefinicion'>FUENTE: {meaning.source}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SeccionPalabraDelDia;
