
// Wait for the DOM to be fully loaded

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('todo-input');
  const addButton = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  // Adding a new todo item
  addButton.addEventListener('click', addTodo);

  // Adding todo when the Enter key is pressed
  inputField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          addTodo();
      }
  });

  // Function to add a todo item
  function addTodo() {
      const todoText = inputField.value.trim();
      if (todoText === '') return; // Exit if input is empty

      // Create <li> element
      const li = document.createElement('li');

      // Create <span> for the todo text
      const todoTextSpan = document.createElement('span');
      todoTextSpan.classList.add('todo-text');
      todoTextSpan.textContent = todoText;

      // Create "Done" button
      const doneButton = document.createElement('button');
      doneButton.classList.add('done-btn');
      const doneIcon = document.createElement('i');
      doneIcon.classList.add('fas', 'fa-check');
      doneButton.appendChild(doneIcon);

      // Create "Delete" button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-trash-alt');
      deleteButton.appendChild(deleteIcon);

      // Append text, done button, and delete button to the <li>
      li.appendChild(todoTextSpan);
      li.appendChild(doneButton);
      li.appendChild(deleteButton);

      // Append <li> to the todo list
      todoList.appendChild(li);

      inputField.value = ''; // Clear input field
  }

  // Event delegation for done and delete buttons
  todoList.addEventListener('click', function (e) {
      if (e.target.closest('.done-btn')) {
          e.target.closest('li').querySelector('.todo-text').classList.toggle('strikethrough');
      }

      if (e.target.closest('.delete-btn')) {
          e.target.closest('li').remove();
      }
  });
});