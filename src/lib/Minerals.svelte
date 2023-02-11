<script>
	import { onMount } from 'svelte'

	let data = []

	async function getMinerals () {
		const data = []

		const response = await fetch("http://ninhursag.localdomain:5000/api/v1/minerals")
		if (!response.ok) throw Error('Bad response!')

		const minerals = await response.json()

		for (const mineral in minerals) {
			const url = minerals[mineral]

			data.push({name: mineral, url})
		}

		return data
	}

	onMount(() => {
		data = getMinerals()
	})
</script>

<code>
	{#await data}
		Loading...
	{:then minerals}
		<ul>
		{#each minerals as mineral}
			<li>{ mineral.name }</li>
		{/each}
		</ul>
	{:catch error}
		{error}
	{/await}
</code>
