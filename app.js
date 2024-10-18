
const btnHamburger = document.querySelector (".hamburger");
const menuList = document.querySelector (".menu-list");
const menuLinks = document.querySelectorAll ("menu-list a");
const frameImage = document.querySelector ("#frame");
const images = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];
const btnOpenForm = document.querySelector("#btn-open-form");
const modal = document.querySelector(".modal");
const contactForm = document.querySelector ("#contact-form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector ("#email");
const inputMessage = document.querySelector ("#message");

contactForm.addEventListener ("submit" , (event) => {
event.preventDefault ();

const name = inputName.value;
const email = inputEmail.value;
const message = inputMessage.value;

localStorage.setItem ("userName", JSON.stringify(name));
localStorage.setItem ("userEmail", JSON.stringify(email));
localStorage.setItem ("userMessage", JSON.stringify(message));

});

btnOpenForm.addEventListener("click" , () => {
    modal.style.display = "block";
});

window.onclick = (Event) => {
    if(Event.target == modal) {
        modal.style.display = "none";
    }
}

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