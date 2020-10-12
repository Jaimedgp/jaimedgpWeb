let title = document.getElementById("Title");
let description = document.getElementById("description");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    title.style.top = -value*0.5 + 'px';
    description.style.top = -value*0.5 + 'px';
})
