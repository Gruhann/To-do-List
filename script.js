document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task) {
        addTask(task);
        input.value = '';
        input.focus();
    }
});

function addTask(task) {
    const todoList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(removeBtn);
    todoList.appendChild(listItem);
}
