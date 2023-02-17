<script>
	import { extent } from 'd3-array'
	import { line as svgLine } from 'd3-shape'
	import { scaleLinear, scaleLog } from 'd3-scale'
	import {
		chain,
		keys,
		max,
		omit,
		reduce,
		values
	} from 'ramda'

	import GridLabels from '$component/GridLabels.svelte'
	import GridLines from '$component/GridLines.svelte'
	// import HoverTool from '$component/HoverTool.svelte'
	import Legend from '$component/Legend.svelte'
	import LineSeries from '$component/LineSeries.svelte'
	import { scale } from '$store/scale'
	import { showAll } from '$store/showAll'
	import { fixNaNs } from '$lib/charting'

	export let data

	// SVG attributes
	export let width = 960
	export let height = 660
	export let preserveAspectRatio = 'xMidYMin meet'
	export let viewBox = `0 -20 ${width} ${height + 40}`

	$: yMin = ($scale === 'log' ? 1 : 0)
	$: yMaxExclude = (
		$scale === 'log' || $showAll === 'yes'
			? ['Year', 'Reserves fit']
			: [
				'Year',
				'Reserves',
				'Cumulative',
				'Cumulative fit',
				'Reserves fit',
			])
	$: selectedSeries = omit(yMaxExclude, data.columns)
	$: yMax = reduce(max, yMin, chain(values, values(selectedSeries)))
	$: x = scaleLinear()
		.range([0, width])
		.domain(extent(chain(keys, values(selectedSeries))))

	$: y = ($scale === 'log' ? scaleLog() : scaleLinear())
		.range([height, 0])
		.domain([yMin, yMax])

	$: line = (data, column) => {
		const path = svgLine()
			.x(d => x(parseInt(d[0])))
			.y(d => y(parseFloat(d[1])))
		return fixNaNs(path(data))
	}
</script>

<svg {width} {height} {preserveAspectRatio} {viewBox}>
	<GridLines {width} {height} {x} {y} />
	<LineSeries {data} {line} />
	<GridLabels {height} {x} {y} />
	<Legend series={keys(data.columns)} />
	<!-- <HoverTool {width} {height} {x} {y} /> -->
</svg>
