var currentStars = yelpData[0];
var currentReviews = yelpData[1];
var currentName;
var currentURL = yelpData[3];
var chartData = {
	'type':'bar',
	'title':{
		'text': currentName,
		'z-index':'1000',
		'margin-top':'20px',
		'padding':'45 45',
	},
	'plot':{
		'animation':{
			'effect':'4',
			'method':'0',
			'sequence':'0',
			'speed':'5'
		},
		'tooltip':{
			'text': '%v %t'
		}
	},
	'plotarea':{

	},
	'labels':[
       {
			'id':'label1',
			'text':'Visit Yelp Page',
			'x':400,
			'y':50,
			'background-color':'red',
			'color':'white',
			'padding':5,
			'url':currentURL,
			'target':'_blank'
       }
    ],
	'legend':{
		'layout':'1x2',
		'align':'center',
		'vertical-align':'top',
		'item':{
			'font-size':'18',
		}
	},
	'scale-x':{
    	'labels':['Results'],
    	'item':{
    		'font-color':'Black',
    		'font-size':'16'
    	}
    },
	'series' : [
		{
			'values':[currentStars],
			'text':'Rating',
			'scales':'scale-x, scale-y',
			'legend-marker':{
				'background-image':'images/rating.png',
				'background-fit':'xy',
				'size':'16px',
				'background-color':'none'
			},
			'legend-item':{
				'color':'Dodgerblue'
			}
		},
		{
			'values':[currentReviews],
			'text':'Reviews',
			'scales':'scale-x, scale-y-2',
			'legend-marker':{
				'background-image':'images/reviews.svg',
				'background-fit':'xy',
				'size':'16px',
				'background-color':'none'
			},
			'legend-item':{
				'color':'Red'
			}
		}
	],
	'scale-y': {
		'values':'0:5:1',
		'line-color':'Dodgerblue',
		'line-width':'3',
		'item':{
    		'font-color':'DarkBlue',
    		'font-size':'16'
    	}

	},
	'scale-y-2':{
		'values':'0:1000:100',
		'line-color':'Red',
		'line-width':'3',
		'item':{
    		'font-color':'DarkRed',
    		'font-size':'14'
    	}
	}
};
zingchart.render({
	id: 'chartDiv',
	data: chartData,
	height: 400,
	width: 500,
});
function renderChart() {
	currentStars = yelpData[0];
	currentReviews = yelpData[1];
	currentName = yelpData[2];
	currentURL = yelpData[3];
	zingchart.exec('chartDiv', 'setseriesvalues', {
	    values : [
	        [currentStars],
	        [currentReviews]
	    ]
	});
	zingchart.exec('chartDiv', 'modify', {
	    graphid : 0,
	    object : 'title',
	    data : {
	        text : currentName
	    }
	});
	zingchart.exec('chartDiv', 'updateobject', {
	    'type' : 'label',
	    'data' : {
	        'id' : 'label1',
	        'url' : currentURL
	    }
	});
};