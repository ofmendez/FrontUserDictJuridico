import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuContext } from '@src/context/MenuContext.jsx';

const MenuItem = (props) => {
	const { switchMenu } = useContext(MenuContext);

	return (
		<li>
			<NavLink to={props.to} className='ContenedorItemMenuLateral' onClick={switchMenu(false)}>
				<img className='IconosMenuLateral' src={props.icon} />
				{props.text}
			</NavLink>
		</li>
	);
};

export default MenuItem;
