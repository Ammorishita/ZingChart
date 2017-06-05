let chartData = {
	type: 'bar',
	title: {
		text: "Yelp Restaurant Comparisons"
	},
	plot: {
		'animation': {
			'effect': '4',
			'method': '0',
			'sequence': '0',
			'speed': '5'
		}
	},
	legend: {},
	series: [
		{
			values: [1,5,10,50,51],
			'styles': ['red','blue','orange','yellow','purple']
		},
		{
			values: [2,3,4,5]
		}
	],
};
zingchart.render({
	id: 'chartDiv',
	data: chartData,
	height: 400,
	width: 500
});