let point = 1;

function carousel_button1(){
    document.querySelector(".carousel_container").style.transform =
    "translateX(0vw)";
    point = 1;
    document.querySelector(".slide_row_btn:nth-child(1)").style.opacity = 1;
};

function carousel_button2(){
    document.querySelector(".carousel_container").style.transform =
    "translateX(-100vw)";
    point = 2;
};

function carousel_button3(){
    document.querySelector(".carousel_container").style.transform =
    "translateX(-200vw)";
    point = 3;
};

function carousel_button4(){
    document.querySelector(".carousel_container").style.transform =
    "translateX(-300vw)";
    point = 4;
};



const nextMove = function(){
    if(point < 4){
     document.querySelector(".carousel_container").style =
     "transform: translateX(-" + point + "00vw)";
     point += 1;
    } else{
     document.querySelector(".carousel_container").style =
     "transform: translateX(0vw)";
     point = 1;
    }
};



let loopInterval = setInterval(() => {
    nextMove();
  }, 3500);


  const slide = document.querySelectorAll(".carousel_container");

  // 슬라이드에 마우스가 올라간 경우 루프 멈추기
  slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
  });

  
  // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
  slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove(); // 다음 슬라이드를 보여주는 함수
    }, 3000);
  });
