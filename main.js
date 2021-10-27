const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const list = document.querySelector('.list')


const TODOS_Ls = "toDos";
let toDos = [];

function deleteBtn(event){
    const btn = event.target;
    const li = btn.parentNode.parentNode;
    list.removeChild(li);

    const cleanToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos(toDos); 
}

function saveToDos(){
    localStorage.setItem(TODOS_Ls, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const newId = toDos.length + 1 ;
    li.classList.add('list__item');
    btn.classList.add('list__btn');
    li.innerHTML = text;
    btn.innerHTML = `<i class="fas fa-candy-cane"></i>`
    btn.addEventListener('click',deleteBtn);
    list.append(li);
    li.append(btn);
    li.id = newId;
    const toDoObj = {
        text,
        id: newId,
    }
    li.scrollIntoView({block : 'center'});
    toDos.push(toDoObj);
    saveToDos(toDos);
}

const listBtn = document.querySelector('.list__btn');

function handleSubmit(event){
    event.preventDefault();
    if(input.value == ''){
        return;
    }
    const currentValue = input.value;
    paintToDo(currentValue);
    input.value = '';
    input.focus();

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_Ls);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(todo => {
            paintToDo(todo.text);
        })
    }
}
function init(){
    loadToDos();
    input.focus();
    form.addEventListener('submit', handleSubmit);
}

init();