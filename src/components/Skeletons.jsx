/* eslint-disable operator-linebreak */
import '@styles/Skeleton.css';
import '@styles/Loading.css';

export function Skeletons ({ children, on, msg }) {
	return on === 'loading' ?
	// Componente a mostrar mientras se cargan los datos
		<div className='SeccionSuperiorColumnaIzquierdaHome skeleton'>
			<h3 className='loading'>{msg}</h3>
		</div>
	// -----------------------------------------------
		: (on === 'ok' ?
		// Permite renderizar el componente hijo porque ya se cargaron los datos
			<>{children}</>
		// -----------------------------------------------
			:
		// Componente a mostrar si hubo un error al cargar los datos
			<div className='SeccionSuperiorColumnaIzquierdaHome'>
				<h3>{on}</h3>
			</div>);
// -----------------------------------------------
}
