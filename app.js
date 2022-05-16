const btnE = document.querySelector('.btn');
const inpE = document.querySelector('.inp');
const listE = document.querySelector('.list');



btnE.addEventListener("click", onClick);

function onClick(){
    let liE = document.createElement('li');
    liE.innerHTML = inpE.value;
    listE.appendChild(liE);
    inpE.value = "";
    console.log(liE);

}

