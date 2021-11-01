window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
    
    var fade1 = document.getElementById("card-fade-1");
    var fade2 = document.getElementById("card-fade-2");
    var fade3 = document.getElementById("card-fade-3");

    var numfade = fade1.offsetTop;
    if (scrollY + window.innerHeight - (fade1.offsetHeight) >= numfade && scrollY < numfade + 600) {
        fade1.style.cssText = 'transform: translateX(0%); opacity: 1;';
        fade2.style.cssText = 'transform: translateX(0%); opacity: 1;';
        fade3.style.cssText = 'transform: translateX(0%); opacity: 1;';
    } else {
        fade1.style.cssText = 'transform: translateX(20%); opacity: 0;';
        fade2.style.cssText = 'transform: translateX(30%); opacity: 0;';
        fade3.style.cssText = 'transform: translateX(40%); opacity: 0;';
    }

    var cardfade1 = document.getElementById("number01");
    var cardfade2 = document.getElementById("number02");
    var cardfade3 = document.getElementById("number03");
    var cardfade4 = document.getElementById("number04");
    var cardfade5 = document.getElementById("number05");
    var cardfade6 = document.getElementById("number06");
    var cardfade7 = document.getElementById("number07");
    var cardfade8 = document.getElementById("number08");
    var cardfade9 = document.getElementById("number09");

    var cardfading = cardfade1.offsetTop;
    if (scrollY + window.innerHeight - (cardfade1.offsetHeight) >= cardfading && scrollY < cardfading + 600) {
        cardfade1.style.cssText = 'transform: translateX(0%); opacity: 1;';
        cardfade2.style.cssText = 'transform: translateX(0%); opacity: 1;';
        cardfade3.style.cssText = 'transform: translateX(0%); opacity: 1;';
    } else {
        cardfade1.style.cssText = 'transform: translateX(20%); opacity: 0;';
        cardfade2.style.cssText = 'transform: translateX(30%); opacity: 0;';
        cardfade3.style.cssText = 'transform: translateX(40%); opacity: 0;';
    }

    var cardfading1 = cardfade4.offsetTop;
    if (scrollY + window.innerHeight - (cardfade4.offsetHeight) >= cardfading1 && scrollY < cardfading1 + 600) {
        cardfade4.style.cssText = 'transform: translateX(0%); opacity: 1;';
        cardfade5.style.cssText = 'transform: translateX(0%); opacity: 1;';
        cardfade6.style.cssText = 'transform: translateX(0%); opacity: 1;';
    } else {
        cardfade4.style.cssText = 'transform: translateX(-20%); opacity: 0;';
        cardfade5.style.cssText = 'transform: translateX(-30%); opacity: 0;';
        cardfade6.style.cssText = 'transform: translateX(-40%); opacity: 0;';
    }

    var cardfading2 = cardfade7.offsetTop;
    if (scrollY + window.innerHeight - (cardfade7.offsetHeight) >= cardfading2 && scrollY < cardfading2 + 600) {
        cardfade7.style.cssText = 'transform: translateX(0%); opacity: 1;';
        cardfade8.style.cssText = 'transform: translateX(0%); opacity: 1;';
        cardfade9.style.cssText = 'transform: translateX(0%); opacity: 1;';
    } else {
        cardfade7.style.cssText = 'transform: translateX(20%); opacity: 0;';
        cardfade8.style.cssText = 'transform: translateX(30%); opacity: 0;';
        cardfade9.style.cssText = 'transform: translateX(40%); opacity: 0;';
    }
})

