export async function load() {
	const data = {minerals: []}

	const response = await fetch("http://ninhursag.localdomain:5000/api/v1/minerals")
	if (!response.ok) throw Error('Bad response!')

	const minerals = await response.json()

	for (const mineral in minerals) {
		const url = minerals[mineral]

		data.minerals.push({name: mineral, url})
	}

	return data
}
