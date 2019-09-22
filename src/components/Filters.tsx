import { FunctionComponent, h } from 'preact'
import { store } from '../store'

interface Props {}

const Filters: FunctionComponent<Props> = () => {
	const headers: (keyof ISubmission)[] = [
		'timestamp',
		'platform',
		'riderName',
		'riderLevel',
		'contactInfo',
		'extraInfo'
	]

	return (
		<div>
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
				<select>
					{headers.map(e => (
						<option
							value={e}
							selected={e === store.searchContext}
							onClick={() => (store.searchContext = e)}
						>
							{e}
						</option>
					))}
				</select>
				<label>Through</label>
			</div>
		</div>
	)
}

export default Filters
