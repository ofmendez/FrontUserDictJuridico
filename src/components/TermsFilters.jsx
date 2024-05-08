import { IconoFiltrar } from '@components/icons.js';

const TermsFilters = ({ avSubjects, setAvSubjects }) => {
	const handleChangeSubjects = (event) => {
		const { name, checked } = event.target;
		setAvSubjects((prev) => ({ ...prev, [name]: checked }));
	};

	return (
		<>
			<div className='SeccionBotonFiltros'>
				{/* CAMBIAR ANCLAS A BOTONES */}
				<a id='BotonAbrirFiltros'>
					<div className='BotonAgregar'>
						<img className='IconoMenu' src={IconoFiltrar} />
						Filtrar Resultados
					</div>
				</a>
				<a id='BotonCerrarFiltros'>
					<div className='BotonAgregar'>
						<img className='IconoMenu' src={IconoFiltrar} />
						Cerrar Filtros
					</div>
				</a>
			</div>
			<div className='SeccionContenidoBuscadorFiltros' id='SeccionFiltros'>
				<h3>Filtros</h3>
				<br />
				<form className='FormaBuscadorFiltros' onChange={handleChangeSubjects}>
					<div className='CategoriasBuscador'>
						<h4>Materia</h4>
					</div>
					<input type='checkbox' id='MateriaJurisprudencia' name='Jurisprudencia' value='MateriaJurisprudencia' defaultChecked={avSubjects.Jurisprudencia} />
					<label className='LabelBuscadorFiltros'> Jurisprudencia</label>
					<br />
					<input type='checkbox' id='MateriaDoctrina' name='Doctrina' value='MateriaDoctrina' defaultChecked={avSubjects.Doctrina} />
					<label className='LabelBuscadorFiltros'> Doctrina</label>
					<br />
					<input type='checkbox' id='MateriaNorma' name='Norma' value='MateriaNorma' defaultChecked={avSubjects.Norma} />
					<label className='LabelBuscadorFiltros'> Norma</label>
					<br />
					<br />
				</form>
			</div>
		</>
	);
};

export default TermsFilters;
