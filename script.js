function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  lerp: 0.03, // Lower lerp value for smoother scrolling
  multiplier: 0.7 // Reduce scroll speed multiplier
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

document.querySelectorAll('.elem').forEach(elem => {
  elem.addEventListener('mouseenter', () => {
    elem.style.zIndex = '10';
  });
  
  elem.addEventListener('mouseleave', () => {
    elem.style.zIndex = '1';
  });
});

let cursor = document.querySelector(".cursor")
let main = document.querySelector("main")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
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
    start: "top 40%",
    end: "top -60%",
    scrub: 2
  }
})

tl2.to("main", {
  backgroundColor: "#fff",
  color: "#111"
})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page-4",
    scroller: "main", 
    start: "top 30%",
    end: "top -40%",
    scrub: 2
  }
})

tl3.to("main", {
  backgroundColor: "#000",
  color: "#fff"
})