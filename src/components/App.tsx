import { FunctionComponent, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { CSVToArray } from '../util'
import Filters from './Filters'
import Table from './Table'

interface Props {}

const App: FunctionComponent<Props> = () => {
	const [csv, setCsv] = useState<string[][]>([[]])

	useEffect(() => {
		M.AutoInit()

		fetch(
			'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaxfYW_hASjz5OPYRXyjaa9PMpw9yKmGsUp_QK6clbh1GUaVvsu3gVefoRhx6no22RbGA5X1wK6JzO/pub?gid=734159276&single=true&output=csv'
		)
			.then(e => e.text())
			.then(csv => setCsv(CSVToArray(csv)))
	}, [])

	return (
		<div className="col container">
			<div className="row">
				<Filters />
			</div>
			<div className="row">
				<Table headers={csv[0]} rows={csv.slice(1)} />
			</div>
		</div>
	)
}

export default App
