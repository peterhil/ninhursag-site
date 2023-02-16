<script lang="ts">
	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	type OutputProps = PageData & MineralsOutput

	import Minerals from '$lib/Minerals.svelte'

	export let data: OutputProps
</script>

<Minerals data={data.minerals} />
