import { FunctionComponent, h } from 'preact'
import { useState } from 'preact/hooks'

interface Props {
	headers: string[]
	rows: string[][]
}

const Table: FunctionComponent<Props> = ({ headers, rows }) => {
	const [filter, setFilter] = useState('')

	return (
		<table>
			<thead>
				<tr>
					{headers.map(text => (
						<td>{text}</td>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map(row => (
					<tr>
						{row.map(column => (
							<td>{column}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
