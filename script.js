function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: "#page-1 h1",
    scroller: "main",
    ease: Power0.easeOut,
    start: "top 25%",
    end: "top 0",
    scrub: 3
  }
})
tl.to("#page-1 h1",{
  x: -100,
  duration: 1,
 
}, "anm")
tl.to("#page-1 h2",{
  x: 100,
  duration: 1,
 
}, "anm")
tl.to("#page-1 #v-container",{
  width:"90%",
  duration: 1,
  ease: Power0.easeOut
}, "anm")

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page-2",
    scroller: "main", 
    start: "top 60%",
    end: "top -70%",
    scrub: 2
  }
})

tl2.to("main", {
  backgroundColor: "#fff",
  color: "#111"
})