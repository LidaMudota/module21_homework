window.onload = function() {
  document.getElementById('getTasksButton').onclick = async function() {
    const userId = document.getElementById('userIdInput').value;
    const taskList = document.getElementById('taskList');
    const errorMessage = document.getElementById('errorMessage');
    taskList.innerHTML = '';
    errorMessage.innerText = '';

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
      
      if (!response.ok) throw new Error('Пользователь с указанным id не найден');

      const tasks = await response.json();

      if (tasks.length === 0) {
        throw new Error('У данного пользователя нет задач.');
      }

      tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = task.completed ? `<s>${task.title}</s>` : task.title;
        taskList.appendChild(taskItem);
      });
    } catch (error) {
      errorMessage.innerText = error.message;
    }
  };
};