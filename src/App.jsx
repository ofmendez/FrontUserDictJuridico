import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Terms, Users, NoPage, Home, ViewTerm, Search } from '@src/pages/PagesImport.jsx';

import '@styles/main-styles.css';

function App() {
	const tempToken = import.meta.env.VITE_TOKEN;
	console.log('tempToken:', import.meta.env.VITE_TOKEN);
	window.localStorage.setItem('token', tempToken);

	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
				<Route path='terms' element={<Outlet />}>
					<Route index element={<Terms />} />
					<Route path='search' element={<Search />} />
					<Route path=':id' element={<ViewTerm />} />
				</Route>
				<Route path='users' element={<Users />} />
				<Route path='*' element={<NoPage />} />
			</Routes>
		</Router>
	);
}

export default App
