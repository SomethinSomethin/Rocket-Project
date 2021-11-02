var freedom = 0;
pop();
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
function scroll_allow (id){
    // console.log(555);
    document.getElementById(id).style.overflow = "scroll";
    var modal = document.getElementById("modal1");
    modal.style.display = "none";
}
function pop(){
    var modal = document.getElementById("modal1");
    modal.style.display = "block";  
    console.log(1);
};
// Music
var aud = document.getElementById("ASong").children[0];
  var isPlaying = true;

//   function playPause() {
//     if (isPlaying) {
//       aud.pause();
//     } else {
//       aud.play();
//     }
//     isPlaying = !isPlaying;
//   }
//scroll y check//
let myScene = ['on', 'off'];
let i = 1;
document.body.onscroll = function() {
    let viewHeight = window.innerHeight;
    newY = window.scrollY;
    console.log(newY);
    // document.querySelector("#yyy").innerText = scrollY;
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
    if (newY >= 2300 && newY <= 3500) {
        container.dataset.scene = "stomach";
    } else if (newY >= 1500 && newY <= 3000) {
        container.dataset.scene = "esophagus";
    } else {
        container.dataset.scene = "other";
    }
    if (scrollY > 440 && scrollY < 950) {
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
        document.getElementById("food1").style.opacity = "0%";
        document.getElementById("food2").style.opacity = "0%";
        document.getElementById("food3").style.opacity = "0%";
        document.getElementById("food4").style.opacity = "0%";


    } else {
        document.querySelector(".eso").dataset.scene = "dis";
        document.getElementById("mouth").style.opacity = "0%";
        document.getElementById("t_s").style.opacity = "100%";
        document.getElementById("food1").style.opacity = "100%";
        document.getElementById("food2").style.opacity = "100%";
        document.getElementById("food3").style.opacity = "100%";
        document.getElementById("food4").style.opacity = "100%";
    }
    // if (scrollY > 540 && scrollY < 950) {
    //     document.getElementById("t_m2").style.opacity = "100%";
    // } else {
    //     document.getElementById("t_m2").style.opacity = "0%";
    // }
    // กระเพาะ ---> ลำไส้เล็ก
    var lek = document.getElementById("lek");
    var lektop = lek.offsetTop;
    

    if (scrollY + viewHeight - 650 >= lektop) {
        document.querySelector("#lek").dataset.active = 1;
    } else {
    document.querySelector("#lek").dataset.active = 0;
    }
    // ส่วนลำไส้เล็ก ---> ใหญ่
        var lekpaiyai = document.getElementById("lekpaiyai");
        var lekpaiyaitop = lekpaiyai.offsetTop;

        if (scrollY + viewHeight - 650 >= lekpaiyaitop) {
            document.querySelector("#lekpaiyai").dataset.active = 1;
        } else {
        document.querySelector("#lekpaiyai").dataset.active = 0;
        }
    // ตูด
    var tude = document.getElementById("tude");
        var tudetop = tude.offsetTop;
        if (scrollY + viewHeight - 3500 >= tudetop){
            document.querySelector("#tude").dataset.active = 1;
        }
        else {
        document.querySelector("#tude").dataset.active = 0;
        }

        var shit = document.getElementById("shit").offsetTop;
        if (scrollY + viewHeight - 450>= shit) {
            document.querySelector("#shit").dataset.active = 1;
        } else {
        document.querySelector("#shit").dataset.active = 0;
        }
        var shit2 = document.getElementById("shit2").offsetTop;
        if (scrollY + viewHeight - 600>= shit2) {
            document.querySelector("#shit2").dataset.active = 1;
        } else {
        document.querySelector("#shit2").dataset.active = 0;
        }

        freedom = document.getElementById("freedom").offsetTop;
        if (scrollY + viewHeight -700 >= freedom) {
            document.querySelector("#freedom").dataset.active = 1;
            changeText()
        } 
        else {
        document.querySelector("#freedom").dataset.active = 0;
        }

};
// กระเพาะ
function drop(type) {
    console.log("clicked!");
    console.log(type);
    var audio = document.querySelector("#plop");
    var correct = [5];
    if (correct.includes(type)) {
        var d = document.querySelector("#d" + type);
        var check = document.querySelector("#check");
        var img = document.querySelector("#tick");
        d.classList.add("dropping");
        img.setAttribute("src", "IMG/right.png");
        check.classList.add("float");
        setTimeout(function() {
            d.classList.remove("dropping");
            check.classList.remove("float");
            audio.play();
        }, 2000);
    } else {
        var d = document.querySelector("#d" + type);
        var check = document.querySelector("#check");
        var img = document.querySelector("#tick");
        d.classList.add("dropping");
        img.setAttribute("src", "IMG/wrong.png");
        check.classList.add("float");
        setTimeout(function() {
            d.classList.remove("dropping");
            check.classList.remove("float");
            audio.play();
        }, 2000);
    }
}

