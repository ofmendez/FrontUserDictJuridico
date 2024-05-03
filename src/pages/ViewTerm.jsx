import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

// import ContentFrame from '@components/ContentFrame.jsx';
// import { IconoEditar } from '@components/icons.js';
import { loadTerm } from '@src/hooks/LoaderData.jsx';
import { IconoLupa } from '@components/icons.js';
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

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`./search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};

	return (
		// <ContentFrame>
		<>
		<Menu >
			<div className='SeccionSuperiorHerramientas'>
				<Skeletons on={loadingTerm} msg='Cargando'>


				<div className="SeccionBuscador">
					<form className='FormaBuscador' onSubmit={handleSubmit}>
						<div className="SeccionInputBuscador">
							<img className="IconoLupa" src={IconoLupa} />
							<input value={inputText} onChange={e => setInputText(e.target.value)} className='InputBuscador' type='text' placeholder='Ingresa un término' name='buscar' />
						</div>
						<Link
							onClick={handleSubmit}
							className={'SubmitBusqueda' + (inputText ? '' : ' noPointerEvents opacity07')}
						>
							BUSCAR
						</Link>
					</form>
				</div>




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
			<div className='SeccionContenidoDefiniciones ScrollVerde'>
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
