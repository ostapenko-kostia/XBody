var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var arrow = this.nextElementSibling;
    var panel = arrow.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      arrow.classList.add("fa-angle-down");
      arrow.classList.remove("fa-angle-up");
      arrow.style.top = "50%";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      arrow.classList.add("fa-angle-up");
      arrow.classList.remove("fa-angle-down");
      arrow.style.top = "30%";
    }
  });
}