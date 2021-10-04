//scroll y check//
let myScene = ['on','off'];
let i = 1;
document.body.onscroll = function () {
    newY = window.scrollY;
    console.log(newY);
    document.querySelector("#yyy").innerText = scrollY;
    document.body.style.setProperty("--s", (2000-scrollY) / 500);
    if (scrollY<=600){
        document.body.style.setProperty("--y", scrollY / 9);
        document.body.style.setProperty("--h", (scrollY / 500));
    };
    if(scrollY<400 || scrollY<600){
        document.querySelector('#mouth').dataset.scene = "off"; 
    };
    if(scrollY > 540 && scrollY < 750){
        document.getElementById("botton").style.opacity= "100%";
    }
    else{
        document.getElementById("botton").style.opacity= "0%";
    }
    if(newY >= 2000 && newY <= 3500){
        container.dataset.scene = "stomach";
        }
        else{
          container.dataset.scene = "other";
        }   
    console.log(container.dataset.scene);
};

function drop(type){
    console.log("clicked!");
    console.log(type);
    var correct = [1,2,3];
    var wrong = [4,5];
    if (correct.includes(type)){
        var d1 = document.getElementById("d1");
        d1.classList.add("dropping");
        console.log(d1.classList);
        setTimeout(function(){
        d1.classList.remove("dropping");
        console.log(d1.classList);
        },2000);
    }
    else{
        var d2 = document.getElementById("d2");
        d2.classList.add("dropping");
        console.log(d2.classList);
        setTimeout(function(){
            d2.classList.remove("dropping");
            console.log(d2.classList);
        },2000);
    }
}

function pew(){
    mouth.dataset.scene = myScene[i%(myScene.length)]
    i++;
}






    