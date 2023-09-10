const $fullPage = document.querySelector(".fullpage");
const $fullPageChilCount = $fullPage.childElementCount - 1;
let currentFullPageIndex = 3;
let look = false;

let flowr = "";
const input_flowr = document.querySelector(".input_flowr") 
const up_button = document.querySelector(".up");
const down_button = document.querySelector(".down");

$fullPage.style.transform = `translateY(-300%)`;

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

// 버튼
up_button.addEventListener("click",function(){
  currentFullPageIndex--;
  $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
})
down_button.addEventListener("click",function(){
  currentFullPageIndex++;
  if(currentFullPageIndex == 6){
    currentFullPageIndex--;
  }
  $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
})

// 입력
input_flowr.addEventListener("keydown", function(event){
  if(event.keyCode === 13){
    flowr = input_flowr.value;
    switch (flowr){
      case "1" : 
        currentFullPageIndex = 3;
        break;

      case "2" : 
        currentFullPageIndex = 2;
        break;

      case "3" : 
        currentFullPageIndex = 1;
        break;

      case "4" : 
        currentFullPageIndex = 0;
        break;

      case "-1" :
        currentFullPageIndex = 4;
        break;

      case "-2" :
        currentFullPageIndex = 5;
        break;
    }
    $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
  }
});


