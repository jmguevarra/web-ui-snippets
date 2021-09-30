var OOL = {};
var d = document;
var $;

// Ready, go
jQuery(d).ready(function () {
    $ = jQuery; // if you need
	
	OOL.flippingTestimony();
    //console.log('Document is ready, jquery is present');
    //OOL.exemple_function(); // call to a function, see below
});


OOL.flippingTestimony = function(){
	let flag = 0;
	setInterval(function(){
		if(flag > $('.flip-testimony .testi-card').length - 1){ 
			flag = 0; //back to start
		}
			
		$('.flip-testimony .testi-card').removeClass('active');
		$('.flip-testimony .testi-card').each(function(index, tag){
			if(flag == index){
				$(tag).addClass('active');
			}
		});
		
		flag++;
	}, 4000);
	
};