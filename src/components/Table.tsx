import { observer } from 'mobx-preact'
import { FunctionComponent, h } from 'preact'
import { store, Title } from '../store'
import { arrayToSubmissions } from '../util'

interface Props {
	rows: string[][]
}

const validate: {
	[key in keyof ISubmission]: (val: ISubmission[key]) => boolean
} = {
	timestamp: () => true,
	platform: val => val === 'Android' || val === 'iOS',
	riderName: val => /^\S+$/.test(val),
	riderLevel: val => val > 0 && val <= 75,
	contactInfo: () => true,
	extraInfo: () => true
}

const Table: FunctionComponent<Props> = observer(({ rows }) => {
	const submissions = arrayToSubmissions(rows).filter(sub =>
		Object.entries(sub).every(([key, val]) => (validate as any)[key](val))
	)

	return (
		<table className="striped highlight centered">
			<thead>
				<tr>
					{Object.entries(Title).map(([_, title]) => (
						<th>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{submissions
					.filter(sub =>
						String(sub[store.searchContext])
							.toLowerCase()
							.includes(store.searchTerm.toLowerCase())
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
})

export default Table
