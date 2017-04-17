
$(document).ready(function(){
  // document.onmousemove = mouseMoved;
  document.body.onresize = function (){



    // whereIsPicture();
  };
  // whereIsPicture();

  jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();

        $('html,body').animate({scrollTop:$(this.hash).offset().top - 40}, 700);
        if ($(this).attr('id')=='homenav') {
          $(this).addClass('hidden');
        } else {
          setTimeout(function(){$('#homenav').removeClass('hidden');},1200);

        }
    });
});

});

$(window).scroll(function() {
    // var navHeight = $('.nav').height(),
    //     documentHeight = $(document).height(),
    //     windowHeight = $(window).height(),
    // var topOfName = $('.TJB').offset().top;
    // var    scroll = $(window).scrollTop();
    //     // about = $('#about').offset().top,
    //     // portfolio = $('#portfolio').offset().top;
    //     console.log("tjb: " + (topOfName - scroll));
    //     console.log("scroll: " + scroll);
    if ($(window).scrollTop() < 100){
      $('#homenav').addClass('hidden');

    } else {$('#homenav').removeClass('hidden');}
    // if (scroll >= about - navHeight) {
    //     $('.menu li').removeClass('selected');
    //     $('.about_button li').addClass('selected');
    // }
    // if (scroll >= portfolio - navHeight) {
    //     $('.menu li').removeClass('selected');
    //     $('.portfolio_button li').addClass('selected');
    // }
    // If at the top of the page, remove all selected classes
    // if (scroll === 0) {
    //     $('.menu li').removeClass('selected');
    // }
    // // If at bottom of page, add selected class on Contact
    // if (scroll + windowHeight === documentHeight) {
    //     $('.menu li').removeClass('selected');
    //     $('.contact_button li').addClass('selected');
    // }
});

var pictureCenterX;
var pictureCenterY;


function whereIsPicture(){
  var picture  = document.getElementById('picture');
  var pictureTop = picture.getBoundingClientRect().top;
  var pictureLeft = picture.getBoundingClientRect().left;
  var pictureRight = picture.getBoundingClientRect().right;
  var pictureBottom = picture.getBoundingClientRect().bottom;

  pictureCenterX = pictureLeft + (pictureRight - pictureLeft)/2;
  pictureCenterY = pictureTop + (pictureBottom - pictureTop)/2;

  // document.getElementById('picCenter').innerText = "(" + pictureCenterX + ", " + pictureCenterY + ")";

}

function mouseMoved() {
  var ml = document.getElementById("mouselocation");
  var x = window.event.clientX;
  var y = window.event.clientY;
  // ml.innerText = "(" + x + ", " + y + ")";
  if (x>=pictureCenterX) {
    var deltaY = y - pictureCenterY;
    var deltaX = x- pictureCenterX;
    var theta = Math.atan(deltaY/deltaX);
    theta = theta * 180 / 3.1415926;
    // console.log(theta);
    $('#picture').css({transform: 'rotate(' + theta + 'deg)'});
  } else {
  // $('#picture').css({transform: 'rotate(' + 0 + 'deg)'});
  $('#picture').css('animation-name: straightAhead', 'animation-duration: 0.5s');
  }
}

function showAbout(){
  // alert("showAbout");
  $('.about').css('display','inline-block');
  $('.projects').css('display','none');


}


function showProjects(){
  // alert("showProject");
  $('.about').css('display','none');
  $('.projects').css('display','inline-block');


}
