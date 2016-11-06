$(document).ready(function(){
	console.log("fart");
	$.ajax({
	    url: 'https://roaster3000.herokuapp.com/roast?email=jody.chambers@hootsuite.com',
	    dataType: 'application/json',
	    head : ok,
	    success: function(response){ 
	      console.log(response);
	      $('.fart').text(response);
	  	},
	  	error: function(error){
	  		console.log(error);
	  		$('.fart').text(response.responseText);
	  	}
  	});
 });