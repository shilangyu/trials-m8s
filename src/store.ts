import { observable } from 'mobx'

class Store {
	@observable searchTerm = ''
	@observable searchContext: keyof ISubmission = 'riderName'
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
