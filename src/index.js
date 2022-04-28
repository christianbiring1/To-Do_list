import './style.css';
import './asset/ellipsisverticalsolid.svg';

const container = document.querySelector('.container');

const tasks = [
  {
    description: 'Finish up the project',
    completed: false,
    index: 1,
  },
  {
    description: 'Start new project',
    completed: false,
    index: 2,
  },
  {
    description: 'Joggling',
    completed: false,
    index: 3,
  },
];

const populate = () => {
  tasks.forEach((task) => {
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
    // option.innerHTML = '+++';
    option.classList.add('option');

    wrapper.appendChild(li);
    li.append(box, title, option);
    container.append(wrapper);
  });
};
populate();
