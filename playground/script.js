const buttons = document.querySelectorAll('.button');
const slides = ["./nature1.jpg", "./nature2.jpg", "./nature3.jpg"];
let numbSlide = 0;


//Affiche l'image
const showSlide = (num) => {
    document.querySelector('.slider-image').style.backgroundImage = `url(${slides[num]})`; 
}

//Test de la position
const changeSlide = (selectedSlide) => {
    if(selectedSlide < 0) {
        selectedSlide = slides.length-1;
    }
    else if(selectedSlide >= slides.length) {
        selectedSlide = 0;    
    }
    showSlide(selectedSlide);        
}

const testSlide = function(ev) {    
    const button = ev.target;

    if(button.classList.contains('prevSlide')) {
        numbSlide --;
        changeSlide(numbSlide);
    }
    else if(button.classList.contains('nextSlide')) {
        numbSlide ++;
        changeSlide(numbSlide);
    }
}

// Ecoute du bouton sur lequel l'utilisateur a appuyé
buttons.forEach((button) => {
    
    button.addEventListener('click', testSlide);
})
