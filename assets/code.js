
window.onload = function(){
  document.onmousemove = mouseMoved;
  document.body.onresize = whereIsPicture;
  whereIsPicture();
  $('#about').click(showAbout);
  $('#projects').click(showProjects);
};

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
