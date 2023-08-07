const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
    this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;  
    })
}
circleMouseFollower();
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:2,
        ease: Expo.easeInOut
        })
    .to(".boundingelem",{
        y:0,
        duration:2,
        stagger:.2,
        delay:-1,
        ease: Expo.easeInOut
    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
}
firstPageAnim();


this.document.querySelectorAll(".elem")
.forEach(function(elem){
   elem.addEventListener("mousemove",function(dets){
     gsap.to(elem.querySelector('img'),{
        opacity: 1,
        ease:Power1,
     });    
   });
});
    