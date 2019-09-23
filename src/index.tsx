import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { h, render } from 'preact'
import App from './components/App'

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(registration => {
				console.log('SW registered: ', registration)
			})
			.catch(registrationError => {
				console.log('SW registration failed: ', registrationError)
			})
	})
}

render(<App />, document.getElementById('root'))
