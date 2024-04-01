import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconoLupa, IconoMenu } from '@components/icons.js';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
// import ContentFrame from '@src/components/ContentFrame.jsx';
import { LogoPositivo } from '@src/components/img';
import Menu from '@src/components/Menu';

const Terms = () => {
	const [expandedRows, setExpandedRows] = useState([]);
	const [inputText, setInputText] = useState('');
	const navigate = useNavigate();
	const termsRef = useRef(null);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`./search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};

	return (
		// <ContentFrame>
		<>
			<Menu >
				<div className="SeccionHeader">
					<div className="SeccionHeaderIzquierda"><a onClick={console.log("abrirMenuLateral()")}>
						<img className="IconoMenu" src={IconoMenu} /></a>
					</div>
					<div className="SeccionHeaderDerecha">
						<img className="LogoPrincipal" src={LogoPositivo} />
					</div>
				</div>
				<div className="SeparadorSecciones">
				</div>
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
				<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				</div>
				<SeccionTerminos rowsState={{ expandedRows, setExpandedRows }} ref={termsRef} />
			</Menu>
		</>
		//  </ContentFrame> 
	);
};
export default Terms;
