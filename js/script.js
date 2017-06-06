var addChart = false;
var searchTerm = ' ';
var yelpData = [];
var engine = {
	init: function() {
		this.yelpAPI();
		this.search();
	},
	search: function() {
		let button = document.getElementById('search');
		button.addEventListener('keydown', function(e) {
			if(e.keyCode === 13 ) {
				searchTerm = button.value;
				engine.yelpAPI();
			}
		});					
	},
	yelpAPI: function(){
		function nonce_generate() {
  			return (Math.floor(Math.random() * 1e12).toString());
		};
		var YELP_BASE_URL = 'https://api.yelp.com/v2/search/';
		var YELP_KEY_SECRET = 'YJgc-BtCt9ogrrDXz5ptbkFJ3mo';
		var YELP_TOKEN_SECRET = 'gK1IB6E7txoJUpH3AK7p52iF8MQ';
		var yelp_url = YELP_BASE_URL;
	    var parameters = {
	      oauth_consumer_key: 'REfQ41eJe5W6cOXEKbedIw',
	      oauth_token: 'yXeLtJ768XlAbLUoLwPJAnRqCSZv5MI_',
	      oauth_nonce: nonce_generate(),
	      oauth_timestamp: Math.floor(Date.now()/1000),
	      oauth_signature_method: 'HMAC-SHA1',
	      oauth_version : '1.0',
	      callback: 'cb', 
	      limit: 1,
	      term: searchTerm,
	      location: 'San+Diego'
	    };
    	var encodedSignature = oauthSignature.generate('GET',yelp_url, parameters, YELP_KEY_SECRET, YELP_TOKEN_SECRET);
    	parameters.oauth_signature = encodedSignature;
	    var settings = {
	      url: yelp_url,
	      data: parameters,
	      cache: true,
	      dataType: 'jsonp',
	      callback: 'cb'
	    };

	    $.ajax(settings).done(function(results){
	    	if(results.businesses.length < 1) {
	    		alert('No results found')
	    	}
	    	console.log(results)
	    	var yelpName = results.businesses[0].name;
	    	var yelpRating = results.businesses[0].rating;
	    	var yelpReviewCount = results.businesses[0].review_count;
	    	var yelpURL = results.businesses[0].url;
	    	yelpData = [];
	    	yelpData.push.apply(yelpData, [yelpRating,yelpReviewCount,yelpName,yelpURL]);
	    	renderChart();
	    	console.log(yelpData[2]);
	    	if(!addChart) {
		    	let script = document.createElement('script');
		    	script.src = 'js/chart.js';
		    	document.getElementsByTagName('body')[0].appendChild(script);		    	
				addChart = true;    		
	    	} else {
	    		return;
	    	}
	    }).fail(function(){
	    	new Error();
	    	console.log('we failed to get results')
	    });
	}
}
engine.init();
