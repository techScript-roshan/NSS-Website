let load_more = document.getElementById("load-more");
let = document.getElementById("#logo");

let currentItem = 3;
function loadMoreBtn() {
  let boxes = [...document.querySelectorAll(".recent_events .card")];
  for (var i = currentItem; i < currentItem + 1; i++) {
    boxes[i].style.display = "block";
  }
  currentItem += 1;

  // Hiding load more button after showing all the events.
  if (currentItem >= boxes.length) {
    load_more.style.display = "none";
  }
}

function home() {
  window.location.href = "/";

}