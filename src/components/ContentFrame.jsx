// import BarraSuperiorMovil from '@components/BarraSuperiorMovil.jsx';
import Menu from '@components/Menu.jsx';

const ContentFrame = ({ children }) => {
	return (
		<>
			<Menu />
			{/* <div className='ContenidoPagina' id='ContenidoPagina'> */}
			{/* <BarraSuperiorMovil /> */}
			<div className='SeccionHeaderFija ContainerHomePosition' id='SeccionHeaderFija'>

				{children}
			</div>
		</>
	);
};

export default ContentFrame;
