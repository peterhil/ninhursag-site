<script>
	import '../app.postcss';
	import '../app.scss';

	import Navbar from '$component/Navbar.svelte'
	import Notifications from '$component/Notifications.svelte'
</script>

<svelte:head>
	<title>Ninhursag</title>
</svelte:head>

<Notifications />
<Navbar />
<slot />
