import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Terms, Users, NoPage, Home, ViewTerm, Search, Login } from '@src/pages/PagesImport.jsx';

import '@styles/main-styles.css';
import PrivateRoute from '@src/context/PrivateRoute';
import { AuthProvider } from '@src/context/AuthProvider';

function App() {

	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='' element={<PrivateRoute />}>
						<Route index element={<Home />} />
						<Route path='terms' element={<Outlet />}>
							<Route index element={<Terms />} />
							<Route path='search' element={<Search />} />
							<Route path=':id' element={<ViewTerm />} />
						</Route>
						<Route path='users' element={<Users />} />
						<Route path='*' element={<NoPage />} />
					</Route>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App
