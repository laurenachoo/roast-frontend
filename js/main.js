$(document).ready(function(){

	$('.theForm').on('submit', function(){
		event.preventDefault();
		var input = $('.theEmail').val();
		var email = $('.theEmail').val();
		var given_name = 'Ian';
		var country = 'canada';
		var state = 'British Columbia';
		var city = 'Vancouver';
		var endStatement = "You are a dud."

		$('.level1Pic').attr('src','img/profiles/ian.jpeg');
		$('.level2Pic').attr('src','img/profiles/ian2.jpg');
		$('.level3Pic').attr('src','img/profiles/ian3.jpg');
		$('.level4Pic').attr('src','img/profiles/ian4.jpg');

		var profileNamePic = 'img/profiles/ian.jpeg';
	
		console.log('Email: ', email);
		$.getJSON('http://roaster3000.herokuapp.com/roast?input=' + input)
		  .done(function(data) {
		  	if (data.generic_info.given_name === 'Ian') {
		  		$('.level1Pic').attr('src','img/profiles/ian1.jpg');
		  		$('.level2Pic').attr('src','img/profiles/ian2.jpg');
		  		$('.level3Pic').attr('src','img/profiles/ian3.jpg');
		  		$('.level4Pic').attr('src','img/profiles/ian4.jpg');
		  	}

		  	if (data.generic_info.given_name === 'Tristan') {
		  		$('.level1Pic').attr('src','img/profiles/tristen1.jpg');
		  		$('.level2Pic').attr('src','img/profiles/tristen2.jpg');
		  		$('.level3Pic').attr('src','img/profiles/tristen3.jpg');
		  		$('.level4Pic').attr('src','img/profiles/tristen4.jpg');
		  		endStatement = "Maybe just get on a bus to nowhere.";
		  		data.level1.sn_bio = "Philosophy Student. You can now get a job at as a pimple popper.";
		  		data.level2.company_position_urban_dic = data.level1.urban_dictionary_def;
		  	}

		    console.log('success');
		    console.log(data);
		    console.log("first name", data.generic_info.given_name);
		    console.log("bvefore");
		    $('.firstName').text(data.generic_info.given_name);
		    $('.country').text(data.level1.country);
		    $('.sn_bio').text(data.level1.sn_bio);
		    $('.state').text(data.level1.state);
		    $('.urbanDic').text(data.level2.company_position_urban_dic);
		    $('.endStatement').text(endStatement);

		    console.log('after');
		    console.log($('.firstName'));
		    $('.level2Pic').attr('src',profileNamePic);

		    





		  }).fail(function(jqXHR, status, err) {
		    console.error('fuck')
		  });
	})
 });