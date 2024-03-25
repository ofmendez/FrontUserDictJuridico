import { createContext, useState /* Suspense, lazy */ } from 'react';

export const AuthContext = createContext({
	isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
	// eslint-disable-next-line no-undef
	const version = __APP_VERSION__;

	const [isAuthenticated, setAuthenticated] = useState(() => {
		const strgVersion = window.localStorage.version;
		const expire = window.localStorage.expire ? window.localStorage.expire < Date.now() : false;
		if (expire || strgVersion !== version)
			window.localStorage.clear();
		window.localStorage.setItem('version', version);
		return !!window.localStorage.token && !expire;
	});

	const loginCtx = () => setAuthenticated(true);
	// const Theme1 = lazy(() => import('../components/ExtraLargeStyle.jsx'));

	return (
		<AuthContext.Provider value={{ loginCtx, isAuthenticated }}>
			{/* <Suspense fallback={<></>}>
				{isAuthenticated ? <Theme1 /> : <></>}
			</Suspense> */}
			{children}
		</AuthContext.Provider>
	);
};
