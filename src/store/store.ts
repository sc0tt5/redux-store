// redux store for maintainining application state

// store class
export class Store {
  private subscribers: Function[]; // will be a function array
  private reducers: { [key: string]: Function }; // key of type string that will contain a function
  private state: { [key: string]: any }; // will be state of application, key of type string which contains a type of any

  // constructor function with two params - reducer with default empty object and initialState with default empty object
  // initialize state as initialState with a default empty object
  constructor(reducers = {}, initialState = {}) {
    this.state = initialState; // initialState will be bound internally to this.state
  }

  // typescript get property, to get state
  // could use like: store.value
  get value() {
    return this.state;
  }

}
