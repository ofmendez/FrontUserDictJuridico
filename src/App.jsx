import { useEffect, useState } from 'react'
import { Iframe } from 'react-iframe';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		// Logic for token check and sending 'requestToken' message
		const token = localStorage.getItem('token');
		if (!token) {
			console.log('SENDING MESSAGE---->');
			window.parent.postMessage('requestToken', 'https://diccionarioexplore.com');
		}

		// Listener for receiving tihe token
		const listener = (event) => {
			console.log('MESSAGE ARRIVE 2 : ', event);
			console.log('data.authtoken : ', event.data.authToken);
			if (event.origin === 'https://diccionarioexplore.com' && event.data.authToken) {
				localStorage.setItem('token', event.data.authToken);
				console.log('TOKEN RECEIVED : ', event.data.authToken);
				// Proceed with actions when logged in 
			}
		};
		window.addEventListener('message', listener);

		// Cleanup function (important to prevent memory leaks!)
		return () => {
			window.removeEventListener('message', listener);
		}
	}, []); // Empty dependency array: Execute the effect only once on mount


	return (
		<>
			<Iframe
				url="https://diccionarioexplore.com"
				width="0"
				height="0"
				style={
					{
						position: 'absolute',
						top: 0,
						left: 0,
						width: 0,
						height: 0,
						border: 'none',
						visibility: 'hidden'
					}}
			/>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Diccionario</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
