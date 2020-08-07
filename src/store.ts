import { observable } from 'mobx'
import { arrayToSubmissions, CSVToArray } from './util'

class Store {
	@observable submissions: ISubmission[] =
		JSON.parse(window.localStorage.getItem('submissions')) || []

	@observable searchTerm = ''
	@observable searchContext: keyof ISubmission = 'riderName'
	@observable showColumns: { [key in keyof ISubmission]: boolean } = {
		timestamp: false,
		platform: true,
		riderName: true,
		riderLevel: true,
		contactInfo: true,
		extraInfo: false
	}

	constructor() {
		this.fetchSubmissions()
	}

	fetchSubmissions = async () => {
		const res = await fetch(
			'https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vTaxfYW_hASjz5OPYRXyjaa9PMpw9yKmGsUp_QK6clbh1GUaVvsu3gVefoRhx6no22RbGA5X1wK6JzO/pub?gid=734159276&single=true&output=csv'
		)
		const csv = await res.text()

		this.submissions = arrayToSubmissions(CSVToArray(csv).slice(1))
		window.localStorage.setItem('submissions', JSON.stringify(this.submissions))
	}
}

export enum Title {
	timestamp = 'Timestamp',
	platform = 'Platform',
	riderName = 'Rider name',
	riderLevel = 'Rider level',
	contactInfo = 'Contact info',
	extraInfo = 'Extra info'
}

export const store = new Store()
