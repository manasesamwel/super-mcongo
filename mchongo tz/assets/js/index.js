const menu = document.querySelector('.navbar');
const go_top = document.querySelector('.top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 770) {
        menu.style.backgroundColor = '#9DD5E6';
    }

    else {
        menu.style.backgroundColor = 'rgba(255, 255, 255, 0.178)';
        link.style.color = '#000';
    }
});

// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 100) {
//         go_top.style.display = 'block';
//     }

//     else {
//         go_top.style.display = 'none';
//     }
// });

// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Days " + hours + "Hrs "
  + minutes + "Mins " + seconds + "Sec ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var i = 100;

var counterBack = setInterval(function(){
++i;
if(i>0){
    document.getElementById("theBar").style.width = i+1+"%";
    document.getElementById("theBar").innerHTML = i+1+"%";
} else {
   clearTimeout(counterBack);
}

}, 1000);


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

(function(){
  $(document).click(function() {
     var $item = $(".shopping-cart");
     if ($item.hasClass("active")) {
       $item.removeClass("active");
     }
   });
   
   $('.shopping-cart').each(function() {
     var delay = $(this).index() * 50 + 'ms';
     $(this).css({
         '-webkit-transition-delay': delay,
         '-moz-transition-delay': delay,
         '-o-transition-delay': delay,
         'transition-delay': delay
     });
   });
   $('#cart').click(function(e) {
     e.stopPropagation();
     $(".shopping-cart").toggleClass("active");
   });
   
   $('#addtocart').click(function(e) {
     e.stopPropagation();
     $(".shopping-cart").toggleClass("active");
   });
 
 
   
 })();