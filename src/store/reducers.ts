// will hold todos data, and know if loaded or loading
export const initialState = {
  loaded: false,
  loading: false,
  data: [{ lable: 'Eat pizza', complete: false }] // reducer will handle initial state
};

// retducer function
export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    // do something with the todo that has been added
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = [...state.data, todo];
      // merge in new state and return
      return {
        ...state,
        data
      }
    }
  }

  return state;
}
