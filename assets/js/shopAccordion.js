var acc = document.getElementsByClassName("accordion");
		var i;

for (i = 0; i < acc.length; i++) {
 	acc[i].addEventListener("click", function() {
    this.classList.toggle("left-categ-active");

	var arrow = this.nextElementSibling;
    var panel = this.nextElementSibling.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.style.top = '50%';
      arrow.classList.remove("fa-angle-up");
      arrow.classList.add("fa-angle-down");
    } else {
      panel.style.display = "block";
      arrow.style.top = '30%';
      arrow.classList.remove("fa-angle-down");
      arrow.classList.add("fa-angle-up");
    }
  });
}