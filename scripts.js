
// *1
let enlace = document.querySelector("a");
for (let i = 0; i < enlace.length; i++) {
    enlace[i].href = ''  
}

// *2.1
const IMAGENES = document.querySelectorAll('img');
for (let i = 0; i < IMAGENES.length; i++) {
    IMAGENES[i].addEventListener('click', ()=>{
            IMAGENES[i].src = "magic-1.gif";   
    })
}

// *2.2
const TEXT = document.getElementsByTagName('p');
TEXT.addEventListener('click', () => {
for (let i = 0; i < TEXT.length; i++) {
    TEXT[i].style.color = 'green';
    TEXT[i].style.backgroundColor = 'yellow';
}})

// *2.3
let SECTION_TAG = document.getElementsByTagName('section');
let ARTICLE_TAG = document.getElementsByTagName('article');
SECTION_TAG.addEventListener('click', ()=>{
    SECTION_TAG.style.backgroundColor = 'yellow';
    SECTION_TAG.style.color = 'blue';
})
ARTICLE_TAG.addEventListener('click', ()=>{
    ARTICLE_TAG.style.backgroundColor = 'green';
    ARTICLE_TAG.style.color = 'white';
})


// *3.1
const IMAGES = document.getElementsByTagName('img');
IMAGES.addEventListener('mouseover', mouseOverImages);
const mouseOverImages = () => {
    IMAGES.src = "magic-1.gif"; 
}

// *3.2
const PARRAFOS = document.getElementsByTagName('p')
PARRAFOS.addEventListener('mouseover', mouseOverParrafos)
const mouseOverParrafos = () =>{
    PARRAFOS.style.color = 'yellow';
    PARRAFOS.style.backgroundColor = 'purple'
}

// *3.3 y 5
let SECTION_TAG = document.getElementsByTagName('section');
let ARTICLE_TAG = document.getElementsByTagName('article');
SECTION_TAG.addEventListener('mouseover', ()=>{
    SECTION_TAG.style.backgroundColor = getRandomColor;
    SECTION_TAG.style.color = getRandomColor;
})
ARTICLE_TAG.addEventListener('mouseover', ()=>{
    ARTICLE_TAG.style.backgroundColor = getRandomColor;
    ARTICLE_TAG.style.color = getRandomColor;
})


// *4
let colors = ['E63946','F1FAEE', 'A8DADC', '457B9D', '1D3557', 'e9c46a'];
const getRandomColor = (colors) => {
    let colorAleatorio = colors[Math.floor(Math.random() * colors.length)];
    return colorAleatorio;
}