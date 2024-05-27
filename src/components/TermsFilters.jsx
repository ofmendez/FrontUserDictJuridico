import { IconoFiltrar } from '@components/icons.js';

const TermsFilters = ({ avSubjects, setAvSubjects }) => {
	const handleChangeSubjects = (event) => {
		const { name, checked } = event.target;
		setAvSubjects((prev) => ({ ...prev, [name]: checked }));
	};

	return (
		<>
			<div className='SeccionContenidoBuscadorFiltros' id='SeccionFiltros'>
				<h3>Filtros</h3>
				<br />
				<form className='FormaBuscadorFiltros' onChange={handleChangeSubjects}>
					<div className='CategoriasBuscador'>
						<h4>Materia</h4>
					</div>
					<div className='ContenedorInputFiltros'>
						<div>
							<input type='checkbox' id='MateriaJurisprudencia' name='Jurisprudencia' value='MateriaJurisprudencia' defaultChecked={avSubjects.Jurisprudencia} />
							<label className='LabelBuscadorFiltros'> Jurisprudencia</label>
						</div>
						<div>
							<input type='checkbox' id='MateriaDoctrina' name='Doctrina' value='MateriaDoctrina' defaultChecked={avSubjects.Doctrina} />
							<label className='LabelBuscadorFiltros'> Doctrina</label>
						</div>
						<div>
							<input type='checkbox' id='MateriaNorma' name='Norma' value='MateriaNorma' defaultChecked={avSubjects.Norma} />
							<label className='LabelBuscadorFiltros'> Norma</label>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default TermsFilters;
