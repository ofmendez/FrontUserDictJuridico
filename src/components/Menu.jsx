import { IcoInicio, IconoLogout, IconoSitioWeb } from "./icons";
import { LogoBlanco } from "./img";

const Menu = ({children}) => {

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('version');
		window.location.href = "/login";
	}

	return (
		<>
			<div id="ContenedorMenuLateral">
				<div className="MenuLateral" id="MenuLateral">
					<div className="MenuLateralSeccion">
						<img className="LogoMenuLateral" src={LogoBlanco} />
						<ul className="MenuLateralLista">
							<li>
								<a href="/">
									<div className="ContenedorItemMenuLateral ItemMenuActivo">
										<img className="IconosMenuLateral" src={IcoInicio} /> Inicio</div>
								</a>
							</li>
							<li>
								<a href="https://diccionarioexplore.com/">
									<div className="ContenedorItemMenuLateral">
										<img className="IconosMenuLateral" src={IconoSitioWeb} /> Visita el Sitio Web</div>
								</a>
							</li>
							<li>
								<button onClick={logout}>
									<div className="ContenedorItemMenuLateral">
										<img className="IconosMenuLateral" src={IconoLogout} /> Cerrar Sesión</div>
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
					<div className="MenuLateralSeccion InformacionPropiedadAplicativo">
						© 2024 Explore Diccionario
						Jurídico Minero-Energético.
					</div>
				</div>
			</div>
			<div className="SeccionHeaderFija" >
				{children}
			</div>
		</>

	);
}

export default Menu;