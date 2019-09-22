import { FunctionComponent, h } from 'preact'
import { arrayToSubmissions } from '../util'

interface Props {
	filter: string
	headers: string[]
	rows: string[][]
}

const Table: FunctionComponent<Props> = ({ headers, rows, filter }) => {
	const submissions = arrayToSubmissions(rows)

	return (
	<table className="striped highlight centered">
		<thead>
			<tr>
				{headers.map(text => (
					<th>{text}</th>
				))}
			</tr>
		</thead>
		<tbody>
				{submissions
					.filter(sub =>
						sub.riderName.toLowerCase().includes(filter.toLowerCase())
					)
					.map(sub => (
						<tr>
							{Object.values(sub).map(val => (
								<td>{val}</td>
							))}
						</tr>
					))}
		</tbody>
	</table>
)
}

export default Table
