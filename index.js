document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function () {
      const li = this.closest('li');
      const currentList = li.closest('.todo-list');
      const targetListId = this.innerText === '→' ? getNextListId(currentList.id) : getPreviousListId(currentList.id);
      document.getElementById(targetListId).appendChild(li);
      updateButtons(li);
    });
  });
  
  function getNextListId(currentListId) {
    switch (currentListId) {
      case 'backlog': return 'todo';
      case 'todo': return 'ongoing';
      case 'ongoing': return 'done';
    }
  }
  
  function getPreviousListId(currentListId) {
    switch (currentListId) {
      case 'todo': return 'backlog';
      case 'ongoing': return 'todo';
      case 'done': return 'ongoing';
    }
  }
  
  function updateButtons(li) {
    const currentListId = li.closest('.todo-list').id;
    const leftBtn = li.querySelector('.nav-btn:first-child');
    const rightBtn = li.querySelector('.nav-btn:last-child');
    
    if (currentListId === 'backlog') {
      leftBtn.disabled = true;
      rightBtn.disabled = false;
    } else if (currentListId === 'done') {
      leftBtn.disabled = false;
      rightBtn.disabled = true;
    } else {
      leftBtn.disabled = false;
      rightBtn.disabled = false;
    }
  }
  
  // Initial update to set correct button states
  document.querySelectorAll('.todo-list li').forEach(updateButtons);
  