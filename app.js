// Efecto de cambio de imagen
function changeProfilePicture(){
    let image = document.getElementById('profile-picture');
    image.addEventListener("mouseover", function() {
        image.src = "/images/profile-picture3.jpg";
    });
    image.addEventListener("mouseout", function() {
        image.src = "/images/profile-picture.jpg";
    });
}

// Mostrar más información en la sección de My Portfolio
function knowMoreButton(){
    let btns = document.querySelectorAll('.btn-more');
    let contentsMore = document.querySelectorAll('.content-more');
    let exitBtns = document.querySelectorAll('.exit-btn');

    btns.forEach(function(btn, index) {
        btn.addEventListener("click", function(event){
            event.preventDefault();
            contentsMore[index].style.display = "flex";    
        });
    });

    exitBtns.forEach(function(exitBtn, index) {
        exitBtn.addEventListener("click", function(event){
            event.preventDefault();
            contentsMore[index].style.display = "none";
        });    
    });

}

// Mensaje de "Enviado con éxito" en el formulario
function sendMessage(){
    let btnForm = document.getElementById('btn-send');
    let form = document.getElementById('contact-me');

    btnForm.addEventListener("click", function(event) {
        event.preventDefault();
        let pElement = document.createElement('p');
        pElement.textContent = "¡Enviado con éxito!";
        form.appendChild(pElement);

        setTimeout(function() {
            pElement.style.opacity = 0;

            pElement.addEventListener('transitionend', function() {
                pElement.remove();
            })
        }, 1000);

    });
}

const cardsWidth = 323.2;
let index = 0;

// Slider para las cards en la sección "What I Do"
function cardsSlider(direction) {
    let slider = document.querySelector('.features-container');
    let cards = document.querySelectorAll('.features-container .feature');
    let btnPrev = document.getElementById('btn-prev');
    let btnNext = document.getElementById('btn-next');

    index += direction;

    if (index < 0) 
    {
        index = cards.length / 2;
    }
    else if (index > cards.length / 2)
    {
        index = 0;
    }

    if (index == cards.length / 2){
        btnNext.style.display = 'None';
    }
    else if (index == 0){
        btnPrev.style.display = 'None';
    }
    else{
        btnPrev.style.display = "inline";
        btnNext.style.display = "inline";
    }

    let displacement = -index * cardsWidth;

    cards.forEach((card) => {
        card.style.transform = `translateX(${displacement}px)`;
    });
}


cardsSlider(0);


changeProfilePicture();

knowMoreButton();   

sendMessage();