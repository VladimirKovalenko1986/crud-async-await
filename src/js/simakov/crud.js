import { addNewTask, handleTaskBehaviour, fillTasksList } from './functions';

const addBtn = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');

addBtn.addEventListener('click', addNewTask);
myUL.addEventListener('click', handleTaskBehaviour);
window.addEventListener('DOMContentLoaded', fillTasksList);
