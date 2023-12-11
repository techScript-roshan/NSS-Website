let load_more = document.getElementById("load-more");
let = document.getElementById("#logo");

let currentItem_2023 = 4;
// Loding More event by clicking on button for 2023 events
function loadMoreBtn_2023() {
  let boxes = [
    ...document.querySelectorAll(".recent_events .event_2023 .card"),
  ];
  for (var i = currentItem_2023; i < currentItem_2023 + 2; i++) {
    if (currentItem_2023 <= boxes.length) {
      boxes[i].style.display = "block";
    }
  }
  currentItem_2023 += 2;
  // Hiding load more button after showing all the events.
  if (currentItem_2023 >= boxes.length) {
    load_more.style.display = "none";
  }
}

function home() {
  window.location.href = "/";
}

// JQUERY CODE for POPUP image
$(document).ready(function () {
  $(".gallery_img").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
      enabled: true,
    },
  });
});
