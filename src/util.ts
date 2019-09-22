export const CSVToArray = (data: string) => {
	const strDelimiter = ','

	const objPattern = new RegExp(
		`(\\${strDelimiter}|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\${strDelimiter}\\r\\n]*))`,
		'gi'
	)

	const arrData: string[][] = [[]]

	let arrMatches = null

	while ((arrMatches = objPattern.exec(data))) {
		const strMatchedDelimiter = arrMatches[1]

		if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
			arrData.push([])
		}

		let strMatchedValue: string

		if (arrMatches[2]) {
			strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"')
		} else {
			strMatchedValue = arrMatches[3]
		}

		arrData[arrData.length - 1].push(strMatchedValue)
	}

	return arrData
}

export const arrayToSubmissions: (arr: string[][]) => ISubmission[] = arr => {
	const submissions: ISubmission[] = []

	for (let [
		timestamp,
		platform,
		riderName,
		riderLevel,
		contactInfo,
		extraInfo
	] of arr) {
		submissions.push({
			timestamp: Number((new Date(timestamp).getTime() / 1000).toFixed(0)),
			platform: platform as Platform,
			riderName,
			riderLevel: Number(riderLevel),
			contactInfo,
			extraInfo
		})
	}

	return submissions
}
