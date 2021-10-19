//scroll y check//
let myScene = ['on', 'off'];
let i = 1;
document.body.onscroll = function() {
    newY = window.scrollY;
    console.log(newY);
    document.querySelector("#yyy").innerText = scrollY;
    let x = document.querySelector("#container");
    console.log(x.dataset)
        // ปาก
    document.body.style.setProperty("--s", (2000 - scrollY) / 500);
    if (scrollY <= 600) {
        document.body.style.setProperty("--y", scrollY / 9);
        document.body.style.setProperty("--h", (scrollY / 500));
    };
    if (scrollY < 400 || scrollY < 600) {
        document.querySelector('#mouth').dataset.scene = "off";
    };
    if (scrollY > 440 && scrollY < 850) {
        document.getElementById("botton1").style.opacity = "100%";
    } else {
        document.getElementById("botton1").style.opacity = "0%";
    }
    if (newY >= 2500 && newY <= 3900) {
        container.dataset.scene = "stomach";
    } else if (newY >= 1500 && newY <= 3000) {
        container.dataset.scene = "esophagus";
    } else {
        container.dataset.scene = "other";
    }
    if (scrollY > 540 && scrollY < 950) {
        document.getElementById("t_m1").style.opacity = "100%";
    } else {
        document.getElementById("t_m1").style.opacity = "0%";
    }
    // หลอดอหาร
    var condi_eso = document.getElementById("esophagus");
    var condi_esoTop = condi_eso.offsetTop;
    // console.log(scrollY + window.innerHeight - (condi_eso.offsetHeight));
    if (scrollY < condi_esoTop - 300) {
        document.querySelector(".eso").dataset.scene = "acc";
        document.getElementById("mouth").style.opacity = "100%";
        document.getElementById("t_s").style.opacity = "0%";


    } else {
        document.querySelector(".eso").dataset.scene = "dis";
        document.getElementById("mouth").style.opacity = "0%";
        document.getElementById("t_s").style.opacity = "100%";
    }
    // if (scrollY > 540 && scrollY < 950) {
    //     document.getElementById("t_m2").style.opacity = "100%";
    // } else {
    //     document.getElementById("t_m2").style.opacity = "0%";
    // }
};
// กระเพอาะ
function drop(type) {
    console.log("clicked!");
    console.log(type);
    var correct = [1, 2, 3];
    if (correct.includes(type)) {
        var d = document.querySelector("#d" + type);
        var check = document.querySelector("#check");
        var img = document.querySelector("#tick");
        d.classList.add("dropping");
        img.setAttribute("src", "https://cdn.discordapp.com/attachments/874526652644884490/894600929377124372/KuyYes.png");
        check.classList.add("float");
        setTimeout(function() {
            d.classList.remove("dropping");
            check.classList.remove("float");
        }, 2000);
    } else {
        var d = document.querySelector("#d" + type);
        var check = document.querySelector("#check");
        var img = document.querySelector("#tick");
        d.classList.add("dropping");
        img.setAttribute("src", "https://cdn.discordapp.com/attachments/874526652644884490/894600669649051738/Kuy.png");
        check.classList.add("float");
        setTimeout(function() {
            d.classList.remove("dropping");
            check.classList.remove("float");
        }, 2000);
    }
}

function pew() {
    mouth.dataset.scene = myScene[i % (myScene.length)]
    i++;
}