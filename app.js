function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = "checkbox";

      // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.appendChild(checkbox);

      // create a delete button
      let deleteToDo = document.createElement('button');
      deleteToDo.type = "button";
      deleteToDo.textContent = "Delete To-Do!";

      newLi.appendChild(deleteToDo);

      //attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';

    });

    toDoList.addEventListener('button', event => {
      event.preventDefault();

      toDoList.removeChild(newLi);
    });
}

window.onload = function() {
  onReady();
};
