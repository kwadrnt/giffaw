$(document).on("ready", function(){
	// ajax call for 25 trending gifs
	$.ajax({

	// What kind of request
	method: "GET",

	// The URL for the request
	url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",

	// The data to send aka query parameters
	data: $("form").serialize(),

	// Code to run if the request succeeds;
	// the response is passed to the function
	success: onSuccess,

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: onError
	
});

function onSuccess(jsonresult) {
		var i = 0;
		for(i = 0; i < 25; i++) {
		var json = jsonresult.data[i].images.fixed_height.url;
		
		$('.gif-gallery').append("<img src=" +json+ ">");
			console.log(json);
	}
}
function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
}

// ajax call for search Form Button
$('.btn').on('submit', function(e) {
	e.preventDefault();
})	
	$.ajax({

	// What kind of request
	method: "GET",

	// The URL for the request
	url: "http://api.giphy.com/v1/gifs/search",

	// The data to send aka query parameters
	data: $("form").serialize(),

	// Code to run if the request succeeds;
	// the response is passed to the function
	success: onSuccess,

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: onError
	
});

function onSuccess(jsonresult) {
		var i = 0;
		for(i = 0; i < 25; i++) {
		var json = jsonresult.data[i].images.fixed_height.url;
		$('gif-gallery').remove();
		$('.gif-gallery').append("<img src=" +json+ ">");
			console.log(jsonresult);
	}
}
function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
}


});


