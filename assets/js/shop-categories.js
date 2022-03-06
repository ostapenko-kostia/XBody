var categoriesList = $('.shop-categories');

function categChange(category) {
	categoriesList.children().removeClass('shop-categ-active');
	category.parentNode.classList.add('shop-categ-active');

	switch(category.name) {
		case "feautured":
			$('.featured-products').css('display', 'block');
			$('.new-products').css('display', 'none');
			$('.best-seller').css('display', 'none');
			break;
		case "new":
			$('.featured-products').css('display', 'none');
			$('.new-products').css('display', 'block');
			$('.best-seller').css('display', 'none');
			break;
		case "best":
			$('.featured-products').css('display', 'none');
			$('.new-products').css('display', 'none');
			$('.best-seller').css('display', 'block');
			break;
	}
}