// redux store for maintainining application state

// store class
export class Store {
  private subscribers: Function[]; // will be a function array
  private reducers: { [key: string]: Function }; // key of type string that will contain a function
  private state: { [key: string]: any }; // will be state of application, key of type string which contains a type of any

  // constructor function with two params - reducer with default empty object and initialState with default empty object
  // initialize state as initialState with a default empty object
  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers; // internal access to reducers inside store
    this.state = this.reduce(initialState, {}); // at runtime call reduce function - initialState will be bound internally to this.state
  }

  // typescript get property, to get state
  // could use like: store.value
  get value() {
    return this.state;
  }

  // notify sumscribers when state updates
  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify(); // each time something subscribes, immediately provide state data ...should know initially and with each additional change
    // to prevent memory leaks, enabl unsubscribe functionality
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }

  // dispatch will merge the new object into existing state oject
  dispatch(action) {
    this.state = this.reduce(this.state, action); // becomes new representation of this.state
    this.notify(); // notify subscribers of new state
  }

  private notify() {
    // loop through subscriber list and pass each the new state
    this.subscribers.forEach(fn => fn(this.value));
    // this.value returns this.state so we can access inside subscription
  }

  private reduce(state, action) {
    const newState = {};
    // magic happens...
    // loop over all reducers here
    for (const prop in this.reducers) {
      // creates new object with property todos
      newState[prop] = this.reducers[prop](state[prop], action); // call the correct reducers
      // this is equivalent to: newState.todos = this.reducers.todos()
      // but this way is done dynamically using the the property (prop)
    }
    return newState;
  }


}
