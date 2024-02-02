let load_more2022 = document.getElementById("load-more2022");
let load_more2023 = document.getElementById("load-more2023");
let load_more2024 = document.getElementById("load-more2024");
let = document.getElementById("#logo");

// Loding More event by clicking on button for 2023 events
let currentItem = 4;
function loadMoreBtn_2024() {
  let boxes = [
    ...document.querySelectorAll(".recent_events .event_2024 .card"),
  ];
  for (var i = currentItem; i < currentItem + 2; i++) {
    if (currentItem <= boxes.length) {
      boxes[i].style.display = "block";
    }
    console.log(currentItem);
  }
  currentItem += 2;
  // Hiding load more button after showing all the events.
  if (currentItem >= boxes.length) {
    load_more2024.style.display = "none";
  }
}
// Loding More event by clicking on button for 2023 events
function loadMoreBtn_2023() {
  let boxes = [
    ...document.querySelectorAll(".recent_events .event_2023 .card"),
  ];
  for (var i = currentItem; i < currentItem + 2; i++) {
    if (currentItem <= boxes.length) {
      boxes[i].style.display = "block";
    }
    console.log(currentItem);
  }
  currentItem += 2;
  // Hiding load more button after showing all the events.
  if (currentItem >= boxes.length) {
    load_more2023.style.display = "none";
  }
}
// Loding More event by clicking on button for 2022 events
function loadMoreBtn_2022() {
  let boxes = [
    ...document.querySelectorAll(".recent_events .event_2022 .card"),
  ];
  for (var i = currentItem; i < currentItem + 2; i++) {
    if (currentItem <= boxes.length) {
      boxes[i].style.display = "block";
    }
  }
  currentItem += 2;
  // Hiding load more button after showing all the events.
  if (currentItem >= boxes.length) {
    load_more2022.style.display = "none";
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

// NAVBAR Responsive

// const toggleBtn = document.querySelector(".toggle_btn");
// const toggleBtnIcon = document.querySelector(".toggle_btn i");
// const dropDownMenu = document.querySelector(".dropdown_menu");

// toggleBtn.onclick = function () {
//   dropDownMenu.classList.toggle("open");
//   const isOpen = dropDownMenu.classList.contains("open");

//   toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
// };


// let toggle = document.querySelector(".navbar-toggler .navbar-toggler-icon");

// console.log(toggle);
// toggle.style.color = "white";
