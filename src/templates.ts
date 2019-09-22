import escapeHTML from 'escape-html'

export const embed = (
	strings: TemplateStringsArray,
	...data: (string[] | string)[]
) => {
	let cumm = ''
	let safe: boolean

	for (let i = 0; i < strings.length + data.length; i++) {
		const staticString = !(i % 2)
		let curr = staticString ? strings[i / 2] : data[(i - 1) / 2]

		if (Array.isArray(curr))
			cumm += safe ? curr.join(' ') : escapeHTML(curr.join(' '))
		else cumm += staticString ? curr.replace(/\/$/, '') : escapeHTML(curr)

		safe = staticString ? (curr as string).endsWith('/') : false
	}

	return cumm
}

export const htmlToElement = (html: string) => {
	const ele = document.createElement('div')
	ele.innerHTML = html
	return ele
}

export const render = (where: HTMLElement, what: HTMLElement) =>
	where.appendChild(what)

export const table = (headers: string[], rows: string[][]) =>
	htmlToElement(embed`
	<table>
		<thead>
    	<tr>
      	/${headers.map(text => embed`<td>${text}</td>`)}
    	</tr>
  	</thead>
		<tbody>
			/${rows.map(
				row => embed`
				<tr>
					/${row.map(column => embed`<td>${column}</td>`)}
				</tr>
			`
			)}
  	</tbody>
	</table>
`)
