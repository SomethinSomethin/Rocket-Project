TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const content2 = document.querySelectorAll(".content2");
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

const t1 = new TimelineMax();
const t2 = new TimelineMax();
t1.from(content[0], 0.5, { opacity: 0, scale: 2.5 });
t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
t1.to("#js-slideContainer", 0.5, { xPercent: -40 });
t1.from(content[2], 0.5, { opacity: 0, scale: 2.5, left: 400, top: 400 });
t1.to("#js-slideContainer", 0.5, { xPercent: -60 });
t1.from(content[3], 0.5, { opacity: 0, scale: 2.5, right: 400, bottom: 400 });
t1.to("#js-slideContainer", 0.5, { xPercent: -80 });
t1.from(content[4], 0.5, { opacity: 0, scale: 2.5, rotation: 27 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%",
})

.setPin("#js-wrapper")
.setTween(t1)
// .addIndicators({
//   colorTrigger: "White",
//   colorStart: "black",
//   colorEnd: "red",
// })
.addTo(controller);


t2.to("#js-slideContainer2", 0.5, { xPercent: 20 });
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
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller2);
