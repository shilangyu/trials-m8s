declare type UnixTimestamp = number
declare type Platform = 'Android' | 'iOS'

declare interface ISubmission {
	timestamp: UnixTimestamp
	platform: Platform
	riderName: string
	riderLevel: number
	contactInfo: string
	extraInfo: string
}

declare const M: {
	AutoInit: () => void
}
