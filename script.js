//scroll y check//
document.body.onscroll = function () {
    newY = window.scrollY;
    console.log(newY);
    document.querySelector("#yyy").innerText = scrollY;
    if(newY >= 2000 && newY <= 3500){
        container.dataset.scene = "stomach";
        }
        else{
          container.dataset.scene = "other";
        }   console.log(container.dataset.scene);
    };







    