import { IconoFiltrar } from '@components/icons.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchFilters = ({ contents, subjects, searchParams }) => {
	const [target, setTarget] = useState(getTarget());

	const handleChangeContents = (event) => {
		const { name, checked } = event.target;
		contents.current = { ...contents.current, [name]: checked };
		setTarget(getTarget());
	};

	const handleChangeSubjects = (event) => {
		const { name, checked } = event.target;
		subjects.current = { ...subjects.current, [name]: checked };
		setTarget(getTarget());
	};

	function getTarget () {
		const trueContents = Object.keys(contents.current).filter((key) => contents.current[key]);
		const trueSubjects = Object.keys(subjects.current).filter((key) => subjects.current[key]);
		const encodedContents = encodeURIComponent(trueContents.join(','));
		const encodedSubjects = encodeURIComponent(trueSubjects.join(','));
		const sp = new URLSearchParams(searchParams);
		sp.set('content', encodedContents);
		sp.set('subject', encodedSubjects);
		return `?${sp.toString()}`;
	}

	return (
		<>
			<div className='SeccionBotonFiltros'>
				{/* CAMBIAR ANCLAS A BOTONES */}
				<a id='BotonAbrirFiltros'>
					<div className='BotonAgregar'>
						<div><img className='IconoMenu' src={IconoFiltrar} /></div>
						<div><p>Filtrar Resultados</p></div>
					</div>
				</a>
				<a id='BotonCerrarFiltros'>
					<div className='BotonAgregar'>
						<div><img className='IconoMenu' src={IconoFiltrar} /></div>
						<div><p>Cerrar Filtros</p></div>
					</div>
				</a>
			</div>
			<div className='SeccionContenidoBuscadorFiltros' id='SeccionFiltros'>
				<h3>Filtros</h3>
				<br />
				<div className='FiltrosDisponibles'>
					<div className='SeccionFiltrosMateria'>
						<form className='FormaBuscadorFiltros' onChange={handleChangeSubjects}>
						<div className='CategoriasBuscador'>
							<h4>Materia</h4>
						</div>
						<div className='ContenedorInputFiltros'>
							<div>
								<input type='checkbox' id='MateriaJurisprudencia' name='Jurisprudencia' value='MateriaJurisprudencia' defaultChecked={subjects.current.Jurisprudencia} />
								<label className='LabelBuscadorFiltros'> Jurisprudencia</label>
							</div>
							<div>
								<input type='checkbox' id='MateriaDoctrina' name='Doctrina' value='MateriaDoctrina' defaultChecked={subjects.current.Doctrina} />
								<label className='LabelBuscadorFiltros'> Doctrina</label>
							</div>
							<div>
								<input type='checkbox' id='MateriaNorma' name='Norma' value='MateriaNorma' defaultChecked={subjects.current.Norma} />
								<label className='LabelBuscadorFiltros'> Norma</label>
							</div>
						</div>
						<br />
					</form>
					</div>
						<div className='SeccionFiltrosSeccionContenido'>
							<form className='FormaBuscadorFiltros' onChange={handleChangeContents}>
							<div className='CategoriasBuscador'>
								<h4>Sección contenido</h4>
							</div>
							<div className='ContenedorInputFiltros'>
								<div>
									<input type='checkbox' id='SeccionTermino' name='term' value='SeccionTermino' defaultChecked={contents.current.term} />
									<label className='LabelBuscadorFiltros'> Término</label>
								</div>
								<div>
									<input type='checkbox' id='SeccionDescriptor' name='meanings.descriptor' value='SeccionDescriptor' defaultChecked={contents.current['meanings.descriptor']} />
									<label className='LabelBuscadorFiltros'> Descriptor</label>
								</div>
								<div>
									<input type='checkbox' id='SeccionDefinicion' name='meanings.definition' value='SeccionDefinicion' defaultChecked={contents.current['meanings.definition']} />
									<label className='LabelBuscadorFiltros'> Definición</label>
								</div>
								<div>
									<input type='checkbox' id='SeccionFuente' name='meanings.source' value='SeccionFuente' defaultChecked={contents.current['meanings.source']} />
									<label className='LabelBuscadorFiltros'> Fuente</label>
								</div>
							</div>
							<br />
						</form>
					</div>
				</div>
				<div>
						<Link
							to={target}
							className='SubmitBusquedaFiltros'
						> FILTRAR
						</Link>
					</div>
			</div>
		</>
	);
};

export default SearchFilters;
