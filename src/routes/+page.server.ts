import type { PageServerLoad } from './$types'
import type {
	Indexable,
	MineralsOutput,
} from '$lib/types'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await fetch("http://ninhursag.localdomain:5000/api/v1/minerals")
	if (!response.ok) throw Error('Bad response!')

	const json = await response.json()

	const minerals = Object
		.entries(json)
		.map((pair) => {
			return {
				name: pair[0],
				value: pair[1],
			}
		})

	return {
		minerals
	}
}
