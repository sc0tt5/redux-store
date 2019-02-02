import * as fromStore from './store'; // import from store folder
import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

// create intitial state
const store = new fromStore.Store({}, {
  todos: [{ lable: 'Eat pizza', complete: false }]
});

console.log(store.value);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    // dispatch to state -- add todo
    store.dispatch({
      type: 'ADD_TODO',
      payload
    });

    input.value = '';
  },
  false
);

todoList.addEventListener('click', function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
