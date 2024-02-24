const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.05
});

gsap.from('.ani', {
    x: -1700,
    duretion: 0.2,
    delay: 0.5,
    stagger: 1
});

gsap.from('.ani2', {
    x: -1700,
    duretion: 2,
    delay: 2,
    stagger: 1
});


// hambergar
// let option = document.querySelector(".hambarger");
// let nav1 = document.querySelector(".nav-part1");

// option.addEventListener("click", () => {
//     if (option.classList == "hambarger") {
//         option.classList.add("add");
//         nav1.style.visibility = "visible"
//     } else{
//         option.classList = "hambarger";
//         nav1.style.visibility = "hidden"
//     }
// });