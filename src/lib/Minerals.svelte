<script>
	export let data
</script>

<code>
	<ul>
		{#each data as mineral}
			<li>{ mineral.name }</li>
		{/each}
	</ul>
</code>
