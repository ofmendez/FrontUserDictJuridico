import React from 'react';

const NoPage = () => {
	return (
		// Add grid styles to center two elements together and vertical center them
		<div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
			<div style={{ fontSize: '4rem' }}>
				📝
				<h1 style={{ fontSize: '5rem' }}>404</h1>
				<p style={{ fontSize: '2rem' }}>Page not found</p>
				<a href='/' style={{ fontSize: '2rem', color: 'green' }}>	Volver</a>
			</div>
		</div>
	);
};
export default NoPage;
