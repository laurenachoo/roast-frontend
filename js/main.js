$(document).ready(function(){
	$.ajax({
	    url: 'https://roaster3000.herokuapp.com/roast?email=jody.chambers@hootsuite.com',
	    dataType: 'application/json',
	    success: function(response){ 
	      console.log(response);
	      $('.fart').(response);
	  	}
  	});
 });