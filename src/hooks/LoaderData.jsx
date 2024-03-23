const loadUsers = ({ loadingUsrs, setLoadingUsrs, setUsers }) => {
	if (loadingUsrs === 'ok') return;
	fetchData({ setLoadinng: setLoadingUsrs, path: '/users' }).then((d) => setUsers(d))
		.catch((err) => {
			console.log(err);
		});
};

const loadTerms = ({ loadingTerms, setLoadingTerms, setTerms }) => {
	if (loadingTerms === 'ok') return;
	fetchData({ setLoadinng: setLoadingTerms, path: '/terms' }).then((d) => setTerms(d))
		.catch((err) => {
			console.log(err);
		});
};

const loadTerm = ({ loadingTerm, setLoadingTerm, setTerm, id }) => {
	if (loadingTerm === 'ok') return;
	fetchData({ setLoadinng: setLoadingTerm, path: `/terms/${id}` }).then((d) => setTerm(d))
		.catch((err) => {
			console.log(err);
		});
};

const fetchData = ({ setLoadinng, path }) => {
	return new Promise((resolve, reject) => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${window.localStorage.token}`);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		setLoadinng('loading');
		const uri = import.meta.env.VITE_API_URI;
		fetch(`${uri}${path}`, requestOptions)
			.then(res => {
				if (res.ok) return res.json();
				throw res;
			})
			.then(data => {
				setLoadinng('ok');
				resolve(data);
			})
			.catch(async err => {
				const text = await err.text();
				console.log('[GET txt]: ', text);
				console.log('[GET err]: ', err);
				setLoadinng(processError(err));
				reject(processError(err));
			});
	});
};

const processError = (err) => {
	if (err.status === 401) {
		window.localStorage.clear();
		window.location.href = '/login';
	}
	err = err.statusText && err.status === 404 ? 'No existe el elemento' : 'Ha ocurrido un error, por favor intenta nuevamente.';
	return err;
};

export { loadUsers, loadTerms, loadTerm };
