import { observer } from 'mobx-preact'
import { FunctionComponent, h } from 'preact'
import { store, Title } from '../store'

const Filters: FunctionComponent = observer(() => {
	const headers = Object.keys(Title) as (keyof ISubmission)[]

	return (
		<div>
			<div className="row">
				<div class="input-field col s8">
					<input
						name="search"
						type="search"
						onKeyUp={({ target }) =>
							(store.searchTerm = (target as HTMLInputElement).value)
						}
						value={store.searchTerm}
					/>
					<label for="search">Search</label>
				</div>
				<div class="input-field col s4">
					<select
						onChange={({ target }) =>
							(store.searchContext = (target as HTMLSelectElement)
								.value as keyof ISubmission)
						}
					>
						{headers.map(e => (
							<option value={e} selected={e === store.searchContext}>
								{Title[e]}
							</option>
						))}
					</select>
					<label>Through</label>
				</div>
			</div>
			<div className="row">
				{headers.map(e => (
					<label class="col s4 m2">
						<input
							type="checkbox"
							checked={store.showColumns[e]}
							onChange={() => (store.showColumns[e] = !store.showColumns[e])}
						/>
						<span>{Title[e]}</span>
					</label>
				))}
			</div>
		</div>
	)
})

export default Filters
