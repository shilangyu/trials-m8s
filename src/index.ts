import { table } from './templates'
import { CSVToArray } from './util'

const getSubmissions = async () => {
	const res = await fetch(
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaxfYW_hASjz5OPYRXyjaa9PMpw9yKmGsUp_QK6clbh1GUaVvsu3gVefoRhx6no22RbGA5X1wK6JzO/pub?gid=734159276&single=true&output=csv'
	)
	return CSVToArray(await res.text())
}

async function main() {
	const csv = await getSubmissions()
	document.body.innerHTML = table(csv[0], csv.slice(1))
}
main()
