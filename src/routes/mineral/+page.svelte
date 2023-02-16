<script lang="ts">
	import Carbon from 'carbon-icons-svelte/lib/Carbon.svelte'
	import FunctionMath from 'carbon-icons-svelte/lib/FunctionMath.svelte'

	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	type OutputProps = PageData & MineralsOutput

	import MineralList from '$component/MineralList.svelte'

	export let data: OutputProps
</script>

<button type="button" class="button-action">
	<Carbon size={32} />
</button>
<button type="button" class="button-action">
	<FunctionMath size={32} />
</button>
<MineralList data={data.minerals} />
