var btn = $('.sidebar-btn');
var sidebar = $('.shop-sidebar');
var shop = $('.topShop');

var clicked = false;

btn.on("click", function() {
	if (!clicked) {
		clicked = true;
		shop.css("display", 'none');
		sidebar.css("display", 'block');
	} else if (clicked) {
		clicked = false;
		sidebar.css("display", 'none');
		shop.css("display", 'block');
	}
});