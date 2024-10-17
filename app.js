
const btnHamburger = document.querySelector (".hamburger");
const menuList = document.querySelector (".menu-list");
const menuLinks = document.querySelectorAll ("menu-list a");
const frameImage = document.querySelector ("#frame");
const images = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];

let currentImageIndex = 0;


frameImage.addEventListener ("click" , () => {
currentImageIndex++; //+1

if(currentImageIndex >= 5) {
    currentImageIndex = 0;
}

frameImage.src = "images/" + images [currentImageIndex];

});


btnHamburger.addEventListener ("click" , ()=> {
menuList.classList.toggle ("active");

});

document.addEventListener ("click" , (event) => {
if(!menuList.contains(event.target) && !btnHamburger.contains(event.target)) {
    menuList.classList.remove ("active");
}

});

menuLinks.forEach ((link) => {

   link.addEventListener("click" , ()=> {
    menuList.classList.remove ("active");

   });

});