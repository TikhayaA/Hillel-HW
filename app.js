const adminName = document.getElementById("admin-name");
const adminLastName = document.getElementById("admin-last-name");
const adminNumber = document.getElementById("admin-number");
const tableList = document.querySelector(".table__list");
const btn = document.querySelector(".admin__btn");


btn.addEventListener("click", addTable);

function addTable(){

    const listName = adminName.value;
    const listlastName = adminLastName.value;
    const listNumber = adminNumber.value;

    if (!listName.trim() || !listlastName.trim() || !listNumber.trim()){
        alert('Please fill empty field!');
        return;
    }


    const newContact = document.createElement('li');
    const newItemName = document.createElement('div');
    const newItemLastName = document.createElement('div');
    const newItemNumber = document.createElement('div');


    if ( /[A-Za-z]/.test(adminName.value) && /[A-Za-z]/.test(adminLastName.value) && /[0-9]/.test(adminNumber.value)) {

        addHtml(newItemName, adminName);
        addHtml(newItemLastName, adminLastName);
        addHtml(newItemNumber, adminNumber);

        createChild(newContact, newItemName);
        createChild(newContact, newItemLastName);
        createChild(newContact, newItemNumber);
        createChild(tableList, newContact);

        newContact.classList.add('table__item');

        clearValue(adminName);
        clearValue(adminLastName);
        clearValue(adminNumber);
        
    } else {
       alert ('input error');
   }
}
function createChild(p, ch){
    p.appendChild(ch);
}

function addHtml(el, val){
    el.innerHTML = val.value;
}

function clearValue(inpValue) {
    inpValue.value = "";
}