
let nextBtn = document.querySelector('.boton-next')
nextBtn.addEventListener("click",function(){
    if(c == 1) {
         poPng.style.display = "block"
         poImg.style.display = "none"
         text = secondText
         nextBtn.style.display = "none";
         document.querySelector('.po-words').innerHTML = "" 
          texto ();

         
    } else if( c == 2) {
         poPng.style.display = "block"
         poImg.style.display = "none"
         text = thirdText;
         nextBtn.style.display = "none";
         document.querySelector('.po-words').innerHTML = "" 
         texto ();
        } else if(c == 3) {
            window.location.href = 'html/home.html';

    }

     
})

//acordeon xd 

document.querySelectorAll('.acordeon-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});

// textos constantes 
let text = `¡Hola y bienvenido! Soy Po, tu guía en este emocionante viaje de crecimiento personal. Mi misión es ayudarte a explorar tus fortalezas, enfrentar desafíos y descubrir nuevas posibilidades dentro de ti. Juntos, vamos a transformar cada obstáculo en una oportunidad para brillar más fuerte. Prepárate para un camino lleno de aprendizajes y descubrimientos.`;
let secondText = `Para comenzar te explicare las ventajas del crecimiento personal, El crecimiento personal mejora nuestra autoestima, fortalece la resiliencia, y desarrolla nuevas habilidades, lo que facilita el logro de metas y enriquece nuestras relaciones. En conjunto, estos beneficios contribuyen a una vida más equilibrada y satisfactoria. Todo entendido?`;
let thirdText = `Muy bien, entonces ahora veamos mas a profundidad como crecer mentalmente y fisicamente.`;

// variables xd  
let btnNext = document.querySelector(`.boton-next`);
let index = 0;
let c = 0;
let poPng = document.querySelector('.po-png');
let poImg = document.querySelector('.po-img');

// funcion que muestra el tecto del panda

function texto () {

if (index < text.length) {
     document.querySelector('.po-words').innerHTML += text.charAt(index);
     index++;
     setTimeout(texto, 10) 
    } else { 
        btnNext.style.display = "flex"; 
        c++;
        index = 0;
        texto2(c);
    }    

   
} 

function texto2(c) {

    if (c == 1) {
        poPng.style.display = "none"
        poImg.style.display = "block"
        btnNext.style.marginTop = "5.5rem";
        btnNext.innerHTML = "Hola Po, estoy listo para comenzar"
         
    } else if (c == 2) {
        poPng.style.display = "none"
        poImg.style.display = "block"
        btnNext.style.marginTop = "4.45rem";
        btnNext.innerHTML = "sí, todo entendido, sigamos"
        
    } else if (c == 3) {
        poPng.style.display = "none"
        poImg.style.display = "block"
        btnNext.style.marginTop = "2.17rem";
        btnNext.innerHTML = "okam, vamos!!";
    
    }
}

texto()