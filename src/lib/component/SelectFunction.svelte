<script lang="ts">
	import { debounce } from 'debounce'

	import { controller } from '$store/estimate'

	export let functions
	export let selected

	const onSelected = (event) => {
		selected = event.target.value
		console.info('Function:', selected)

		if (controller) {
			controller.abort() // Cancel previous request
		}

		return false
	}

	const onSelectedDebounced = debounce(onSelected, 500)
</script>

<label for="function">Select function
	<select id="function" on:change={onSelectedDebounced}>
		{#each functions.pdf as fn}
		<option value="{fn}" selected="{fn === selected}">{fn}</option>
		{/each}
	</select>
</label>
