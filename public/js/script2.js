const scroll2 = new LocomotiveScroll({
    el: document.querySelector('.outerProjectDiv'),
    smooth: true,
    lerp:0.03
});

let innerProjects = document.querySelectorAll(".innerProjectDiv");
let overlay = document.querySelectorAll(".innerProjectDivOverlay");



for(let e of overlay){
    e.addEventListener("mouseenter",(dets)=>{
        e.style.opacity = 1;
    })
    e.addEventListener("mousemove",(dets)=>{
        e.style.opacity = 1;
    })
    e.addEventListener("mouseleave",(dets)=>{
        e.style.opacity = 0;
    })
}

















const cross = document.querySelector(".cross");
const open = document.querySelector(".open i");
const navbar = document.querySelector("#navbar");
const close = document.querySelectorAll(".close");
const outerFlash = document.querySelectorAll(".flash-outer");
cross.addEventListener("click",(event)=>{
    // navbar.style.top = "-100%";
    gsap.to("#navbar",{
        top:"-100%",
        duration:0.5
    });
    open.style.opacity = 1;

});
open.addEventListener("click",(event)=>{
    // navbar.style.top = "0";
    gsap.to("#navbar",{
        top:"0",
        duration:0.5
    });
    open.style.opacity = 0;

});


close.forEach((e) => {
    e.addEventListener("click",(event)=>{
        outerFlash.forEach((el)=>{
            el.style.display = "none";
        })
    })
});