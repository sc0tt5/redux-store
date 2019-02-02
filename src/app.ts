import * as fromStore from './store'; // import from store folder
import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

// reference to reducer
const reducers = {
  todos: fromStore.reducer
};

// create intitial state
const store = new fromStore.Store(reducers); // pass reducers into store

// add todo
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

    console.log(store.value);

    input.value = '';
  },
  false
);

// to prevent memory leaks use unsubscribe
const unsubscribe = store.subscribe(state => {
  // render todo list on page
  renderTodos(state.todos.data);
});

// unsubscribe
destroy.addEventListener('click', unsubscribe, false)

// delete
todoList.addEventListener('click', function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});

store.subscribe(state => console.log('STATE::: ', state));
