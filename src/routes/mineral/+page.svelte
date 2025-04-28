<script lang="ts">
	import type { PageData } from './$types'
	import type { MineralsOutput } from '$lib/types'

	// import AlertTest from '$component/AlertTest.svelte'
	// import IconButtons from '$component/IconButtons.svelte'
	import LoadingSpinner from '$component/LoadingSpinner.svelte'
	import Minerals from '$component/Minerals.svelte'

	type OutputProps = PageData & MineralsOutput

	export let data: OutputProps
</script>

<main>
	<!-- <IconButtons /> -->
	<!-- <AlertTest /> -->
	<Minerals {data}/>
</main>
