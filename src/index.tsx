import { h, render } from 'preact'
import Table from './components/Table'
import { CSVToArray } from './util'

const getSubmissions = async () => {
	const res = await fetch(
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaxfYW_hASjz5OPYRXyjaa9PMpw9yKmGsUp_QK6clbh1GUaVvsu3gVefoRhx6no22RbGA5X1wK6JzO/pub?gid=734159276&single=true&output=csv'
	)
	return CSVToArray(await res.text())
}

async function main() {
	const csv = await getSubmissions()

	render(
		<Table headers={csv[0]} rows={csv.splice(1)} />,
		document.getElementById('root')
	)

	document
		.querySelector('input[type=search]')
		.addEventListener('keyup', ({ target }) => {
			const { value } = target as HTMLInputElement

			// render(
			// 	document.getElementById('root'),
			// 	table(csv[0], csv.slice(1).filter(e => e[2].includes(value)))
			// )
		})
}
main()
