let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemDate = document.getElementById('itemDate').value;
    const priority = document.getElementById('priority').value;
    const newItem = {
        name: itemName,
        date: itemDate,
        priority: priority,
        completed: false
    };
    todoList.push(newItem);
    saveTodoList();
    renderTasks();
}
   