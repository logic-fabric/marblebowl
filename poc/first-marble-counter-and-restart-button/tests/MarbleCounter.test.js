import { screen } from "@testing-library/dom";

import { MarbleCounter } from "../components/MarbleCounter.js";

jest.useFakeTimers();

describe("GIVEN the MarbleCounter component", () => {
  beforeEach(() => {
    document.body.innerHTML = "<p id='marble-counter'></p>";
  });

  describe("WHEN the component is rendered with an amount of marble equal to 0", () => {
    test("THEN the component displays with this amount of marbles paying attention to the plural of 'bille noire'", () => {
      const store = { state: { marbleAmount: 0 } };
      const marbleCounter = new MarbleCounter(store);
      marbleCounter.render(store.state);

      expect(
        screen.getByText(/vous avez 0 bille noire dans votre poche/i)
      ).toBeTruthy();
    });
  });

  describe("WHEN the component is rendered with an amount of marble equal to 1", () => {
    test("THEN the component displays with this amount of marbles paying attention to the plural of 'bille noire'", () => {
      const store = { state: { marbleAmount: 1 } };
      const marbleCounter = new MarbleCounter(store);
      marbleCounter.render(store.state);

      expect(
        screen.getByText(/vous avez 1 bille noire dans votre poche/i)
      ).toBeTruthy();
    });
  });

  describe("WHEN the component is rendered with an amount of marble > 1", () => {
    test("THEN the component displays with this amount of marbles paying attention to the plural of 'bille noire'", () => {
      const store = { state: { marbleAmount: 5 } };
      const marbleCounter = new MarbleCounter(store);
      marbleCounter.render(store.state);

      expect(
        screen.getByText(/vous avez 5 billes noires dans votre poche/i)
      ).toBeTruthy();
    });
  });

  describe("WHEN the component is rendered and the state is updated", () => {
    test("THEN the component is updated with new state", () => {
      const store = { state: { marbleAmount: 1 } };
      const marbleCounter = new MarbleCounter(store);
      marbleCounter.render(store.state);

      expect(
        screen.getByText(/vous avez 1 bille noire dans votre poche/i)
      ).toBeTruthy();

      store.state.marbleAmount = 4;
      marbleCounter.update(store.state);

      expect(
        screen.getByText(/vous avez 4 billes noires dans votre poche/i)
      ).toBeTruthy();
    });
  });

  describe("WHEN the method startCounter is fired", () => {
    test("THEN the marbleAmount state is incremented every seconds", () => {
      const store = {
        state: { marbleAmount: 0 },
        getState: () => ({ marbleAmount: 0 }),
        updateState: jest.fn(),
      };
      const marbleCounter = new MarbleCounter(store);
      marbleCounter.startCounter();

      expect(store.updateState).not.toHaveBeenCalled();

      jest.advanceTimersByTime(2000);

      expect(store.updateState).toHaveBeenCalledWith({ marbleAmount: 1 });
      expect(store.updateState).toHaveBeenCalledTimes(2);

      jest.advanceTimersByTime(3000);

      expect(store.updateState).toHaveBeenCalledTimes(5);

      jest.clearAllTimers();
    });
  });

  describe("WHEN the method stopCounter is fired", () => {
    test("THEN the state stop to increase", () => {
      const store = {
        state: { marbleAmount: 0 },
        getState: () => ({ marbleAmount: 0 }),
        updateState: jest.fn(),
      };
      const marbleCounter = new MarbleCounter(store);
      marbleCounter.startCounter();

      expect(store.updateState).not.toHaveBeenCalled();

      jest.advanceTimersByTime(2000);

      expect(store.updateState).toHaveBeenCalledTimes(2);

      marbleCounter.stopCounter();

      jest.advanceTimersByTime(3000);

      expect(store.updateState).toHaveBeenCalledTimes(2);

      jest.clearAllTimers();
    });
  });
});
