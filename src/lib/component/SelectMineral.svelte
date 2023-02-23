<script>
	import { debounce } from 'debounce'

	const title = "Resource"

	export let minerals = []
	export let selected

	const onSelected = (event) => {
		selected = event.target.value
		console.info('Mineral:', selected)
		return false
	}

	const onSelectedDebounced = debounce(onSelected, 500)
</script>

<label for="mineral">
	<div>{title}</div>
	<select
		id="mineral"
		class="button button-action"
		{title}
		on:change={onSelectedDebounced}
		>
		{#each [...Object.keys(minerals)] as mineral}
			<option value="{mineral}" selected="{mineral === selected}">{mineral}</option>
		{/each}
	</select>
</label>
