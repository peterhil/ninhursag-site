<script lang="ts">
	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	type OutputProps = PageData & MineralsOutput

	import MineralList from '$component/MineralList.svelte'

	export let data: OutputProps
</script>

<MineralList data={data.minerals} />
