$(document).ready(function(){
	$.ajax({
	    url: 'https://roaster3000.herokuapp.com/roast?email=jody.chambers@hootsuite.com',
	    dataType: 'jsonp',
	    success: function(response){ 
	      console.log(response);
	  	}
  	});
 });