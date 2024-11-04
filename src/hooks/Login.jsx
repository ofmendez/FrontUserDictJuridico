const tryLogin = ({ loadingFetch, setLoadingFetch, query, handleDoneFetch }) => {
	if (loadingFetch === 'ok') return;
	fetchLogin({ setLoadinng: setLoadingFetch, path: '/login', query }).then((d) => {
		handleDoneFetch(d);
		console.log('done fetch: ', d);
	})
		.catch((err) => {
			console.log('the error: ', err);
			window.alert(err);
		});
};

const fetchLogin = ({ setLoadinng, path, query }) => {
	return new Promise((resolve, reject) => {
		setLoadinng('loading');
		const uri = import.meta.env.VITE_API_URI;
		fetch(`${uri}${path}?${new URLSearchParams(query)}`).then(async res => {
			if (res.ok) return res.json();
			const text = await res.text();
			console.log('the text:', text);
			const error = new Error();
			error.data = res;
			throw error;
		}).then(data => {
			console.log('the data', data);
			setLoadinng('ok');
			resolve(data);
		}).catch(err => {
			setLoadinng('error');
			console.log(err);
			const msg = err.data &&
				err.data.status === 401
				? ' Usuario o contraseña incorrectos.'
				: err.data.status === 410
					? ' La suscripción ha expirado.'
					: ' Ha ocurrido un error, por favor intenta nuevamente.';
			reject(new Error(msg));
		});
	});
};

export { tryLogin };
