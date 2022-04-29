import deleteTask, { clearfield } from './delete.js';
// import { clearfield } from './delete.js';

const container = document.querySelector('.container');
export default class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
/* ---------Populate tasks on the page -----------*/

export const populate = (task) => {
  const wrapper = document.createElement('ul');
  wrapper.classList.add('wrapper');

  const li = document.createElement('li');
  li.classList.add('list-item');
  const horizontal = document.createElement('hr');
  li.appendChild(horizontal);

  const box = document.createElement('input');
  box.setAttribute('type', 'checkbox');
  const title = document.createElement('span');
  title.classList.add('title');
  title.innerHTML = task.description;
  const option = document.createElement('i');
  option.classList.add('option');

  wrapper.appendChild(li);
  li.append(box, title, option);
  container.append(wrapper);
};

/* -----Add tasks to the UI--------- */
export function addTask() {
  const addBtn = document.querySelector('.add');
  addBtn.addEventListener('click', () => {
    const input = document.querySelector('.task-to-add').value;
    if (input === '') {
      return false;
    }
    const task = new Task(input, false, tasks.length + 1);
    populate(task);
    clearfield();
    tasks.push(task);
    deleteTask();
    return localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}
addTask();
/* ----------------Get populate element from the localStorage ------- */

tasks.forEach((task) => {
  populate(task);
});

deleteTask();