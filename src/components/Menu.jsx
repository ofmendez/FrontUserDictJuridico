import { IcoInicio, IconoLogout, IconoSitioWeb, IcoTerminos } from './icons';
import { LogoBlanco } from './img';
import MenuItem from '@components/MenuItem.jsx';

const Menu = ({ children }) => {
	const logout = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('user');
		window.localStorage.removeItem('version');
		window.location.href = '/login';
	};

	return (
		<>
			<div id='ContenedorMenuLateral'>
				<div className='MenuLateral' id='MenuLateral'>
					<div className='MenuLateralSeccion'>
						<a href='/'>
							<img className='LogoMenuLateral' src={LogoBlanco} />
						</a>
						<ul className='MenuLateralLista'>
							<MenuItem to='/' icon={IcoInicio} text='Inicio' />
							<MenuItem to='/Terms' icon={IcoTerminos} text='Términos' />
							<li>
								<a href='https://diccionarioexplore.com/' target='_blank' rel='noreferrer'>
									<div className='ContenedorItemMenuLateral'>
										<img className='IconosMenuLateral' src={IconoSitioWeb} /> Visita el Sitio Web
									</div>
								</a>
							</li>
							<li>
								<button onClick={logout}>
									<div className='ContenedorItemMenuLateral'>
										<img className='IconosMenuLateral' src={IconoLogout} /> Cerrar Sesión
									</div>
								</button>
							</li>
							{/* <li>
								<a href="Favorites.html">
									<div className="ContenedorItemMenuLateral">
										<img className="IconosMenuLateral" src={IconoFavoritos} /> Favoritos</div>
								</a>
							</li>
							<li>
								<a href="History.html">
									<div className="ContenedorItemMenuLateral">
										<img className="IconosMenuLateral" src={IcoCronologia} /> Cronología</div>
								</a>
							</li>
							<li>
								<a href="Perfil.html">
									<div className="ContenedorItemMenuLateral">
										<img className="IconosMenuLateral" src={IcoUsuarios} /> Perfil</div>
								</a>
							</li>
							<li>
								<a href="https://www.google.com" target="_blank">
									<div className="ContenedorItemMenuLateral">
										<img className="IconosMenuLateral" src={IconoSitioWeb} /> Visita el Sitio Web</div>
								</a>
							</li>
							<li>
								<a onClick={console.log("abrirMenuConfiguracion()")}>
									<div className="ContenedorItemMenuLateral">
										<img className="
										IconosMenuLateral" src={IconoConfiguracion} /> Configuración</div>
								</a>
							</li> */}
						</ul>
					</div>
					<div className='MenuLateralSeccion InformacionPropiedadAplicativo'>
						© 2024 Explore Diccionario
						Jurídico Minero-Energético.
						<br />
						Desarrollado por <a href='https://ricaurteruedaabogados.com/' target='_blank' rel='noreferrer'>Ricaurte Rueda Abogados</a>.
					</div>
				</div>
			</div>
			{/* <div className='SeccionHeaderFija'> */}
			{/* <div className='SeccionHeaderFija ContainerHomePosition' id='SeccionHeaderFija'> */}
			{children}
			{/* </div> */}
		</>

	);
};

export default Menu;
