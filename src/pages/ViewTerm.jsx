import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconoLupa, IconoMenu } from '@components/icons.js';
import { Skeletons } from '@components/Skeletons.jsx';
import { loadTerm } from '@src/hooks/LoaderData.jsx';
import ViewMeaning from '@components/ViewMeaning.jsx';
import Menu from '@components/Menu.jsx';
import { LogoPositivo } from '@src/components/img';

const ViewTerm = () => {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const [term, setTerm] = useState({});
	const [loadingTerm, setLoadingTerm] = useState('init');
	const [inputText, setInputText] = useState('');
	const navigate = useNavigate();
	const subjectOrder = ['Norma', 'Jurisprudencia', 'Doctrina', 'MATERIA'];

	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm }); }, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`../search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};

	function scrollIntoViewAndWait (element) {
		return new Promise(resolve => {
			const elementContainer = document.getElementById('scrolleable');
			if ('onscrollend' in elementContainer) {
				elementContainer.addEventListener('scrollend', resolve, { once: true });
				element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
			} else {
				element.scrollIntoView({ block: 'center', inline: 'center' });
				resolve();
			}
		});
	}

	// eslint-disable-next-line no-unused-vars
	const printSortedDescriptors 	= (meanings, _) => {
		console.log('meanings:', meanings);
		let result = [];
		for (let i = 0; i < subjectOrder.length; i++) {
			const sortedMean = meanings?.filter((m) => m.subject === subjectOrder[i]).sort((a, b) => {
				if (a.year === b.year)
					return a.descriptor.localeCompare(b.descriptor);
				return b.year - a.year;
			});
			result = result.concat(printMeanings(sortedMean, i));
		}
		return result;
	};

	function printMeanings (sortedMean, _) {
		return sortedMean?.map((m, _) =>
			<ViewMeaning
				meaning={m}
				key={`${m._id}`}
				id={`${m._id}`}
				query={searchParams.get('q')}
			/>);
	}

	useEffect(() => {
		const targetId = window.location.hash.slice(1);
		const targetParagraph = document.getElementById(targetId);
		// Check if a target ID exists and the ref is available
		if (targetParagraph && loadingTerm === 'ok') {
			console.log('Scrolling to target');
			scrollIntoViewAndWait(targetParagraph).then(() => {
				console.log('Scroll end');
				targetParagraph.classList.add('highlight');
			});
		}
	}, [loadingTerm]);

	return (
		// <ContentFrame>
		<>
			<Menu>
				<div className='SeccionHeader'>
					<div className='SeccionHeaderIzquierda'>
						<a onClick={console.log('abrirMenuLateral()')}>
							<img className='IconoMenu' src={IconoMenu} />
						</a>
					</div>
					<div className='SeccionHeaderDerecha'>
						<a href='/'>
							<img className='LogoPrincipal' src={LogoPositivo} />
						</a>
					</div>
				</div>
				<div className='SeparadorSecciones SeparadorSeccionesOcultar' />
				<div className='SeccionBuscador'>
					<form className='FormaBuscador' onSubmit={handleSubmit}>
						<div className='SeccionInputBuscador'>
							<img className='IconoLupa' src={IconoLupa} />
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
				<div className='SeccionSuperiorHerramientas'>
					<Skeletons on={loadingTerm} msg='Cargando'>
						<div className='ContenedorTerminosExpandidos'>
							<h1>{term.term}</h1>
						</div>
					</Skeletons>
				</div>
				<div className='SeccionContenidoDefiniciones ScrollVerde' id='scrolleable'>
					<Skeletons on={loadingTerm}>
						{
							printSortedDescriptors(term.meanings, 0)
						}
					</Skeletons>
				</div>
			</Menu>
		</>
		// </ContentFrame>
	);
};

export default ViewTerm;
