declare type UnixTimestamp = number
declare type Platform = 'android' | 'iOS'

declare interface ISubmission {
	timestamp: UnixTimestamp
	platform: Platform
	riderName: string
	riderLevel: number
	contactInfo: string
	extraInfo: string
}
