var about = document.getElementById("aboutLink");
var work = document.getElementById("workLink");
var services = document.getElementById("servicesLink");
var blog = document.getElementById("blogLink");

var loop = anime({
    targets: '#loop .box1',
    translateX: 4000,
    loop: true,
    duration: 6000,
    easing: 'linear',
    direction: 'alternate'
});

var loop = anime({
    targets: '#loop .box2',
    translateX: 4000,
    loop: true,
    duration: 5000,
    easing: 'linear',
    direction: 'alternate'
});

var loop = anime({
    targets: '#loop .box3',
    translateX: 4000,
    loop: true,
    duration: 7000,
    easing: 'linear',
    direction: 'alternate'
});

about.addEventListener("mouseover", function() {
    anime.remove("#about .el");
    anime({
        targets: '#about .el',
        translateY: -5,
        opacity: 1,
        duration: 250,
        easing: 'linear'
    });
});

about.addEventListener("mouseout", function() {
    anime.remove("#about .el");
    anime({
        targets: '#about .el',
        translateY: 0,
        opacity: 0,
        duration: 250,
        easing: 'linear'
    });
});

work.addEventListener("mouseover", function() {
    anime.remove("#work .el");
    anime({
        targets: '#work .el',
        translateY: -5,
        opacity: 1,
        duration: 250,
        easing: 'linear'
    });
});

work.addEventListener("mouseout", function() {
    anime.remove("#work .el");
    anime({
        targets: '#work .el',
        translateY: 0,
        opacity: 0,
        duration: 250,
        easing: 'linear'
    });
});

services.addEventListener("mouseover", function() {
    anime.remove("#services .el");
    anime({
        targets: '#services .el',
        translateY: -5,
        opacity: 1,
        duration: 250,
        easing: 'linear'
    });
});

services.addEventListener("mouseout", function() {
    anime.remove("#services .el");
    anime({
        targets: '#services .el',
        translateY: 0,
        opacity: 0,
        duration: 250,
        easing: 'linear'
    });
});

blog.addEventListener("mouseover", function() {
    anime.remove("#blog .el");
    anime({
        targets: '#blog .el',
        translateY: -5,
        opacity: 1,
        duration: 250,
        easing: 'linear'
    });
});

blog.addEventListener("mouseout", function() {
    anime.remove("#blog .el");
    anime({
        targets: '#blog .el',
        translateY: 0,
        opacity: 0,
        duration: 250,
        easing: 'linear'
    });
});