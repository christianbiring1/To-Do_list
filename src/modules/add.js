export default class Task {
  constructor(desrciption, completed = false, index) {
    this.desrciption = desrciption,
    this.completed = completed,
    this.index = index,
  }
};

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

/* -----Add tasks to the UI--------- */

export function addTask() {
  const addBtn = document.querySelector('.add');
  addBtn.addEventListener('click', () => {
    const value = document.querySelector('input[type = "text"]').value;
    if (value === '') {
      return false;
    }
    const task = new Task(value, false, tasks.length + 1);
    populate(task);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    clearfield();
  });
}
addTask();

function clearfield() {
  let value = document.querySelector('input[type = "text"]');
  value.value = '';
};

tasks.forEach((task) => {
  populate(task);
})

export { tasks };