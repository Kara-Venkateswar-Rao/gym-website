var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursorblr");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrblur.style.left = dets.x-150+"px";
    crsrblur.style.top = dets.y-150+"px";

})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

elem.addEventListener("mouseleave", function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid grey"
    crsr.style.backgroundColor = "transparent"
})
})
gsap.to("#nav",{
    backgroundColor: "grey",
    duration: 0.5,
    height: 90,
    scrollTrigger:{
        trigger: "#nav",
        scroll: "body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.4,
    opacity:0,
    duration:1,
    stragger:0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
       
        scrub:1
    }
})

gsap.from("#collon1",{
    y:-50,
    scrollTrigger:{
    x:-50,
        trigger:"#collon1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 55%",
        scrub:6
    }
})
gsap.from("#collon2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#collon1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 55%",
        scrub:6
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:3
    }
})


