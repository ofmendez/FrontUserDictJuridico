import { IconoAgUsuario, IconoLupa } from '@components/icons.js';
import MainsSeparator from '@components/MainSeparator.jsx';
// import ContentFrame from '@components/ContentFrame.jsx';

const Users = () => {
	const options = ['Filtrar', 'Administrador', 'Editor', 'Lector', 'Activo', 'Inactivo'];

	return (
		<>
			<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				<div>
					<div className='SeccionBuscador'>
						<form className='FormaBuscador' action=''>
							<div className='SeccionInputBuscador'>
								<img className='IconoLupa' src={IconoLupa} />
								<input className='InputBuscador' type='text' placeholder='Buscar' name='buscar' />
							</div>
							<button className='SubmitBusqueda' type='submit' value='BUSCAR'>
								BUSCAR
							</button>
						</form>
					</div>
				</div>

				<div>
					<form>
						<select name='rol' className='FiltrosBusqueda' defaultValue={options[0]}>
							{
								options.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
							}
						</select>
					</form>
				</div>
				<div>
					<button className='BotonAgregar'>
						<img className='IconoMenu' src={IconoAgUsuario} />
						Agregar Usuario
					</button>
				</div>
			</div>
			<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
				<div className='SeccionContenidoSubpagina'>
					{/* <h3>Usuarios</h3> */}
					<h3>En construccción!!</h3>
					<MainsSeparator />
					<div className='ContenedorTabla ScrollVerde'>
						<table className='TablaUsuarios' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Users;
