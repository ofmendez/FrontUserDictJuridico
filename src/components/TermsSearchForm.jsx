import { useRef } from 'react';
import { IconoLupa } from '@components/icons.js';
import { Link, useNavigate } from 'react-router-dom';

const TermsSearchForm = ({ searchParams }) => {
	const navigate = useNavigate();
	const inputRef = useRef();
	const previousInput = useRef(searchParams.get('q'));
	const handleSubmit = (e) => {
		e.preventDefault();
		if (previousInput.current === inputRef.current.value || !inputRef.current.value)
			return;
		previousInput.current = inputRef.current.value;
		const sp = new URLSearchParams(searchParams);
		sp.set('q', inputRef.current.value);
		navigate({ ...window.location, search: sp.toString() });
	};

	return (
		<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
			<div className='SeccionContenedorBuscador'>
				<div className='SeccionBuscador'>
					<form className='FormaBuscador' onSubmit={handleSubmit}>
						<div className='SeccionInputBuscadorCompleto'>
							<img className='IconoLupa' src={IconoLupa} />
							<input ref={inputRef} defaultValue={searchParams.get('q')} className='InputBuscadorCompleto' type='text' placeholder='Buscar' name='q' />
						</div>
						<Link
							onClick={handleSubmit}
							className='SubmitBusqueda'
						> BUSCAR
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TermsSearchForm;
