import { observable } from 'mobx'

class Store {
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
