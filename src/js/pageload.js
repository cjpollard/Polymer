(function() {
	
	var pageLoad = function(e, detail) {
		
		e.preventDefault();
		var selectedItem;
		var page;
		
		if(detail.isSelected) {
			selectedItem = detail.item;
			page = selectedItem.page;
		}
		
		$('#page').fadeOut(300, function(){
			$('#page').load('pages/' + page + '.html').fadeIn(300);
		});
		
	};
	
	var initialPageLoad = function(page) {
		$('#page').fadeOut(300, function(){
			$('#page').load('pages/' + page + '.html').fadeIn(300);
		});
	};
	
	var exports = {
		pageLoad: pageLoad,
		initialPageLoad: initialPageLoad
	};

	initialPageLoad('home');
	
	return exports;
		
}());