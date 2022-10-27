const navbar = document.getElementById("navbar");
let previousScrollPosition = window.scrollY;
window.onscroll = () => {
  let currentScrollPosition = window.scrollY;
  if (previousScrollPosition > currentScrollPosition) navbar.style.top = "0";
  else navbar.style.top = "-0px";
  previousScrollPosition = currentScrollPosition;
};


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Load More Abouts
$(document).ready(function(){
  $(".content").slice(0, 3).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 3).slideDown();
    if($(".content:hidden").length == 0) {
      // $("#loadMore").text("No Content").addClass("noContent");
      $("#loadMore").text("").addClass("noContent");
    }
  });
})