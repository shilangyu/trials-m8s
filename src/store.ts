import { observable } from 'mobx'

class Store {
	@observable searchTerm = ''
	@observable searchContext: keyof ISubmission = 'riderName'
}

export const store = new Store()
