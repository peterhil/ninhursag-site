<script>
	import Alert from '$component/Alert.svelte'
	import { alerts, maxLevel } from '$store/alerts'

	var level = 'info'

	$: level = maxLevel($alerts)
</script>

<div id="alerts" class={level}>
	{#each [...$alerts.entries()] as [id, alert] (id) }
		<Alert type={alert.type} on:click={() => alerts.remove(id)}>
			{alert.message}
		</Alert>
	{/each}
</div>
