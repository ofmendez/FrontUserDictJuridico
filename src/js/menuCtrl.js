// Funacionamientos Menús
export function abrirMenu () {
	document.getElementById('MenuLateral').classList.add('slide-in');
	document.getElementById('MenuLateral').classList.remove('slide-out');
	document.getElementById('OverlayMenu').classList.add('overlay-in');
	document.getElementById('OverlayMenu').classList.remove('overlay-out');
	// document.getElementById('MenuConfiguracion').classList.add('slide-down');
	// document.getElementById('MenuConfiguracion').classList.remove('slide-up');
}

export function cerrarMenu () {
	document.getElementById('MenuLateral').classList.add('slide-out');
	document.getElementById('MenuLateral').classList.remove('slide-in');
	document.getElementById('OverlayMenu').classList.add('overlay-out');
	document.getElementById('OverlayMenu').classList.remove('overlay-in');
	// document.getElementById('MenuConfiguracion').classList.add('slide-down');
	// document.getElementById('MenuConfiguracion').classList.remove('slide-up');
	// document.getElementById('ContenedorMenuConfiguracion').classList.add('z-index-down');
	// document.getElementById('ContenedorMenuConfiguracion').classList.remove('z-index-up');
}
