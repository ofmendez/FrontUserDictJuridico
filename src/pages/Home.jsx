import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainsSeparator from '@components/MainSeparator.jsx';
import ContentFrame from '@src/components/ContentFrame';
// eslint-disable-next-line no-unused-vars
import { IcoCronologia, IcoInicio, IcoUsuarios, IconoAbrir, IconoAgregarFavorito, IconoAtras, IconoCerrar, IconoConfiguracion, IconoFavoritos, IconoLupa, IconoMenu, IconoModoClaro, IconoModoOscuro, IconoSitioWeb, IconoTerminosReal } from '@components/icons.js';
import SeccionPalabraDelDia from '@src/components/SeccionPalabraDelDia.jsx';
import { loadRandomTerm } from '@src/hooks/LoaderData.jsx';
import { Skeletons } from '@src/components/Skeletons';

const Home = () => {
	const [inputText, setInputText] = useState('');
	const [randomTerm, setRandomTerm] = useState(null);
	const [loadingTerm, setLoadingTerm] = useState('init');
	const [searches, setSearches] = useState(loadSearches());

	function loadSearches () {
		const user = JSON.parse(window.localStorage.user);
		return user.lastSearches ? JSON.parse(user.lastSearches).reverse() : [];
	};
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`./terms/search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};
	useEffect(() => loadRandomTerm({ loadingTerm, setLoadingTerm, setRandomTerm }), []);

	return (
		<>
			<ContentFrame>
				<div className='SeccionBuscador SeccionBuscadorConBotones'>
					<form className='FormaBuscador FormaBuscadorConBotones' onSubmit={handleSubmit}>
						<div className='SeccionInputBuscador'>
							<img className='IconoLupa' src={IconoLupa} />
							<input value={inputText} onChange={e => setInputText(e.target.value)} className='InputBuscador' type='text' placeholder='Ingresa un término' name='buscar' />
						</div>
						<Link
							onClick={handleSubmit}
							className={'SubmitBusqueda' + (inputText ? '' : ' noPointerEvents opacity07')}
						>
							BUSCAR
						</Link>
					</form>
				</div>
				{/* <div className='SeccionHeaderFija ContainerHomePosition' id='SeccionHeaderFija'> */}
				<div id='MedidaAlturaBarraFija' />
				<div className='ContenidoPagina' id='ContenidoPagina'>
					<div className='ColumnaIzquierda'>
						<p>Bienvenido a Explore el Diccionario Jurídico Minero-Energético.</p>
						<br />
						<p>Escribe una palabra en la caja de texto en la parte superior de la página para encontrar su deﬁnición.</p>
						<div className='SeccionPalabraDelDiaAtajo'>
							<div className='SeparadorSeccionPrincipal' />
							<h2>Palabra del día</h2>
							<div className='SeparadorSecciones' />
							<div className='SeccionPalabraDia'>
								<div className='PalabraDia'>Regalías - <i>Ver definición</i>
								</div>
								<img className='IconoAgregarFavorito' src={IconoAgregarFavorito} />
							</div>
						</div>
						<div className='SeparadorSeccionPrincipal' />
						<h2>Búsquedas Recientes</h2>
						<div className='SeparadorSecciones' />
						<Skeletons on={loadingTerm} msg='Cargando'>
							<div className='SeccionBusquedasRecientes'>
								{searches.length > 0
									? searches.map((search, i) => (
										<a key={i} className='ElementoBusquedaReciente' href={`./terms/search?q=${search}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`}>
											<div className='TextoBusquedaReciente'>{search}</div>
											<div className='IconobusquedaReciente'><img className='IconoAbrir' src={IconoAbrir} /></div>
										</a>
									))
									: <span>No hay búsquedas recientes.</span>}
							</div>
						</Skeletons>
						<div className='SeccionTodosLosTerminos'>
							<div className='SeparadorSeccionPrincipal' />
							<h2>De la A a la Z</h2>
							<div className='SeparadorSecciones' />
							<p>Encuentra todos los términos disponibles en nuestro Diccionario Jurídico Minero-Energético ordenados de la A a la Z haciendo clic en el siguiente botón. Explora nuestros recursos completos ahora mismo.</p>
							<div className='SeparadorSecciones' />
							<Link to='/terms' className='DiccionarioCompleto'>
								<img className='IconoDiccionarioCompleto' src={IconoTerminosReal} />
								<span>CONSULTA TODOS LOS TÉRMINOS</span>
							</Link>
							<MainsSeparator />
							<MainsSeparator />
							<MainsSeparator />
							<MainsSeparator />
							<MainsSeparator />
							<MainsSeparator />
						</div>
					</div>
					<div className='ColumnaDerechaDesaparece'>
						<Skeletons on={loadingTerm} msg='Cargando'>
							<SeccionPalabraDelDia randomTerm={randomTerm} />
						</Skeletons>
					</div>
					<div id='AlturaAtajosAsignada' />
				</div>
				<div className='SeccionAtajos' id='AlturaMenuAtajos'>
					<a href='Home.html'>
						<div className='ElementoAtajo'>
							<img className='IconoAtajos IconoAtajoActivo' src={IcoInicio} />
							<br />
							Inicio
						</div>
					</a>
					<a href='Favorites.html'>
						<div className='ElementoAtajo'>
							<img className='IconoAtajos' src={IconoFavoritos} />
							<br />
							Favoritos
						</div>
					</a>
					<a href='History.html'>
						<div className='ElementoAtajo'>
							<img className='IconoAtajos' src={IcoCronologia} />
							<br />
							Cronología
						</div>
					</a>
				</div>
			</ContentFrame>
		</>
	);
};

export default Home;
