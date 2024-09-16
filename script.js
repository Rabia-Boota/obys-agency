// LOADER EFFECT....... 17:02
// GSAP lgaya, gsap cdn sy 1st and 2nd last wala copy kr k paste kia script k upr

// is code ko neechy ly gaye
// gsap.from(".line h1", {
//     y:150,
//     stagger:0.25,
//     duration:0.6,
//     delay:0.5
// })

// example 19:04

// counter............25:04
// setInterval name ki property hoti hai, ye ap k ksi b kaam ko ek particular interval k bad krti hai, 
// setTimeout mtlb delay
// setInterval mtlb loop ... mtlb ye ek triqy ka loop bnaty mgr ek particular interval k bad bnaty jesy

// var h5timer = document.querySelector("#line1-part1 h5")
// var grow = 0
// setInterval(function(){
//     // console.log("Hello")
//     if(grow<100){
//         // grow++
//         // console.log(grow)
//         h5timer.innerHTML = grow++
//     } else{
//         // grow = 100
//         // console.log(grow)
//         h5timer.innerHTML = grow
//     }
// }, 33)





// var tl = gsap.timeline()
// tl.from(".line h1", {
//     y:150,
//     stagger:0.25,
//     duration:0.6,
//     delay:0.5,
// });
// tl.from("#line1-part1",{
//     opacity:0,
//     onStart:function(){
//         var h5timer = document.querySelector("#line1-part1 h5")
// var grow = 0;
// setInterval(function(){
//     if(grow<100){
//         h5timer.innerHTML = grow++
//     } else{
//         h5timer.innerHTML = grow
//     }
// }, 33)
//     }
// })
// tl.to(".line h2",{
//     animationName:"anime",
//     opacity:1
// })
// tl.to("#loader", {
//     opacity:0,
//     duration:0.2,
//     delay:4
// })

// // Completing Loader ........ 35:15
// tl.from("#page1",{
//     delay:0.2,
//     y:1600,
//     opacity:0,
//     duration:0.5,
//     ease:Power4
// })
// tl.to("#loader",{
//     display:"none"
// })

// Applying Favicon............. 50:20
// upr k sary code ko function mei daal dia k jb chahy call kr k chla lo, jb chahy call na kro.
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loaderLoadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1", {
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
});
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
var grow = 0;
setInterval(function(){
    if(grow<100){
        h5timer.innerHTML = grow++
    } else{
        h5timer.innerHTML = grow
    }
}, 33);
    }
});
tl.to(".line h2",{
    animationName:"loaderAnime",
    opacity:1
});
tl.to("#loader", {
    opacity:0,
    duration:0.2,
    delay:4
});

tl.from("#page1",{
    delay:0.2,
    y:1600,
    // opacity:0,
    duration:0.6,
    ease:Power4
});
tl.to("#loader",{
    display:"none"
});
tl.from("#nav",{
    opacity:0
});   
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:140,
    stagger:0.2
});
tl.from("#hero1 #page2",{
    opacity:0
}, "-=1.2" );
}

// function heroLoadingAnimation(){
//     var tl = gsap.timeline()
// tl.from("#nav",{
//     opacity:0
// })    
// tl.from(".hero h1",{
//     y:120,
//     stagger:0.2
// })
// }

function cursorAnimation(){
    // facicon.io py jaa k 
document.addEventListener("mousemove",function(dets){
    // console.log("hello")
    // console.log(dets.x)
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4");
}


locomotiveAnimation()
// heroLoadingAnimation();
loaderLoadingAnimation();
cursorAnimation();
sheryAnimation()