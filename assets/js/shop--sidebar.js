const btn = document.querySelector("#sidebar-btn");
const sidebar = document.querySelector("#shop-sidebar");
const shop = document.querySelector("#topShop");

const width = window.innerWidth;

let clicked = false;

btn.addEventListener('click', () => {
	if (width <= 768 && width > 425) {
		if (!clicked) {
			clicked = true;
			shop.style.display = 'none';
			sidebar.style.display = 'block';			
        } else if (clicked) {
			clicked = false;
            sidebar.style.display = 'none';
			shop.style.display = 'block';
        }
	}
	if (width <= 425) {
		sidebar.classList.toggle("shop-active");
	}
});
