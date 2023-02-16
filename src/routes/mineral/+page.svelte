<script lang="ts">
	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	import Carbon from 'carbon-icons-svelte/lib/Carbon.svelte'
	import FunctionMath from 'carbon-icons-svelte/lib/FunctionMath.svelte'
	import IconPark from '$component/IconPark.svelte'
	import { HeavyMetal } from '@icon-park/svg'

	import MineralList from '$component/MineralList.svelte'

	type OutputProps = PageData & MineralsOutput

	export let data: OutputProps
</script>

<main>
	<div>
		<button type="button" class="button-action">
			<IconPark icon={HeavyMetal} size="32" />
			Mineral
		</button>
		<button type="button" class="button-action">
			<Carbon size={32} />
			Element
		</button>
		<button type="button" class="button-action">
			<FunctionMath size={32} />
			Function
		</button>
	</div>
	<MineralList data={data.minerals} />
</main>
