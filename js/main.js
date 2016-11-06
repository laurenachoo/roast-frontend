$(document).ready(function(){

	$('.theForm').on('submit', function(){
		event.preventDefault();
		var email = $('.theEmail').val();
		var given_name = 'Ian';
		var country = 'canada';
		var state = 'British Columbia';
		var city = 'Vancouver';

		var profileNamePic = 'img/profiles/ian.jpeg';
	
		console.log('Email: ', email);
		$.getJSON('http://roaster3000.herokuapp.com/roast?input=jody.chambers@hootsuite.com')
		  .done(function(data) {
		    console.log('success');
		    console.log(data);
		    console.log(data.generic_info.given_name);
		    console.log("bvefore");
		    $('.fristName').text(data.generic_info.given_name);
		    console.log('after');
		    console.log($('.firstName'));
		    $('.level2Pic').attr('src',profileNamePic);

		    





		  }).fail(function(jqXHR, status, err) {
		    console.error('fuck')
		  });
	})
 });