<script lang="ts">
	import type { MineralsData } from '$lib/types'

	export let data: MineralsData[]
</script>

<code>
	<ul>
		{#each data as mineral (mineral)}
			<li>{ mineral.name }</li>
		{/each}
	</ul>
</code>
