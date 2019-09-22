import { FunctionComponent, h } from 'preact'

interface Props {
	filter: string
	headers: string[]
	rows: string[][]
}

const Table: FunctionComponent<Props> = ({ headers, rows, filter }) => (
	<table>
		<thead>
			<tr>
				{headers.map(text => (
					<td>{text}</td>
				))}
			</tr>
		</thead>
		<tbody>
			{rows
				.filter(row => row[2].includes(filter))
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
