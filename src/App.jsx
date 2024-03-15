import { useEffect } from 'react'
import Iframe from 'react-iframe';
import '@styles/main-styles.css';
import { LogoBlanco, LogoPositivo } from './components/img';
import { IcoCronologia, IcoInicio, IcoUsuarios, IconoAbrir, IconoAgregarFavorito, IconoAtras, IconoCerrar, IconoConfiguracion, IconoFavoritos, IconoLupa, IconoMenu, IconoModoClaro, IconoModoOscuro, IconoSitioWeb, IconoTerminosReal } from './components/icons';

function App() {
	useEffect(() => {
		// Logic for token check and sending 'requestToken' message
		const token = localStorage.getItem('token');
		if (!token) {
			console.log('SENDING MESSAGE---->');
			window.parent.postMessage('requestToken', 'https://diccionarioexplore.com');
		}

		// Listener for receiving tihe token
		const listener = (event) => {
			console.log('MESSAGE ARRIVE 2 : ', event);
			console.log('data.authtoken : ', event.data.authToken);
			if (event.origin === 'https://diccionarioexplore.com' && event.data.authToken) {
				localStorage.setItem('token', event.data.authToken);
				console.log('TOKEN RECEIVED : ', event.data.authToken);
				// Proceed with actions when logged in 
			}
		};
		// window.addEventListener('message', listener);

		// Cleanup function (important to prevent memory leaks!)
		return () => {
			window.removeEventListener('message', listener);
		}
	}, []); // Empty dependency array: Execute the effect only once on mount


	return (
		<>
			<Iframe
				url="https://diccionarioexplore.com"
				width="0"
				height="0"
				style={
					{
						position: 'absolute',
						top: 0,
						left: 0,
						width: 0,
						height: 0,
						border: 'none',
						visibility: 'hidden'
					}}
			/>
			<div id="ContenedorMenuLateral">
				<div className="MenuLateral" id="MenuLateral">
					<div className="MenuLateralSeccion">
						<img className="LogoMenuLateral" src={LogoBlanco} />
						<ul className="MenuLateralLista">
							<li>
								<a href="Home.html">
									<div className="ContenedorItemMenuLateral ItemMenuActivo"><img className="IconosMenuLateral" src={IcoInicio} /> Inicio</div>
								</a>
							</li>
							<li>
								<a href="Favorites.html">
									<div className="ContenedorItemMenuLateral"><img className="IconosMenuLateral" src={IconoFavoritos} /> Favoritos</div>
								</a>
							</li>
							<li>
								<a href="History.html">
									<div className="ContenedorItemMenuLateral"><img className="IconosMenuLateral" src={IcoCronologia} /> Cronología</div>
								</a>
							</li>
							<li>
								<a href="Perfil.html">
									<div className="ContenedorItemMenuLateral"><img className="IconosMenuLateral" src={IcoUsuarios} /> Perfil</div>
								</a>
							</li>
							<li>
								<a href="https://www.google.com" target="_blank">
									<div className="ContenedorItemMenuLateral"><img className="IconosMenuLateral" src={IconoSitioWeb} /> Visita el Sitio Web</div>
								</a>
							</li>
							<li>
								<a onClick={console.log("abrirMenuConfiguracion()")}>
									<div className="ContenedorItemMenuLateral"><img className="IconosMenuLateral" src={IconoConfiguracion} /> Configuración</div>
								</a>
							</li>
						</ul>
					</div>
					<div className="MenuLateralSeccion InformacionPropiedadAplicativo">
						© 2023 Explore Diccionario
						Jurídico Minero-Energético.
					</div>
				</div>
			</div>
			<div className="OverlayMenu hidden" id="OverlayMenu" onClick={console.log("cerrarMenuLateral()")} ></div>
			<div id="ContenedorMenuConfiguracion">
				<div className="MenuConfiguracion" id="MenuConfiguracion">
					<div className="SeccionAtrasTitulo">
						<img className="IconoAtrasConfiguracion IconosConfiguracion" onClick={console.log("abrirMenuLateral()")} src={IconoAtras} />
						<p>Configuración</p>
						<img className="IconoCerrarConfiguracion IconosConfiguracion" onClick={console.log("cerrarMenuLateral()")} src={IconoCerrar} />
					</div>
					<div className="SelectoresConfiguracion">
						<table className="TablaTamanosFuente">
							<tbody>
								<tr>
									<td onClick={console.log("decrecerTamañoFuente()")} id="ConfiguracionAchicarLetra">Aa</td>
									<td onClick={console.log("incrementarTamañoFuente()")} id="ConfiguracionAgrandarLetra">Aa</td>
								</tr>
							</tbody>
						</table>
						<table className="TablaConfiguracionModo ModoActivo" onClick={console.log("ejecutarModoClaro()")} id="TablaModoClaro">
							<tbody>
								<tr>
									<td id="ConfiguracionModoClaro"><img src={IconoModoClaro} /></td>
								</tr>
							</tbody>
						</table>
						<table className="TablaConfiguracionModo" onClick={console.log("ejecutarModoOscuro()")} id="TablaModoOscuro">
							<tbody>
								<tr>
									<td id="ConfiguracionModoOscuro"><img src={IconoModoOscuro} /></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="SeccionHeaderFija" id="SeccionHeaderFija">
				<div className="SeccionHeader">
					<div className="SeccionHeaderIzquierda"><a onClick={console.log("abrirMenuLateral()")}><img className="IconoMenu" src={IconoMenu} /></a></div>
					<div className="SeccionHeaderDerecha"><img className="LogoPrincipal" src={LogoPositivo} /></div>
				</div>
				<div className="SeparadorSecciones"></div>
				<div className="SeccionBuscador">
					<form className="FormaBuscador" action="/action_page.php">
						<div className="SeccionInputBuscador">
							<img className="IconoLupa" src={IconoLupa} />
							<input className="InputBuscador" type="text" placeholder="Ingresa un término" name="buscar"/>
						</div>
						<input className="SubmitBusqueda" type="submit" value="BUSCAR"/>
						{/* </div> */}
					</form>
				</div>
				<div id="MedidaAlturaBarraFija"></div>
				<div className="ContenidoPagina" id="ContenidoPagina">
					<div className="ColumnaIzquierda">
						<p>Bienvenido a Explore el Diccionario Jurídico Minero-Energético.</p>
						<br />
						<p>Escribe una palabra en la caja de texto en la parte superior de la página para encontrar su deﬁnición.</p>
						<div className="SeccionPalabraDelDiaAtajo">
							<div className="SeparadorSeccionPrincipal"></div>
							<h2>Palabra del día</h2>
							<div className="SeparadorSecciones"></div>
							<div className="SeccionPalabraDia">
								<div className="PalabraDia">Regalías - <i>Ver definición</i></div>
								<img className="IconoAgregarFavorito" src={IconoAgregarFavorito} />
							</div>
						</div>
						<div className="SeparadorSeccionPrincipal"></div>
						<h2>Búsquedas Recientes</h2>
						<div className="SeparadorSecciones"></div>
						<div className="SeccionBusquedasRecientes">
							<a href="Results.html">
								<div className="ElementoBusquedaReciente">
									<div className="TextoBusquedaReciente">Regalías</div>
									<div className="IconobusquedaReciente"><img className="IconoAbrir" src={IconoAbrir} /></div>
								</div>
							</a>
							<hr />
							<div className="ElementoBusquedaReciente">
								<div className="TextoBusquedaReciente">Regalías</div>
								<div className="IconobusquedaReciente"><img className="IconoAbrir" src={IconoAbrir} /></div>
							</div>
							<hr />
							<div className="ElementoBusquedaReciente">
								<div className="TextoBusquedaReciente">Regalías</div>
								<div className="IconobusquedaReciente"><img className="IconoAbrir" src={IconoAbrir} /></div>
							</div>
						</div>
						<div className="SeccionTodosLosTerminos">
							<div className="SeparadorSeccionPrincipal"></div>
							<h2>De la A a la Z</h2>
							<div className="SeparadorSecciones"></div>
							<p>Encuentra todos los términos disponibles en nuestro Diccionario Jurídico Minero-Energético ordenados de la A a la Z haciendo clic en el siguiente botón. Explora nuestros recursos completo ahora mismo.</p>
							<div className="SeparadorSecciones"></div>
							<div className="DiccionarioCompleto"><img className="IconoDiccionarioCompleto" src={IconoTerminosReal} /> <span>CONSULTA TODOS LOS TÉRMINOS</span> </div>
						</div>
					</div>
					<div className="ColumnaDerechaDesaparece">
						<div className="SeccionPalabraDelDiaWidget">
							<h2>Palabra del día</h2>
							<div className="SeparadorSecciones"></div>
							<div className="ContenidoPalabradelDia">
								<div className="ContenedorPalabraIconoWidgetPalabraDelDia">
									<h3>Regalías</h3>
									<img className="IconoAgregarFavoritoWidget" src={IconoAgregarFavorito} />
								</div>
								<div className="SeparadorSecciones"></div>
								<div className="ListadoDescripciones ScrollVerde" id="ListadoDescripcionesWidget">
									<div className="ConceptoDefinicion">Regalías. Acto Legislativo 5 de 2011. Concepto.</div>
									<div className="CaracteristicasDefinicion"><span><i>2011</i></span> - <span><i>Jurisprudencia</i></span></div>
									<div className="DefinicionPalabraDelDia">
										Aqui va la definición. - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate nisl pharetra, tincidunt enim eu, malesuada ante. Sed venenatis ante velit. Vestibulum faucibus urna efficitur lacus mattis, eget commodo odio facilisis. Vestibulum a nibh efficitur, rhoncus ex quis, molestie sapien. Nulla fermentum id erat sit amet iaculis. Fusce a ultrices odio. Etiam ac mi non purus varius tristique. Nulla in diam interdum, mollis purus id, ullamcorper metus. Duis euismod nunc quis sem hendrerit gravida. Nam commodo vulputate elementum.
										Praesent aliquam nunc sit amet tempus vestibulum. Proin ornare rutrum mauris vel auctor. Integer venenatis arcu a ligula porta, et cursus purus vehicula. Nullam vitae lacinia risus. Suspendisse vitae quam sit amet ex aliquet maximus in ac eros. Nulla ornare, tortor sed pulvinar tristique, turpis ante ultrices turpis, in tincidunt dolor ipsum sagittis arcu.
									</div>
									<div className="SeparadorSecciones"></div>
									<div className="ConceptoDefinicion">Regalías. Acto Legislativo 5 de 2011. Concepto.</div>
									<div className="CaracteristicasDefinicion"><span><i>2011</i></span> - <span><i>Jurisprudencia</i></span></div>
									<div className="DefinicionPalabraDelDia">
										Aqui va la definición. - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate nisl pharetra, tincidunt enim eu, malesuada ante. Sed venenatis ante velit. Vestibulum faucibus urna efficitur lacus mattis, eget commodo odio facilisis. Vestibulum a nibh efficitur, rhoncus ex quis, molestie sapien. Nulla fermentum id erat sit amet iaculis. Fusce a ultrices odio. Etiam ac mi non purus varius tristique. Nulla in diam interdum, mollis purus id, ullamcorper metus. Duis euismod nunc quis sem hendrerit gravida. Nam commodo vulputate elementum.
										Praesent aliquam nunc sit amet tempus vestibulum. Proin ornare rutrum mauris vel auctor. Integer venenatis arcu a ligula porta, et cursus purus vehicula. Nullam vitae lacinia risus. Suspendisse vitae quam sit amet ex aliquet maximus in ac eros. Nulla ornare, tortor sed pulvinar tristique, turpis ante ultrices turpis, in tincidunt dolor ipsum sagittis arcu.
									</div>
									<div className="SeparadorSecciones"></div>
									<div className="ConceptoDefinicion">Regalías. Acto Legislativo 5 de 2011. Concepto.</div>
									<div className="CaracteristicasDefinicion"><span><i>2011</i></span> - <span><i>Jurisprudencia</i></span></div>
									<div className="DefinicionPalabraDelDia">
										Aqui va la definición. - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate nisl pharetra, tincidunt enim eu, malesuada ante. Sed venenatis ante velit. Vestibulum faucibus urna efficitur lacus mattis, eget commodo odio facilisis. Vestibulum a nibh efficitur, rhoncus ex quis, molestie sapien. Nulla fermentum id erat sit amet iaculis. Fusce a ultrices odio. Etiam ac mi non purus varius tristique. Nulla in diam interdum, mollis purus id, ullamcorper metus. Duis euismod nunc quis sem hendrerit gravida. Nam commodo vulputate elementum.
										Praesent aliquam nunc sit amet tempus vestibulum. Proin ornare rutrum mauris vel auctor. Integer venenatis arcu a ligula porta, et cursus purus vehicula. Nullam vitae lacinia risus. Suspendisse vitae quam sit amet ex aliquet maximus in ac eros. Nulla ornare, tortor sed pulvinar tristique, turpis ante ultrices turpis, in tincidunt dolor ipsum sagittis arcu.
									</div>
									<div className="SeparadorSecciones"></div>
									<div className="ConceptoDefinicion"> Regalías. Acto Legislativo 5 de 2011. Concepto.</div>
									<div className="CaracteristicasDefinicion"><span><i>2011</i></span> - <span><i>Jurisprudencia</i></span></div>
									<div className="DefinicionPalabraDelDia">
										Aqui va la definición. - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate nisl pharetra, tincidunt enim eu, malesuada ante. Sed venenatis ante velit. Vestibulum faucibus urna efficitur lacus mattis, eget commodo odio facilisis. Vestibulum a nibh efficitur, rhoncus ex quis, molestie sapien. Nulla fermentum id erat sit amet iaculis. Fusce a ultrices odio. Etiam ac mi non purus varius tristique. Nulla in diam interdum, mollis purus id, ullamcorper metus. Duis euismod nunc quis sem hendrerit gravida. Nam commodo vulputate elementum.
										Praesent aliquam nunc sit amet tempus vestibulum. Proin ornare rutrum mauris vel auctor. Integer venenatis arcu a ligula porta, et cursus purus vehicula. Nullam vitae lacinia risus. Suspendisse vitae quam sit amet ex aliquet maximus in ac eros. Nulla ornare, tortor sed pulvinar tristique, turpis ante ultrices turpis, in tincidunt dolor ipsum sagittis arcu.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="AlturaAtajosAsignada"></div>
				</div>
				<div className="SeccionAtajos" id="AlturaMenuAtajos">
					<a href="Home.html">
						<div className="ElementoAtajo"><img className="IconoAtajos IconoAtajoActivo" src={IcoInicio} />
							<br />
							Inicio
						</div>
					</a>
					<a href="Favorites.html">
						<div className="ElementoAtajo"><img className="IconoAtajos" src={IconoFavoritos} />
							<br />
							Favoritos
						</div>
					</a>
					<a href="History.html">
						<div className="ElementoAtajo"><img className="IconoAtajos" src={IcoCronologia} />
							<br />
							Cronología
						</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default App
