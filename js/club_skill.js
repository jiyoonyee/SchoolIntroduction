const $fullPage = document.querySelector(".fullpage");
const $fullPageChilCount = $fullPage.childElementCount - 1;
let currentFullPageIndex = 0;
let look = false;

let flowr = "";
const input_flowr = document.querySelector(".input_flowr") 
const up_button = document.querySelector(".up");
const down_button = document.querySelector(".down");

// 마우스 휠
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
  setTimeout(function () {look = false;}, 500);
  
});

// 방향키
document.addEventListener("keydown",function(event){
  if(event.keyCode === 38){
    currentFullPageIndex--;
    $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
  }
  else if(event.keyCode === 40){
    currentFullPageIndex++;
    if(currentFullPageIndex == 6){
      currentFullPageIndex--;
    }
    $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
  }
})



