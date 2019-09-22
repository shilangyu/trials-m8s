import { FunctionComponent, h } from 'preact'

interface Props {
	filter: string
	headers: string[]
	rows: string[][]
}

const Table: FunctionComponent<Props> = ({ headers, rows, filter }) => (
	<table className="striped highlight centered">
		<thead>
			<tr>
				{headers.map(text => (
					<th>{text}</th>
				))}
			</tr>
		</thead>
		<tbody>
			{rows[0].length > 0 &&
				rows
					.filter(row => row[2].toLowerCase().includes(filter.toLowerCase()))
					.map(row => (
						<tr>
							{row.map(column => (
								<td>{column}</td>
							))}
						</tr>
					))}
		</tbody>
	</table>
)

export default Table
