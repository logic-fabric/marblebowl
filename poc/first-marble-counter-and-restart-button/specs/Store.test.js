import { Store } from "../lib/store";

describe('GIVEN the Store component', () => {
  describe('WHEN the Store is initialized with an initial state', () => {
    test('THEN the state of is equal to the initial state ', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      expect(store.state).toEqual(initialState);
    });
  });
  describe('WHEN the getState method is fired', () => {
    test('THEN it return the state', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      expect(store.getState()).toEqual(initialState);
    });
  });
  describe('WHEN the updateState method is fired', () => {
    test('THEN the state is modified according to passed value', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      const newState = {key: 'new value'};
      store.updateState(newState);
      expect(store.state).toEqual(newState);
    });
  });
  describe('WHEN the addObserver method is fired', () => {
    test('THEN the list of observers should be updated according to passed value', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      const observer = {}
      store.addObserver(observer);
      expect(store.observers).toContain(observer);
    });
  });
  describe('WHEN the removeObserver method is fired', () => {
    test('THEN the list of observers should be updated according to passed value', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      const observer = {}
      store.addObserver(observer);
      store.removeObserver(observer);
      expect(store.observers).not.toContain(observer);
    });
  });
  describe('WHEN the notify method is fired while there are observers', () => {
    test('THEN all the observer from the list of observer should fire their update method', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      const observer1 = {update: jest.fn()}
      const observer2 = {update: jest.fn()}
      store.addObserver(observer1);
      store.addObserver(observer2);
      const newState = {key: 'new value'};
      store.notify(newState);
      expect(observer1.update).toHaveBeenCalledWith(newState);
      expect(observer2.update).toHaveBeenCalledWith(newState);
    });
  });
  describe('WHEN the notify method is fired while there are not any observer', () => {
    test('THEN nothing happens and the app does not crash', () => {
      const initialState = {key:'value'};
      const store = new Store(initialState);
      const newState = {key: 'new value'};
      store.notify(newState);
    });
  });
});