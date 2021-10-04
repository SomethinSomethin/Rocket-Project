document.body.onscroll = function(){
    newY = window.scrollY;
    console.log(newY);
    if(newY >= 0 && newY <= 1500){
      container.dataset.scene = "stomach";
    }
    else{
      container.dataset.scene = "other";
    }   console.log(container.dataset.scene);
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
  
  