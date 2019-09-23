import { observer } from 'mobx-preact'
import { FunctionComponent, h } from 'preact'
import { store, Title } from '../store'

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

const Table: FunctionComponent = observer(() => {
	const submissions = store.submissions.filter(sub =>
		Object.entries(sub).every(([key, val]) => (validate as any)[key](val))
	)

	const okColumns = Object.keys(Title).reduce((prev, curr, i) => {
		;(store.showColumns as any)[curr] && prev.push(i)
		return prev
	}, [])

	return (
		<table className="striped highlight centered">
			<thead>
				<tr>
					{Object.entries(Title)
						.filter((_, i) => okColumns.includes(i))
						.map(([_, title]) => (
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
							{Object.values(sub)
								.filter((_, i) => okColumns.includes(i))
								.map(val => (
									<td>{val}</td>
								))}
						</tr>
					))}
			</tbody>
		</table>
	)
})

export default Table
