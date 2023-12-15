function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <span onclick="toggleDone(this)">${taskInput.value}</span>
      <span class="doneBtn" onclick="toggleDoneStatus(this)">✔</span>
      <span class="deleteBtn" onclick="deleteTask(this)">✖</span>
      </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }

  function toggleDone(element) {
    element.classList.toggle('done');
  }

  function toggleDoneStatus(element) {
    const taskItem = element.parentNode;
    const taskText = taskItem.querySelector('span:first-child');
    taskText.classList.toggle('done');
  }

  function deleteTask(element) {
    const taskList = document.getElementById('taskList');
    const taskItem = element.parentNode;
    taskList.removeChild(taskItem);
  }