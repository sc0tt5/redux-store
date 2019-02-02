const span = document.querySelector('span') as HTMLSpanElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

export function renderTodos(collection) {
  span.innerHTML = collection.length;
  todoList.innerHTML = '';
  // this is not an ideal way to update the dom and only used for demostration purposes
  for (const item of collection) {
    todoList.innerHTML += `
    	<li>
	      ${item.label}
        <button type="button" data-todo='${JSON.stringify(item)}'>
          Delete
        </button>
      </li>
     `;
  }
}
