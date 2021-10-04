let myScene = ['on','off'];
let i = 1;


document.body.onscroll = function () {
  let scrollY = window.scrollY;
  document.querySelector("#yyy").innerText = scrollY;
  document.body.style.setProperty("--s", (2000-scrollY) / 500);
  
  if (scrollY<=600){
    document.body.style.setProperty("--y", scrollY / 9);
    document.body.style.setProperty("--h", (scrollY / 500));
  };
  if(scrollY<400 || scrollY<600){
    document.querySelector('#mouth').dataset.scene = "off"; 
  }

  if(scrollY > 540 && scrollY < 750){
    document.getElementById("botton").style.opacity= "100%";
  }
  else{
    document.getElementById("botton").style.opacity= "0%";
  }
 
  
  // if(scrollY<=628 && scrollY>=1028){
  //        document.querySelector('#mouth').dataset.scene = "off"; 
  //    };
  };

