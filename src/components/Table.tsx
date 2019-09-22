import { FunctionComponent, h } from 'preact'
import { outline } from '../styles/basic'

interface Props {
	filter: string
	headers: string[]
	rows: string[][]
}

const Table: FunctionComponent<Props> = ({ headers, rows, filter }) => (
	<table style={outline}>
		<thead>
			<tr>
				{headers.map(text => (
					<td style={outline}>{text}</td>
				))}
			</tr>
		</thead>
		<tbody>
			{rows
				.filter(row => row[2].includes(filter))
				.map(row => (
					<tr>
						{row.map(column => (
							<td style={outline}>{column}</td>
						))}
					</tr>
				))}
		</tbody>
	</table>
)

export default Table
