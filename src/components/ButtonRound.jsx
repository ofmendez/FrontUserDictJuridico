const ButtonRound = ({ onClick, children, ico }) => {
	return (
		<button onClick={onClick} className='BotonEliminar'>
			<img className='IconoMenu' src={ico} />
			{children}
		</button>
	);
};

export default ButtonRound;
