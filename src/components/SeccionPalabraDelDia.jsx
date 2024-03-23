import MainsSeparator from '@components/MainSeparator.jsx';

// eslint-disable-next-line no-unused-vars
const SeccionPalabraDelDia = ({ terms }) => {
	return (
		<div className='SeccionPalabraDelDia'>
			<h3>Palabra del Día</h3>
			<MainsSeparator />
			<div className='ContenidoPalabraDelDia ScrollVerde' />
		</div>
	);
};

export default SeccionPalabraDelDia;
