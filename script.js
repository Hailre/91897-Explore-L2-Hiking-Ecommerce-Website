//Home Page Navbar Functionality//
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}
// Var storing multiple selectors' data //
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

//JS For Product Details - Switches small preview Icon to main image//
window.onload = function(){
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;

}
smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;

}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;

}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
}
};