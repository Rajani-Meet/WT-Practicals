document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const clearTasksButton = document.getElementById('clear-tasks');
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    };
    const addTaskToDOM = (taskText, isCompleted) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        if (isCompleted) {
            span.classList.add('completed');
        }
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            span.classList.toggle('completed');
            updateLocalStorage();
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
            updateLocalStorage();
        });
        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    };

    const updateLocalStorage = () => {
        const tasks = [];
        document.querySelectorAll('li').forEach(li => {
            const span = li.querySelector('span');
            tasks.push({
                text: span.textContent,
                completed: span.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === '') return;
        addTaskToDOM(taskText, false);
        updateLocalStorage();
        input.value = '';
    });
    clearTasksButton.addEventListener('click', () => {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    });
    loadTasks();
});