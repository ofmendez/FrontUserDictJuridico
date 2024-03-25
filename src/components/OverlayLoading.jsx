import '@styles/Loading.css';

const OverlayLoading = ({  word }) => {
	return (
		<div className='overlayLoading'>
			<h3 className='loading'>{word || 'Cargando'}</h3>
		</div>
	);
};

export default OverlayLoading;
