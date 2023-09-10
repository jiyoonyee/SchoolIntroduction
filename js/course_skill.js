const $fullPage = document.querySelector(".fullpage");
const $fullPageChilCount = $fullPage.childElementCount - 1;
let currentFullPageIndex = 0;
let look = false;
const $imgPage1 = document.querySelector(".img_page1");
const $imgPage2 = document.querySelector(".img_page2")
let slide1 = 0;
let slideInterval = 3000;
let slide2 = 0;


document.addEventListener("mousewheel", function (event) {
    if (look) return;
    const isScrollDown = 0 < event.deltaY;
    if (isScrollDown && currentFullPageIndex < $fullPageChilCount) {
      currentFullPageIndex++;
    } else if (!isScrollDown && currentFullPageIndex > 0) {
      currentFullPageIndex--;
    }
    $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
    
    look = true;
    setTimeout(function () {
      look = false;
      if(currentFullPageIndex == 1){
        startSlideInterval1()
      }
      if(currentFullPageIndex == 2){
        startSlideInterval2()
      }
    }, 500);
  });
  
  // 방향키
document.addEventListener("keydown",function(event){
  if(event.keyCode === 38){
    currentFullPageIndex--;
    $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
  }
  else if(event.keyCode === 40){
    currentFullPageIndex++;
    if(currentFullPageIndex == 3){
      currentFullPageIndex--;
    }
    $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
  }
})

function imgSlide1(){
  slide1++
  if(slide1 === 3){
    slide1 = 0;
  }
  $imgPage1.style.marginLeft = `-${slide1 * 100}%`
}
function startSlideInterval1() {
  setInterval(imgSlide1, slideInterval);
}

function imgSlide2(){
  slide2++
  if(slide2 === 3){
    slide2 = 0;
  }
  $imgPage2.style.marginLeft = `-${slide2 * 100}%`
}
function startSlideInterval2() {
  setInterval(imgSlide2, slideInterval);
}