function pew() {
    mouth.dataset.scene = myScene[i % (myScene.length)]
    i++;
}

TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const content2 = document.querySelectorAll(".content2");
const content3 = document.querySelectorAll(".content3");
const content4 = document.querySelectorAll(".content4");
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controller3 = new ScrollMagic.Controller();
const controller4 = new ScrollMagic.Controller();

const t1 = new TimelineMax();
const t2 = new TimelineMax();
const t3 = new TimelineMax();
const t4 = new TimelineMax();



t3.from(content3[0], 0.5, { opacity: 0, scale: 2.5 });
t3.to("#js-slideContainer3", 0.5, { xPercent: -20 });
t3.from(content3[1], 0.5, { opacity: 0, scale: 2.5, left: 400, top: 400 });
t3.to("#js-slideContainer3", 0.5, { xPercent: -40 });
t3.from(content3[2], 0.5, { opacity: 0, scale: 2.5 });
t3.to("#js-slideContainer3", 0.5, { xPercent: -60 });
t3.from(content3[3], 0.5, { opacity: 0, scale: 2.5, right: 400, bottom: 400 });
t3.to("#js-slideContainer3", 0.5, { xPercent: -80 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper3",
  triggerHook: "onLeave",
  duration: "400%",
})
.setPin("#js-wrapper3")
.setTween(t3)
.addTo(controller3);



t4.to("#js-slideContainer4", 0.5, { xPercent: 20 });
t4.to("#js-slideContainer4", 0.5, { xPercent: 40 });
t4.to("#js-slideContainer4", 0.5, { xPercent: 60 });
t4.from(content4[0], 0.5, { opacity: 0, scale: 2.5 });
t4.to("#js-slideContainer4", 0.5, { xPercent: 80 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper4",
  triggerHook: "onLeave",
  duration: "400%",
})

  .setPin("#js-wrapper4")
  .setTween(t4)
  .addTo(controller4);



t1.from(content[0], 0.5, { opacity: 0, scale: 2.5 });
t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
t1.to("#js-slideContainer", 0.5, { xPercent: -40 });
t1.to("#js-slideContainer", 0.5, { xPercent: -60 });
t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t1.to("#js-slideContainer", 0.5, { xPercent: -80 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%",
})

.setPin("#js-wrapper")
.setTween(t1)
.addTo(controller);




t2.to("#js-slideContainer2", 0.5, { xPercent: 20 });
t2.from(content2[0], 0.5, { opacity: 0, scale: 2.5 });
t2.to("#js-slideContainer2", 0.5, { xPercent: 40 });
t2.to("#js-slideContainer2", 0.5, { xPercent: 60 });
t2.to("#js-slideContainer2", 0.5, { xPercent: 80 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper2",
  triggerHook: "onLeave",
  duration: "400%",
})



  .setPin("#js-wrapper2")
  .setTween(t2)
  .addTo(controller2);


var isopensound = true
  
function showsound(){
    console.log("MULTIMEDAIL GET A");
    if(isopensound){
        document.getElementById("ASong").classList.remove('soundoff');
    }
    else{
        document.getElementById("ASong").classList.add('soundoff');
    }
    isopensound = !isopensound
    
}

// import Fluketolungmatom
var audio = document.getElementById("myaudio");
audio.volume = 0.1;
audio.play();
// audio.autoplay = true;
// audio.load();
// audio.controls = true; 

var summarizes = ["ไม่ว่าจะเป็นอะไรก็ตาม", 
"สุดท้ายทุกอย่างก็ต้องถูกย่อยสลาย",
"ดังนั้น...",
"รับประทานอาหารที่มีประโยชน์ต่อร่างกายของคุณ",
"เพื่อเป็นประโยชน์ต่อร่างกายของคุณด้วยนะ"]

var count;

function changeText() {
        count = 0
        return timer(count);
}


function timer(counts) {
    count = counts
    
    setTimeout(function() { 
        summary = document.getElementById("summarize");
        if (count < 5 ){ 
            summary.innerHTML =  summarizes[count]
            if(count % 2 == 0){
                summary.className = "sectionTitle-tude changetext";
            }
            else{
                summary.className = "sectionTitle-tude changetext2";
            }
            count++;
            timer(count)
        }
        else{
            count = 0;
            return "finish";
        }

    }, 3000);
    
}  

