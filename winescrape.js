(function(){

var removeVarietal = function(title){
	var wine_types = ['port', 'shiraz','merlot', 'sauvignon blanc', 'rosé', 'rose', 'cabernet sauvignon', 'red', 'zinfandel', 'syrah', 'malbec', 'riesling', 'pinot noir', 'cabernet franc', 'bordeaux', 'chardonnay'];
	var wine_prefix = ['late harvest', 'old vine'];
	var process_title = {};
	$(wine_types).each(function(i,val){
		if (title.indexOf(val) !== -1){
			process_title['title'] =  title.replace(val,'');
			process_title['varietal'] = val;
		}
	});
	return process_title;
}

console.log('title,year,type,rating');
$('.wine_list_item').each(function(i,ele){
	var title = $(ele).find('.description a').html();
	var rating = $(ele).find('.mw_buttons input').val();
	
	if (title && rating && rating > 0){
		title = title.toLowerCase();
		var process_title = removeVarietal(title);
		console.log(title.replace(/\d+/, '').trim() + ','
		+ title.replace(/[^\d]+/, '')+','
		+rating );

	}
});
})();