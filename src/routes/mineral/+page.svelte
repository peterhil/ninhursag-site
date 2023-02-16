<script lang="ts">
	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	type OutputProps = PageData & MineralsOutput

	import Minerals from '$lib/Minerals.svelte'

	export let data: OutputProps
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Minerals data={data.minerals} />
