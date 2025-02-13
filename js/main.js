/* mega list hidden & visible changing funtion */

document.querySelector(".mega-1").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.add("dimmer-visible");
});

document.querySelector(".mega-1").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.remove("dimmer-visible");
});

document.querySelector(".mega-2").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.add("dimmer-visible");
});

document.querySelector(".mega-2").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.remove("dimmer-visible");
});

document.querySelector(".mega-3").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.add("dimmer-visible");
});

document.querySelector(".mega-3").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.remove("dimmer-visible");
});

document.querySelector(".mega-4").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.add("dimmer-visible");
});

document.querySelector(".mega-4").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".mega-dimmer");
  changeElement.classList.remove("dimmer-visible");
});

/* listlevel-two display none & block changing function */

document.querySelector(".industries").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".industries-solution");
  changeElement.classList.add("listlevel-display");
});

document.querySelector(".industries-solution").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".industries-solution");
  changeElement.classList.add("listlevel-display");
})


document.querySelector(".industries").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".industries-solution");
  changeElement.classList.remove("listlevel-display");
});

document.querySelector(".industries-solution").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".industries-solution");
  changeElement.classList.remove("listlevel-display");
});



document.querySelector(".resources").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".resources-list");
  changeElement.classList.add("listlevel-display");
});

document.querySelector(".resources-list").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".resources-list");
  changeElement.classList.add("listlevel-display");
})


document.querySelector(".resources").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".resources-list");
  changeElement.classList.remove("listlevel-display");
});

document.querySelector(".resources-list").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".resources-list");
  changeElement.classList.remove("listlevel-display");
});



document.querySelector(".books").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".books-list");
  changeElement.classList.add("listlevel-display");
});

document.querySelector(".books-list").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".books-list");
  changeElement.classList.add("listlevel-display");
})


document.querySelector(".books").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".books-list");
  changeElement.classList.remove("listlevel-display");
});

document.querySelector(".books-list").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".books-list");
  changeElement.classList.remove("listlevel-display");
});


document.querySelector(".learn").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".learn-list");
  changeElement.classList.add("listlevel-display");
});

document.querySelector(".learn-list").addEventListener("mouseover", function() {
  let changeElement = document.querySelector(".learn-list");
  changeElement.classList.add("listlevel-display");
})


document.querySelector(".learn").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".learn-list");
  changeElement.classList.remove("listlevel-display");
});

document.querySelector(".learn-list").addEventListener("mouseout", function() {
  let changeElement = document.querySelector(".learn-list");
  changeElement.classList.remove("listlevel-display");
});

/* top page header shadow */
window.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop === 0) {
    document.querySelector("header").classList.remove("header-shadow");
  } else {
    document.querySelector("header").classList.add("header-shadow");
  }
});