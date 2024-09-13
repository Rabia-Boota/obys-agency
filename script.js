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
}, 33)
    }
})
tl.to(".line h2",{
    animationName:"loaderAnime",
    opacity:1
})
tl.to("#loader", {
    opacity:0,
    duration:0.2,
    delay:4
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    // opacity:0,
    duration:0.6,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})    
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:140,
    stagger:0.2
})
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

// heroLoadingAnimation();
loaderLoadingAnimation();
cursorAnimation();