import { MarbleCounter } from "./components/MarbleCounter.js";
import { ResetCounterButton } from "./components/resetCounterButton.js";
import { Store } from "./lib/Store.js";

const store = new Store({ marbleAmount: 0 });
const marbleCounter = new MarbleCounter(store);
const resetCounterButton = new ResetCounterButton(store, marbleCounter);

store.addObserver(marbleCounter);

marbleCounter.render(store.getState());
resetCounterButton.render();

marbleCounter.startCounter();
