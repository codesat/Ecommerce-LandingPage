let flag = 0;
function controller(e) {
  flag = flag + e;
  slideshow(flag);
}
slideshow(flag);

function slideshow(num) {
  //to select all elements of same class name
  let slides = document.getElementsByClassName("foodcard");
  // console.log(slides)
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  if (num == slides.length) {
    num = 0;
    flag = 0;
  }

//   console.log(num);
//   console.log(flag);

  //to hide rest of images
  for (let x of slides) {
    x.style.display = "none";
  }

  //now we have make visible first image
  slides[num].style.display = "block"; //first div become visible/block
}

$(document).ready(function () {
  $(".navtrigger").click(function () {
    $(".sitecontentwrapper").toggleClass("scaled");
  });
});
