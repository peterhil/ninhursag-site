<script>
	import { alerts } from '$store/alerts'

	export let msg = 'Welcome to Ninhursag! Nap all day cat dog corn cob.'
	export let timeout = 0

	alerts.add('info', 'Info: ' + msg, timeout)
	alerts.add('tip', 'Tip: ' + msg, timeout)
	alerts.add('success', 'Success: ' + msg, timeout)
	alerts.add('failure', 'Failure: ' + msg, timeout)
	alerts.add('warning', 'Warning: ' + msg, timeout)
	alerts.add('error', 'Error: ' + msg, timeout)
</script>
