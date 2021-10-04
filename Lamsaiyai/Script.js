var controller = new ScrollMagic.Controller();

var scrollHorizontal = new TimelineLite()
var ss= new TimelineLite()

  scrollHorizontal.to("#scrollHorizontal", 1, {x:'-403%'})
var horizontalScroll = new ScrollMagic.Scene({
      triggerElement: "#scrollHorizontal",
      triggerHook: 'onLeave', duration: 5000 
    }).setPin("#scrollHorizontal").setTween(scrollHorizontal).addTo(controller);


  ss.to("#ss", 1, {x:'404.5%'})
var ssscroll = new ScrollMagic.Scene({
      triggerElement: "#ss",
      triggerHook: 'onLeave', duration: 5000
    }).setPin("#ss").setTween(ss).addTo(controller);


  



        