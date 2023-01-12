const basketImg = document.querySelector('#basket');
const basketLink = document.querySelector('.basket-link');

let isShowEmptyBasket = true;

function counterBlock() {
    const counter = document.createElement('div');

    counter.innerHTML = '10';
    counter.classList.add('counter-block');
    
    return counter;
}

function emptyBasket() {
    document.querySelector(".counter-block").remove();

    return './assets/img/basket-empty.png';
}

function fillBasket() {
    basketLink.appendChild(counterBlock());

    return './assets/img/basket-fill.png';
}

basketImg.addEventListener('click', () => {
    isShowEmptyBasket = !isShowEmptyBasket;

    basketImg.src = isShowEmptyBasket ? emptyBasket() : fillBasket();
})