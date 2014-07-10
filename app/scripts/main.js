$( document ).ready(function() {

	

	$(window).resize(function(event){
		var currentOrder= [0,1,2];

		if ($(window).width() <= 1017) {
			var newOrder = [1,0,2];
			if ( currentOrder != newOrder ) {
				currentOrder = newOrder;
				redraw(currentOrder);
			}
		}
		else {
			var newOrder = [0,1,2];
			if( currentOrder != newOrder) {
				currentOrder = newOrder;
				redraw(currentOrder);
			}
		}	
	});

	$modules = $('#first-row .module');


	var redraw = function (order) {
		var elements = [];	
		$.each(order, function(i, position) {
	    	elements.push($modules.get(position));
		});

		$('#first-row').prepend(elements);
	}

	if ($(window).width() <= 1017) {
		var currentOrder= [1,0,2];
		redraw(currentOrder);
	}
	
	$("div.newsfeed-message").click(function () {
      window.location.href = '#'; 
  	});

});

