const btn = document.querySelector('.btn');
const inputTaskE = document.getElementById('input-task');
const bodyItem = document.querySelector('.body-item');
const errorE = document.querySelector('.error-cont');

btn.addEventListener("click", addNewTask);
bodyItem.addEventListener("click", onDelete);
bodyItem.addEventListener("click", changeColor);
inputTaskE.addEventListener('keyup', validateToDo);
btn.disabled = true;

function validateToDo(e){
    if (!e.target.value.trim()) {
        errorE.innerText = "";
        btn.disabled = true;

        return;
    }
    if (e.target.value.trim().length <= 3) {
        errorE.innerText = "Error, length should be > 3";
        btn.disabled = true;
        
        return;
    }
    errorE.innerText = "";
    btn.disabled = false;
    EnterTask(e);
}
function addNewTask(){
    const taskE = inputTaskE.value;
    const el = createNewElement(taskE, 'div', 'item-task', 'close-btn' );
    addHtml(bodyItem, el);
    clearValue(inputTaskE);
}
function EnterTask(e){
    if ( e.keyCode === 13) {
        addNewTask();
    }
} 
function createNewElement (taskE, containerTag, itemClassname, btnClassName){
    return `<${containerTag} class="${itemClassname}">
                ${taskE}
                <button class="${btnClassName}"></button>
            </${containerTag}>`
}
function addHtml(el, val){
    el.innerHTML += val;
    btn.disabled = true;
}
function clearValue(inpValue){
    inpValue.value = '';
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
