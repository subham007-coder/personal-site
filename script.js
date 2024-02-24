const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.05
});

gsap.from('.ani', {
    x: -1700,
    duretion: 0.5,
    delay: 0.5,
    stagger: 1
});

