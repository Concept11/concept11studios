
$(".fa-bars, .nav-item").click(function(){
    $(".fa-bars").toggleClass("active")
    active = $(".fa-bars").hasClass("active")
    if(active){
        $('body').css("overflow-y", "hidden")
        $(".header").css({'height': '100vh', 'transition': 'height .6s'})
            .addClass("flex-column justify-content-center").removeClass("justify-content-around")
        $(".main-nav, .contact").addClass("on flex-column align-items-center").removeClass("off").animate({opacity: 1},600).css("margin-bottom", "2rem")
    }else{
        $(".contact").css("margin-top", "0")
        $('body').css("overflow-y", "scroll")
        $(".header").css({'height': '7rem', 'transition': 'height .6s'})
            .addClass("justify-content-around").removeClass("flex-column justify-content-center")
        $(".main-nav, .contact").addClass("off").removeClass("on flex-column align-items-center").animate({opacity: 0},600).css("margin-bottom", "0")
    }
})

$(window).resize(function(){
    if($(window).width() >= 768){
        $(".main-nav, .contact").addClass("on").removeClass("off").animate({opacity: 1},300)
    }else{
        $(".main-nav, .contact").addClass("off").removeClass("on").animate({opacity: 0},300)
    }
})

//animations
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