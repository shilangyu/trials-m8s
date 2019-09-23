import { FunctionComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import Filters from './Filters'
import Table from './Table'

const App: FunctionComponent = () => {
	useEffect(() => M.AutoInit(), [])

	return (
		<div className="col container">
			<div className="row">
				<Filters />
			</div>
			<div className="row">
				<Table />
			</div>
		</div>
	)
}

export default App
