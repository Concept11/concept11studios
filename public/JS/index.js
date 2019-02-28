
//change positioning of elements on window width 
$(window).on("load resize", function(){
    if($(window).width() < 768){
        $(".header, .header > ul").addClass("flex-column justify-content-center")
        $(".header > button").css({'position': 'relative', 'right': 'auto', 'margin-top': '2rem', 'opacity': '0'})
        $(".header > ul").css({'left': 'auto', 'width': 'auto', 'opacity': '0'})
    }else{
        $(".header > ul").removeClass("flex-column")
        $(".header").removeClass("flex-column justify-content-center")
        $(".header > ul, .header > button").css({'opacity': '1', 'visibility': 'visible', 'display': 'flex', 'transition': 'all .5'})
        $(".header > button").css({'position': 'absolute','right': '2rem', 'margin-top': '0'})
        //position header ul at left edge of image and right edge of contact then justify content center
        //for responsive header ul that is always centered between the button and image
        var ulWidth = $(".header").outerWidth() - ($(".header > img").outerWidth() + $(".header > button").outerWidth() + 64)
        var ulLeft = $(".header > img").outerWidth() + 32 //2rem
        $(".header > ul").css({'width': ulWidth, 'left': ulLeft})
    }
})
//animate back up when any link is pressed
$(".nav-item").click(function(){
    $(".header").animate({height: '7rem'}, 250, 'linear')
    $(".header > button, .header > ul").css({'display': 'none', 'visibility': 'hidden'}).animate({opacity: 0})
})

//animate changes on hamburger press
$(".fa-bars").click(function(){
    $(".fa-bars").toggleClass("active")
    var active = $(".fa-bars").hasClass("active")
    if(active){
        $("body").css("overflow-y", "hidden")
        $(".header").animate({height: '100vh'},250, 'linear')
        $(".header > button, .header > ul").css({'display': 'flex', 'visibility': 'visible'}).animate({opacity: 1}, 900)
    }else{
        $("body").css("overflow-y", "scroll")
        $(".header").animate({height: '7rem'}, 250, 'linear')
        $(".header > button, .header > ul").css({'display': 'none', 'visibility': 'hidden'}).animate({opacity: 0}, 250, 'linear')
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