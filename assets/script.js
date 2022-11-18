// definition and function for button to scroll to the top of the page

let mybutton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};

// display button when scrolled past top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// function on click
function topFunction() {
    document.documentElement.scrollTop = 0;
}