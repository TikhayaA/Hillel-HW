const inputsE = document.querySelectorAll('inputs-user');

const name = document.getElementById("name");
const lastName = document.getElementById("last-Name");
const phone = document.getElementById("phone");

const formList = document.querySelector(".form--list-wrap");
const btn = document.querySelector(".form--btn");


btn.addEventListener("click", addTable);

function addTable(){ 

    const listName = name.value;
    const listlastName = lastName.value;
    const listNumber = phone.value;

    if (!listName.trim() || !listlastName.trim() || !listNumber.trim()){
        alert('Please fill empty field!');
        clearValue(inputsE);
        return;
    }
    const el = createContactElement(listName, listlastName, listNumber, 'li', "item-list");
    addHtml(formList, el);
    clearValue(inputsE);

}
function createContactElement(name, lastName, phone,containerTag, containerClassname){
    return `<${containerTag} class="${containerClassname}">
                <div>${name}</div>
                <div>${lastName}</div>
                <div>${phone}</div>
            </${containerTag}>`
}

function addHtml(el, val){
    console.log(el,val)
    el.innerHTML += val;
}

function clearValue(inpValue) {
    inpValue.value = "";
}