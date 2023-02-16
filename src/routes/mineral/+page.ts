import type { PageLoad } from './$types'

export const load = (async ({ fetch }) => {
	const res = await fetch('http://ninhursag.localdomain:5000/api/v1/minerals')
	const data = await res.json()

	const minerals = Object.entries(data).map((pair) => {
		return {
			name: pair[0],
			value: pair[1],
		}
	})

	return { minerals }
}) satisfies PageLoad
