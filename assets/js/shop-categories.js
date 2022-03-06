var categoriesList = $('.shop-categories');

function categChange(category) {
	categoriesList.children().removeClass('shop-categ-active');
	category.parentNode.classList.add('shop-categ-active');
}