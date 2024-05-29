
class Task {
    constructor(id, title, status) {
      this.id = id;
      this.title = title;
      this.status = status;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
  
    const tasks = [
      new Task(1, 'Blej buke', 'pending'),
      new Task(2, 'Bej detyrat', 'pending'),
      new Task(3, 'Pastro dhomen', 'pending'),
      new Task(4, 'Pastro makinen', 'pending'),
      new Task(5, 'Blej harxh', 'pending')
    ];

    tasks.forEach(task => renderTask(task));
  
    taskList.addEventListener('click', (event) => {
      const target = event.target.closest('td');
      if (!target) return;
  
      const taskId = target.dataset.taskId;
     const task = tasks.find(task => task.id.toString() === taskId);
  
      if (task) {
        task.status = task.status === 'pending' ? 'completed' : 'pending';
        target.classList.toggle('completed');
        target.classList.toggle('pending');
        target.nextElementSibling.textContent = task.status;
      }
    });
  
    function renderTask(task) {
      const taskRow = document.createElement('tr');
      taskRow.innerHTML = `
        <td data-task-id="${task.id}" class="${task.status === 'completed' ? 'completed' : 'pending'}">${task.title}</td>
        <td>${task.status}</td>
      `;
      taskList.appendChild(taskRow);
    }
  });