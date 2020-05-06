//script for preloader
var loader = $(".loader");
var wHeight = $(window).height();
var wWidth = $(window).width();
var loading = document.querySelector(".loading");
var o = 0;

loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
})

do {
    loader.animate({
        width: o
    }, 10)
    o += 3;
} while (o <= 400)
if (o === 402) {
    loader.animate({
        left: 0,
        width: '100%'
    })
    loader.animate({
        top: '0',
        height: '100vh'
    })
}
setTimeout(function(){
  loading.style.display = "none";
}, 3500);

setTimeout(function() {
    $(".loader-wrapper").fadeOut('fast');
    (loader).fadeOut('fast');
}, 4000);

//script for scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-95px";
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  } // End if
  });
});