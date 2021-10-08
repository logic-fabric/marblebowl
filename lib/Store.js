export class Store {
  constructor(initialState) {
    this.state = initialState; // no nesting allowed
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  updateState(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notify(this.state);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.obesrver = this.observer.filter(element => element !== observer)
  }

  // The state object will call this method everytime it is updated.
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
}
