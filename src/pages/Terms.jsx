import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconoLupa, IconoMenu } from '@components/icons.js';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import ContentFrame from '@src/components/ContentFrame.jsx';
import { LogoPositivo } from '@src/components/img';
import Menu from '@src/components/Menu';
import Button from '@src/components/Button.jsx';

const Terms = () => {
	const [expandedRows, setExpandedRows] = useState([]);
	const [inputText, setInputText] = useState('');
	const navigate = useNavigate();
	const termsRef = useRef(null);
	const expandAllRows = () => {
		const terms = termsRef.current?.getTerms();
		const allRows = terms.map(obj => obj._id);
		setExpandedRows(allRows);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`./search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};

	const collapseAllRows = () => {
		setExpandedRows([]);
	};

	return (
		<>
			<ContentFrame>
				{/* <Menu> */}
				{/* <div className='SeccionHeader'>
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
				</div> */}
				<div className='SeparadorSecciones SeparadorSeccionesOcultar' />
				<div className='SeccionBuscador SeccionBuscadorConBotones'>
					<form className='FormaBuscador FormaBuscadorConBotones' onSubmit={handleSubmit}>
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
					<div className='ContenedorBotonesExpandirContraer'>
						<Button cls='BotonExpandir' onClick={expandAllRows}><span>+</span></Button>
						<Button onClick={collapseAllRows}><span className='BotonContraer'>-</span></Button>
					</div>
				</div>
				<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas' />
				<SeccionTerminos rowsState={{ expandedRows, setExpandedRows }} ref={termsRef} />
				{/* </Menu> */}
			</ContentFrame>
		</>
	);
};
export default Terms;
