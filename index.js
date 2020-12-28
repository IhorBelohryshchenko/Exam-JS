const taskList = document.getElementById('root');
const inputTask = document.createElement('input');
const inputField = document.createElement('div');
inputField.className = 'inputfield';
inputTask.type = 'text';
inputTask.className = 'input';
inputField.append(inputTask);
const addTask = document.createElement('button');
addTask.innerText = '+';
addTask.className = 'btn';
inputField.append(addTask);
taskList.append(inputField);
const newList = document.createElement('div');
newList.className = 'tasks';
document.body.append(newList);



const createTaskList = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox';
    checkBox.type = 'checkbox';
    const newTask = inputTask.value;
    const taskBtn = document.createElement('button');
    taskBtn.innerText = 'X';
    taskBtn.className = 'delete';
    taskBtn.addEventListener('click', () => {
        wrapper.remove();
    });
    wrapper.append(checkBox, newTask, taskBtn);
    newList.append(wrapper);
    return wrapper;        
};

addTask.addEventListener('click', createTaskList);