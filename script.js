function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
    lerp: 0.03,
    multiplier: 0.7
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
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

let cursor = document.querySelector(".cursor");
let main = document.querySelector("main");
let cursorX = 0;
let cursorY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", function (dets) {
  cursorX = dets.x;
  cursorY = dets.y;
});

function animateCursor() {
  const ease = 0.15;
  currentX += (cursorX - currentX) * ease;
  currentY += (cursorY - currentY) * ease;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "main",
    ease: Power0.easeOut,
    start: "top 25%",
    end: "top 0",
    scrub: 3
  }
})

tl.to("#page-1 h1", {
  x: -100,
  duration: 1,

}, "anm")

tl.to("#page-1 h2", {
  x: 100,
  duration: 1,

}, "anm")

tl.to("#page-1 #v-container", {
  width: "90%",
  duration: 1,
  ease: Power0.easeOut
}, "anm")

let tl2 = gsap.timeline({
  scrollTrigger: {
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
  scrollTrigger: {
    trigger: "#page-4",
    scroller: "main",
    start: "top 40%",
    end: "top -40%"
  }
})

tl3.to("main", {
  backgroundColor: "#000",
  color: "#fff"
})

const boxes = document.querySelectorAll(".box");

boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    const img = elem.getAttribute("data-image");
    cursor.style.width = "300px";
    cursor.style.height = "240px";
    cursor.style.borderRadius = "10px";
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundImage = `url(${img})`;
  });

  elem.addEventListener("mouseleave", function () {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = "none";
  });

});

let h4 = document.querySelectorAll("#nav-part2 h4")
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    const purple = document.querySelector("#purple")
    purple.style.display = "block"
    purple.style.opacity = "1"

    if (!purple.querySelector('.marquee')) {
      const marquee = document.createElement('div')
      marquee.classList.add('marquee')

      const span1 = document.createElement('span')
      const span2 = document.createElement('span')

      const navText = `${elem.textContent} `.repeat(100)
      span1.textContent = navText
      span2.textContent = navText

      marquee.appendChild(span1)
      marquee.appendChild(span2)
      purple.appendChild(marquee)

      marquee.style.animation = 'none'
      marquee.offsetHeight
      marquee.style.animation = null
    }
  })

  elem.addEventListener("mouseleave", function () {
    const purple = document.querySelector("#purple")
    purple.style.display = "none"
    purple.style.opacity = "0"

    const marquee = purple.querySelector('.marquee')
    if (marquee) {
      purple.removeChild(marquee)
    }
  })
})