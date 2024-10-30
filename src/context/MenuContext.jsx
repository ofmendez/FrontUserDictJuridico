import React, { createContext } from 'react';
import { abrirMenu, cerrarMenu }	from '@src/js/menuCtrl.js';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
	const switchMenu = (value) => () => {
		if (value)
			abrirMenu();
		else
			cerrarMenu();
	};

	return (
		<MenuContext.Provider value={{ switchMenu }}>
			{children}
		</MenuContext.Provider>
	);
};
