import { fireEvent, screen } from "@testing-library/dom";

import { ResetCounterButton } from "../components/ResetCounterButton.js";

describe("GIVEN the ResetCounterButton component", () => {
  beforeEach(() => {
    document.body.innerHTML =
      "<button type='button' id='reset-counter-button'></button>";
  });

  describe("WHEN the component is rendered", () => {
    test("THEN the component is displayed", () => {
      const store = { state: { marbleAmount: 0 } };
      const resetCounterButton = new ResetCounterButton(store, null);
      resetCounterButton.render();

      expect(screen.getByText(/remettre à zéro/i)).toBeTruthy();
    });
  });

  describe("WHEN the component is rendered and user clicks on it", () => {
    test("THEN the resetCounter method is fired", () => {
      const store = { state: { marbleAmount: 0 } };
      const resetCounterButton = new ResetCounterButton(store, null);
      resetCounterButton.resetCounter = jest.fn();
      resetCounterButton.render();
      fireEvent.click(screen.getByRole("button", { name: /remettre à zéro/i }));

      expect(resetCounterButton.resetCounter).toHaveBeenCalled();
    });
  });

  describe("WHEN the resetCounter method is fired", () => {
    test("THEN the counter should be stopped, the marbleAmount state should be reset to 0 and the counter shold be start anew", () => {
      const store = { updateState: jest.fn() };
      const counter = {
        startCounter: jest.fn(),
        stopCounter: jest.fn(),
      };
      const resetCounterButton = new ResetCounterButton(store, counter);
      resetCounterButton.resetCounter();

      expect(counter.stopCounter).toHaveBeenCalled();
      expect(store.updateState).toHaveBeenCalled();
      expect(counter.startCounter).toHaveBeenCalled();
    });
  });
});
