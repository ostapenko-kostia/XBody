const categoriesList = document.querySelector("#shop-categories");
const featuredProducts = document.querySelector("#featured-products");
const newProducts = document.querySelector("#new-products");
const bestSeller = document.querySelector("#best-seller");

function categChange(category) {
    for (let item of categoriesList.children) {
        item.classList.remove("shop-categ-active");
    }
    category.parentElement.classList.add("shop-categ-active");

    switch (category.name) {
        case "feautured":
            featuredProducts.style.display = "block";
            newProducts.style.display = "none";
            bestSeller.style.display = "none";
            break;
        case "new":
            featuredProducts.style.display = "none";
            newProducts.style.display = "block";
            bestSeller.style.display = "none";
            break;
        case "best":
            featuredProducts.style.display = "none";
            newProducts.style.display = "none";
            bestSeller.style.display = "block";
            break;
    }
}
