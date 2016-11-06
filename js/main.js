$(document).ready(function(){

	// $('.theForm').on('submit', function(){
		var email = $('.theEmail').val();
	
		console.log('Email: ', email);
		$.getJSON('http://roaster3000.herokuapp.com/roast?email=jody.chambers@hootsuite.com')
		  .done(function(data) {
		    console.log('success')
		    console.log(data);

		    





		  }).fail(function(jqXHR, status, err) {
		    console.error('fuck')
		  });
	// })
 });

