import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

// import ContentFrame from '@components/ContentFrame.jsx';
// import { IconoEditar } from '@components/icons.js';
import { loadTerm } from '@src/hooks/LoaderData.jsx';
import ViewMeaning from '@components/ViewMeaning.jsx';
import { Skeletons } from '@components/Skeletons.jsx';
// import ButtonRound from '@src/components/ButtonRound.jsx';
// import { deleteTerm } from '@src/hooks/PostData.jsx';
import Menu from '@src/components/Menu';

const ViewTerm = () => {
	const { id } = useParams();
	const [term, setTerm] = useState({});
	const [loadingTerm, setLoadingTerm] = useState('init');
	// const navigate = useNavigate();

	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm }); }, []);

	// const doneDelete = () => {
	// 	navigate('/terms');
	// };

	// const handleDelete = () => {
	// 	window.confirm('¿Estás seguro de eliminar este término?') &&
	// 	deleteTerm({ id, setLoadingTerm, handleDonePost: doneDelete });
	// };

	return (
		// <ContentFrame>
		<>
		<Menu >
			<div className='SeccionSuperiorHerramientas'>
				<Skeletons on={loadingTerm} msg='Cargando'>
					<div className='SeccionBuscador'>
						<h1>{term.term}</h1>
					</div>
					<div className='SeccionDerechaBotones'>
						{/* <ButtonRound onClick={handleDelete} ico={IconoEliminar} /> */}
						{/* <Link className='BotonAgregar' to={'../edit/' + id}>
							<img className='IconoMenu' src={IconoEditar} />
							Editar Término
						</Link> */}
					</div>
				</Skeletons>
			</div>
			<div className='SeccionContenidoDefiniciones'>
				<Skeletons on={loadingTerm}>
					{
						term.meanings?.map((el, i) => (<ViewMeaning meaning={el} key={i} />))
					}
				</Skeletons>
			</div>
			</Menu>
		</>
		// </ContentFrame>
	);
};

export default ViewTerm;
