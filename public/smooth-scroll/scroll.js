const menuItens = document.querySelectorAll('.navbar a[href^="#"]');

menuItens.forEach(item =>{

    // ta escutando se há um click, se houver ele chama a função scrollToIdOnclick

    item.addEventListener('click', scrollToIdOnclick);

})

function scrollToIdOnclick(event){

    // tira o comportamento padrao do evento
    event.preventDefault();

    // cria uma constante que pega o alvo do evento do click
    const element = event.target;

    const to = getScrollTopByHref(event.target) - 90; 

    scrollToPosition(to)
}

function scrollToPosition(to){

//     window.scroll({

//     top: to,
//     behavior: "smooth",

// });

smoothScrollTo(0, to)

}

function smoothScrollTo(endX, endY, duration) {

const startX = window.scrollX || window.pageXOffset;
const startY = window.scrollY || window.pageYOffset;
const distanceX = endX - startX;
const distanceY = endY - startY;
const startTime = new Date().getTime();

duration = typeof duration !== 'undefined' ? duration : 400;

// Easing function
const easeInOutQuart = (time, from, distance, duration) => {
if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;

};

const timer = setInterval(() => {
const time = new Date().getTime() - startTime;
const newX = easeInOutQuart(time, startX, distanceX, duration);
const newY = easeInOutQuart(time, startY, distanceY, duration);
if (time >= duration) {
  clearInterval(timer);
}
window.scroll(newX, newY);
}, 1000 / 60); // 60 fps
};

function getScrollTopByHref(element){

// cria uma constante que pega o atributo href do elemento
    const id = element.getAttribute('href');

// retorna para a função uma selecão de apenas o atributo do elemento que ta no id, e o .offsettop pega a altura que esse elemento ta do topo
    return document.querySelector(id).offsetTop;

}
