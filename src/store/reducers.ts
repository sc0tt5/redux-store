import * as fromActions from './actions';

// will hold todos data, and know if loaded or loading
export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza', complete: false }] // reducer will handle initial state
};

// retducer function
export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {

    // do something with the todo that has been added

    // add new
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      // merge in new state and return
      return {
        ...state,
        data
      }
    }

    // remove it
    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      // rebind to state and return
      return {
        ...state,
        data
      };

    }
  }

  return state;
}
