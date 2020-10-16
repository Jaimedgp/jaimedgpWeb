let title = document.getElementById("Title");
let description = document.getElementById("description");
let homeSec = document.getElementById("descriptionSec");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    title.style.top = -value*0.75 + 'px';
    description.style.top = -value*0.75 + 'px';

    homeSec.style.top = value*0.3 + 'px';
})
