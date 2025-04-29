<script>
	import { fade } from 'svelte/transition'

	export let message
	export let type = ''
</script>

<div
	class="alert {type}"
	aria-live="assertive"
	role="alertdialog"
	tabindex="-1"
	in:fade|global="{{ duration: 100 }}"
	out:fade|global="{{ duration: 250 }}"
	>
	<button
		class="button button-clear close"
		aria-label="Close Alert"
		on:click
		tabindex="0"
			>&times;</button>
	<slot>{message}</slot>
</div>
