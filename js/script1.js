//script for preloader
var loader = $(".loader");
var wHeight = $(window).height();
var wWidth = $(window).width();
var loading = document.querySelector(".loading");
var o = 0;


//script for pre-loading
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


//script for smooth-scroll
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




//script for typing effect 

var TxtType = function(txtElement, toRotate, period=2000) {
  this.toRotate = toRotate;
  this.txtElement = txtElement;
  this.txtIndex = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.write();
  this.isDeleting = false;
};

TxtType.prototype.write = function() {
  var i = this.txtIndex % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.txtIndex++;
  delta = 500;
  }

  setTimeout(function() {
  that.write();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  //INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};