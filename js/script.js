let engine = {
	init: function() {
		this.yelpAPI();
	},
	yelpAPI: function(){
		function nonce_generate() {
  			return (Math.floor(Math.random() * 1e12).toString());
		}
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
	      term: 'manna+bbq',
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
	    	console.log(results);
	    	var yelpID = results.businesses[0].id;
	    	var yelpImage = results.businesses[0].image_url;
	    	var yelpSnippet = results.businesses[0].snippet_text;
	    	var yelpURL = results.businesses[0].url;
	    	let script = document.createElement('script');
	    	script.src = 'js/chart.js';
	    	document.getElementsByTagName('body')[0].appendChild(script);		    	
	    }).fail(function(){
	    	new Error();
	    	console.log('we failed to get results')
	    });
	}
}
engine.init();
