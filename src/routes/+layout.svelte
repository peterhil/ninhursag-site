<script>
	import '../app.scss';
	import '../app.postcss';

	import Navbar from '$component/Navbar.svelte'
	import Alerts from '$component/Alerts.svelte'
</script>

<svelte:head>
	<title>Ninhursag</title>
</svelte:head>

<Alerts />
<Navbar />
<slot />
