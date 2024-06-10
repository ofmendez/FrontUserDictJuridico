// import BarraSuperiorMovil from '@components/BarraSuperiorMovil.jsx';
import Menu from '@components/Menu.jsx';
import { useEffect } from 'react';
import { IconoMenu, IconoModoClaro, IconoModoOscuro, IconoAtras, IconoCerrar } from '@components/icons.js';
import { LogoPositivo } from '@src/components/img';

const ContentFrame = ({ children }) => {
	function abrirMenuLateral () {
		document.getElementById('MenuLateral')?.classList.add('slide-in');
		document.getElementById('MenuLateral')?.classList.remove('slide-out');
		document.getElementById('OverlayMenu')?.classList.add('overlay-in');
		document.getElementById('OverlayMenu')?.classList.remove('overlay-out');
		document.getElementById('MenuConfiguracion')?.classList.add('slide-down');
		document.getElementById('MenuConfiguracion')?.classList.remove('slide-up');
	}
	function cerrarMenuLateral () {
		document.getElementById('MenuLateral').classList.add('slide-out');
		document.getElementById('MenuLateral').classList.remove('slide-in');
		document.getElementById('OverlayMenu').classList.add('overlay-out');
		document.getElementById('OverlayMenu').classList.remove('overlay-in');
		document.getElementById('MenuConfiguracion').classList.add('slide-down');
		document.getElementById('MenuConfiguracion').classList.remove('slide-up');
		document.getElementById('ContenedorMenuConfiguracion').classList.add('z-index-down');
		document.getElementById('ContenedorMenuConfiguracion').classList.remove('z-index-up');
	}
	function definirMedidasBarras () {
		const AlturaBarraFija = document.getElementById('SeccionHeaderFija').clientHeight;
		document.getElementById('MedidaAlturaBarraFija').style.height = AlturaBarraFija + 'px';
		// Definición altura atajos
		const AlturaAtajos = document.getElementById('AlturaMenuAtajos').clientHeight;
		document.getElementById('AlturaAtajosAsignada').style.height = AlturaAtajos + 'px';
	}
	function decrecerTamañoFuente () {
		const getTamanoH2 = window.getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteTitulosH2').replace('px', '');
		let getTamanoFuente = window.getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteParrafos').replace('px', '');
		const getTamanoPadding = window.getComputedStyle(document.documentElement).getPropertyValue('--PaddingElementos').replace('%', '');
		if (getTamanoFuente <= 11)
			getTamanoFuente = 11;
		else {
			document.documentElement.style.setProperty('--TamanoFuenteTitulosH2', Number(getTamanoH2) - 1 + 'px');
			document.documentElement.style.setProperty('--TamanoFuenteParrafos', Number(getTamanoFuente) - 1 + 'px');
			document.documentElement.style.setProperty('--PaddingElementos', Number(getTamanoPadding) - 0.1 + '%');
			definirMedidasBarras();
		}
	}

	function incrementarTamañoFuente () {
		const getTamanoH2 = window.getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteTitulosH2').replace('px', '');
		let getTamanoFuente = window.getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteParrafos').replace('px', '');
		const getTamanoPadding = window.getComputedStyle(document.documentElement).getPropertyValue('--PaddingElementos').replace('%', '');
		if (getTamanoFuente >= 18)
			getTamanoFuente = 18;
		else {
			document.documentElement.style.setProperty('--TamanoFuenteTitulosH2', Number(getTamanoH2) + 1 + 'px');
			document.documentElement.style.setProperty('--TamanoFuenteParrafos', Number(getTamanoFuente) + 1 + 'px');
			document.documentElement.style.setProperty('--PaddingElementos', Number(getTamanoPadding) + 0.1 + '%');
			definirMedidasBarras();
		}
	}
	function ejecutarModoClaro () {
		document.getElementById('TablaModoClaro').classList.add('ModoActivo');
		document.getElementById('TablaModoOscuro').classList.remove('ModoActivo');
		document.documentElement.style.setProperty('--ColorFondos', '#F0F2F1');
		document.documentElement.style.setProperty('--ColorSecundario', '#ffffff');
		document.documentElement.style.setProperty('--ColorTexto', '#000000');
		document.documentElement.style.setProperty('--FiltroNegativo', 'none');
		document.documentElement.style.setProperty('--FiltroNegativoInvertido', 'invert(1)');
		document.documentElement.style.setProperty('--ColorFondosHover', '#dfdfdf');
	}

	function ejecutarModoOscuro () {
		document.getElementById('TablaModoOscuro').classList.add('ModoActivo');
		document.getElementById('TablaModoClaro').classList.remove('ModoActivo');
		document.documentElement.style.setProperty('--ColorFondos', '#282828');
		document.documentElement.style.setProperty('--ColorSecundario', '#000000');
		document.documentElement.style.setProperty('--ColorTexto', '#ffffff');
		document.documentElement.style.setProperty('--FiltroNegativo', 'invert(1)');
		document.documentElement.style.setProperty('--FiltroNegativoInvertido', 'none');
		document.documentElement.style.setProperty('--ColorFondosHover', '#141414');
	}

	useEffect(() => cerrarMenuLateral(), []);

	return (
		<>
			<Menu />
			{/* <div className='ContenidoPagina' id='ContenidoPagina'> */}
			{/* <BarraSuperiorMovil /> */}
			<div className='SeccionHeaderFija ContainerHomePosition' id='SeccionHeaderFija'>
				<div className='SeccionHeader'>
					<div className='SeccionHeaderIzquierda'>
						<a onClick={abrirMenuLateral}>
							<img className='IconoMenu' src={IconoMenu} />
						</a>
					</div>
					<div className='SeccionHeaderDerecha'>
						<a href='/'>
							<img className='LogoPrincipal' src={LogoPositivo} />
						</a>
					</div>
				</div>
				<div className='OverlayMenu' id='OverlayMenu' onClick={cerrarMenuLateral} />
				<div id='ContenedorMenuConfiguracion'>
					<div className='MenuConfiguracion' id='MenuConfiguracion'>
						<div className='SeccionAtrasTitulo'>
							<img className='IconoAtrasConfiguracion IconosConfiguracion' onClick={abrirMenuLateral} src={IconoAtras} />
							<p>Configuración</p>
							<img className='IconoCerrarConfiguracion IconosConfiguracion' onClick={cerrarMenuLateral} src={IconoCerrar} />
						</div>
						<div className='SelectoresConfiguracion'>
							<table className='TablaTamanosFuente'>
								<tbody>
									<tr>
										<td onClick={decrecerTamañoFuente} id='ConfiguracionAchicarLetra'>Aa</td>
										<td onClick={incrementarTamañoFuente} id='ConfiguracionAgrandarLetra'>Aa</td>
									</tr>
								</tbody>
							</table>
							<table className='TablaConfiguracionModo ModoActivo' onClick={ejecutarModoClaro} id='TablaModoClaro'>
								<tbody>
									<tr>
										<td id='ConfiguracionModoClaro'>
											<img src={IconoModoClaro} />
										</td>
									</tr>
								</tbody>
							</table>
							<table className='TablaConfiguracionModo' onClick={ejecutarModoOscuro} id='TablaModoOscuro'>
								<tbody>
									<tr>
										<td id='ConfiguracionModoOscuro'>
											<img src={IconoModoOscuro} />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{children}
			</div>
		</>
	);
};

export default ContentFrame;
