var btn = $('.sidebar-btn');
var sidebar = $('.shop-sidebar');
var shop = $('.topShop');

var clicked = false;

const width = window.innerWidth;

btn.on("click", function() {
	if (width <= 768 && width > 425) {
		if (!clicked) {
			clicked = true;
			shop.css("display", 'none');
			sidebar.css("display", 'block');
		} else if (clicked) {
			clicked = false;
			sidebar.css("display", 'none');
			shop.css("display", 'block');
		}
	}
	if (width <= 425) {
		sidebar.toggleClass('shop-active');
	}
});