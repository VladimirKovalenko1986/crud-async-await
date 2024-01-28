import { saveTask, loadTasks, updateTask, daleteTask } from './api';

const myInput = document.getElementById('myInput');
let currentId = 1;

function addNewTask() {
  const inputValue = myInput.value.trim();
  if (!inputValue) {
    alert('You must write something!');
    return;
  }
  createLi(inputValue);
  myInput.value = '';
  addTaskToDB(inputValue);
}

function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement('li');

  // це можно замінити на textContent
  const liText = document.createTextNode(text);
  liEl.appendChild(liText);
  liEl.dataset.id = id;
  if (isDone) {
    liEl.className = 'checked';
  }
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}

function handleTaskBehaviour({ target }) {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');

    updateTask(target.dataset.id, target.classList.contains('checked'));
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    daleteTask(target.parentNode.dataset.id);
  }
}

const createTaskObject = (text, isDone) => ({ text, isDone });

function addTaskToDB(text, isDone = false) {
  const newTask = createTaskObject(text, isDone);
  saveTask(newTask);

  currentId += 1;
}

function fillTasksList() {
  loadTasks()
    .then(todos => {
      todos.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
      console.log(todos);
      return todos;
    })
    .then(todos => {
      currentId =
        todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
    });
}

// Додаємо функцію крестику
function addCloseButton(li) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
