const btn = document.querySelector('.btn');
const inputTaskE = document.getElementById('input-task');
const bodyItem = document.querySelector('.body-item');

btn.addEventListener("click", addNewTask);
bodyItem.addEventListener("click", onDelete);
bodyItem.addEventListener("click", changeColor);

function addNewTask(){
    const taskE = inputTaskE.value;

    if (!taskE.trim()){
        alert('Please fill empty field!');
        clearValue(inputTaskE);
        return;
    }
    const el = createNewElement(taskE, 'div', 'item-task', 'close-btn' );
    addHtml(bodyItem, el);
    clearValue(inputTaskE);
}

function createNewElement (taskE, containerTag, itemClassname, btnClassName){
    return `<${containerTag} class="${itemClassname}">
                ${taskE}
                <button class="${btnClassName}"></button>
            </${containerTag}>`
}
function addHtml(el, val){
    el.innerHTML += val;
}
function clearValue(inpValue){
    inpValue.value = "";
}
function onDelete(event){
    if (event.target.className === 'close-btn'){
        event.target.closest('.item-task').remove();
    }
}

function changeColor(event){
    if (event.target.className !== 'close-btn'){
        event.target.closest('.item-task').classList.toggle('item-task-done');
    }
}