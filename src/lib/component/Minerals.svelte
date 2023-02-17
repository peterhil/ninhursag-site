<script>
	import DataLoader from '$component/DataLoader.svelte'
	import References from '$component/References.svelte'
	import SvgChart from '$component/SvgChart.svelte'
	import Images from '$component/Images.svelte'
	import CheckboxShowAll from '$component/CheckboxShowAll.svelte'
	import LogScaleCheckbox from '$component/LogScaleCheckbox.svelte'
	import SelectFunction from '$component/SelectFunction.svelte'
	import SelectMineral from '$component/SelectMineral.svelte'
	import { chart } from '$store/chart'
	import { fn } from '$store/function'
	import { scale } from '$store/scale'
	import { showAll } from '$store/showAll'
	import { mineral } from '$store/mineral'

	const caption = 'U.S. Geological Survey statistics (Metric tons gross weight)'

	export let data
</script>

<div class="row">
	<div class="small-12 large-9 columns">
		<h2>{$mineral}</h2>

		<div class="row">
			<div class="large-4 medium-6 columns">
				<SelectMineral minerals={data.minerals} bind:selected="{$mineral}" />
			</div>
			<div class="large-4 medium-6 columns">
				<SelectFunction functions={data.functions} bind:selected="{$fn}" />
			</div>
		</div>

		<div class="row">
			<div class="large-4 medium-6 columns">
				<LogScaleCheckbox bind:scale="{$scale}" />
			</div>
			{#if $scale === 'linear' }
			<div class="large-4 medium-6 columns">
				<CheckboxShowAll bind:showAll="{$showAll}" />
			</div>
			{/if}
		</div>

		<figure>
			<figcaption>{caption}</figcaption>
			<DataLoader let:data data={chart}>
				<SvgChart {data}></SvgChart>
			</DataLoader>
		</figure>
	</div>

	<aside class="small-12 large-3 columns">
		<Images mineral={$mineral} />
		<References />
	</aside>
</div>
