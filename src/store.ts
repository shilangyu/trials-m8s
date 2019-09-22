import { observable } from 'mobx'

class Store {
	@observable searchTerm = ''
}

export const store = new Store()
