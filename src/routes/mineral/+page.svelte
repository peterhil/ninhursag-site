<script lang="ts">
	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	import Carbon from 'carbon-icons-svelte/lib/Carbon.svelte'
	import FunctionMath from 'carbon-icons-svelte/lib/FunctionMath.svelte'
	import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte'
	import heavyMetalOutline from '@iconify/icons-icon-park/heavy-metal'

	import MineralList from '$component/MineralList.svelte'

	type OutputProps = PageData & MineralsOutput

	addIcon('mineral', heavyMetalOutline)

	export let data: OutputProps
</script>

<main>
	<div>
		<button type="button" class="button-action">
			<Icon icon="mineral" width={32} />
		</button>
		<button type="button" class="button-action">
			<Carbon size={32} />
		</button>
		<button type="button" class="button-action">
			<FunctionMath size={32} />
		</button>
	</div>
	<MineralList data={data.minerals} />
</main>
