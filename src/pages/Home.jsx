import { useEffect, useState } from 'react'
import Iframe from 'react-iframe';
import { LogoPositivo } from '@components/img.js';

// eslint-disable-next-line no-unused-vars
import { IcoCronologia, IcoInicio, IcoUsuarios, IconoAbrir, IconoAgregarFavorito, IconoAtras, IconoCerrar, IconoConfiguracion, IconoFavoritos, IconoLupa, IconoMenu, IconoModoClaro, IconoModoOscuro, IconoSitioWeb, IconoTerminosReal } from '@components/icons.js';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@src/components/Menu';

const Home = () => {
	const [inputText, setInputText] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`./terms/search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};
	useEffect(() => {
		// Logic for token check and sending 'requestToken' message
		const token = localStorage.getItem('token');
		if (!token) {
			console.log('SENDING MESSAGE---->');
			window.parent.postMessage('requestToken', 'https://diccionarioexplore.com');
		}

		// Listener for receiving tihe token
		// const listener = (event) => {
		// 	console.log('MESSAGE ARRIVE 2 : ', event);
		// 	console.log('data.authtoken : ', event.data.authToken);
		// 	if (event.origin === 'https://diccionarioexplore.com' && event.data.authToken) {
		// 		localStorage.setItem('token', event.data.authToken);
		// 		console.log('TOKEN RECEIVED : ', event.data.authToken);
		// 		// Proceed with actions when logged in 
		// 	}
		// };
		// window.addEventListener('message', listener);

		// Cleanup function (important to prevent memory leaks!)
		return () => {
			// window.removeEventListener('message', listener);
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
			<Menu />
			<div className="OverlayMenu hidden" id="OverlayMenu" onClick={console.log("cerrarMenuLateral()")} >

			</div>
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
									<td id="ConfiguracionModoClaro">
										<img src={IconoModoClaro} /></td>
								</tr>
							</tbody>
						</table>
						<table className="TablaConfiguracionModo" onClick={console.log("ejecutarModoOscuro()")} id="TablaModoOscuro">
							<tbody>
								<tr>
									<td id="ConfiguracionModoOscuro">
										<img src={IconoModoOscuro} /></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="SeccionHeaderFija" id="SeccionHeaderFija">
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
					{/* <form className="FormaBuscador" action="/action_page.php"> */}
					<form className='FormaBuscador' onSubmit={handleSubmit}>

						<div className="SeccionInputBuscador">
							<img className="IconoLupa" src={IconoLupa} />
							<input value={inputText} onChange={e => setInputText(e.target.value)} className='InputBuscador' type='text' placeholder='Ingresa un término' name='buscar' />

							{/* <input className="InputBuscador" type="text" placeholder="Ingresa un término" name="buscar" /> */}
						</div>
						<Link
							onClick={handleSubmit}
							className={'SubmitBusqueda' + (inputText ? '' : ' noPointerEvents opacity07')}
						>
							BUSCAR
						</Link>
						{/* <input className="SubmitBusqueda" type="submit" value="BUSCAR" /> */}
						{/* </div> */}
					</form>
				</div>
				<div id="MedidaAlturaBarraFija">

				</div>
				<div className="ContenidoPagina" id="ContenidoPagina">
					<div className="ColumnaIzquierda">
						<p>Bienvenido a Explore el Diccionario Jurídico Minero-Energético.</p>
						<br />
						<p>Escribe una palabra en la caja de texto en la parte superior de la página para encontrar su deﬁnición.</p>
						<div className="SeccionPalabraDelDiaAtajo">
							<div className="SeparadorSeccionPrincipal">

							</div>
							<h2>Palabra del día</h2>
							<div className="SeparadorSecciones">

							</div>
							<div className="SeccionPalabraDia">
								<div className="PalabraDia">Regalías - <i>Ver definición</i>
								</div>
								<img className="IconoAgregarFavorito" src={IconoAgregarFavorito} />
							</div>
						</div>
						<div className="SeparadorSeccionPrincipal">

						</div>
						<h2>Búsquedas Recientes</h2>
						<div className="SeparadorSecciones">

						</div>
						<div className="SeccionBusquedasRecientes">
							<a href="Results.html">
								<div className="ElementoBusquedaReciente">
									<div className="TextoBusquedaReciente">Regalías</div>
									<div className="IconobusquedaReciente">
										<img className="IconoAbrir" src={IconoAbrir} />
									</div>
								</div>
							</a>
							<hr />
							<div className="ElementoBusquedaReciente">
								<div className="TextoBusquedaReciente">Regalías</div>
								<div className="IconobusquedaReciente">
									<img className="IconoAbrir" src={IconoAbrir} />
								</div>
							</div>
							<hr />
							<div className="ElementoBusquedaReciente">
								<div className="TextoBusquedaReciente">Regalías</div>
								<div className="IconobusquedaReciente">
									<img className="IconoAbrir" src={IconoAbrir} />
								</div>
							</div>
						</div>
						<div className="SeccionTodosLosTerminos">
							<div className="SeparadorSeccionPrincipal">

							</div>
							<h2>De la A a la Z</h2>
							<div className="SeparadorSecciones">

							</div>
							<p>Encuentra todos los términos disponibles en nuestro Diccionario Jurídico Minero-Energético ordenados de la A a la Z haciendo clic en el siguiente botón. Explora nuestros recursos completos ahora mismo.</p>
							<div className="SeparadorSecciones">

							</div>
							<Link to="/terms" className="DiccionarioCompleto">
								<img className="IconoDiccionarioCompleto" src={IconoTerminosReal} />
								<span>CONSULTA TODOS LOS TÉRMINOS</span>
							</Link>
							{/* <div className="DiccionarioCompleto">
								<img className="IconoDiccionarioCompleto" src={IconoTerminosReal} /> 
								<span>CONSULTA TODOS LOS TÉRMINOS</span> 
							</div> */}
						</div>
					</div>
					<div className="ColumnaDerechaDesaparece">
						<div className="SeccionPalabraDelDiaWidget">
							<h2>Palabra del día</h2>
							<div className="SeparadorSecciones">

							</div>
							<div className="ContenidoPalabradelDia">
								
							</div>
						</div>
					</div>
					<div id="AlturaAtajosAsignada">

					</div>
				</div>
				<div className="SeccionAtajos" id="AlturaMenuAtajos">
					<a href="Home.html">
						<div className="ElementoAtajo">
							<img className="IconoAtajos IconoAtajoActivo" src={IcoInicio} />
							<br />
							Inicio
						</div>
					</a>
					<a href="Favorites.html">
						<div className="ElementoAtajo">
							<img className="IconoAtajos" src={IconoFavoritos} />
							<br />
							Favoritos
						</div>
					</a>
					<a href="History.html">
						<div className="ElementoAtajo">
							<img className="IconoAtajos" src={IcoCronologia} />
							<br />
							Cronología
						</div>
					</a>
				</div>
			</div>
		</>
	)
};

export default Home;
