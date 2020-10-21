let description = document.getElementById("hola");
let homeSec = document.getElementById("home");
var init = screen.height*0.1;

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    description.style.top = -value*0.75 + 'px';

    homeSec.style.top = -init + value*0.3 + 'px';
})
