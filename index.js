import { MarbleCounter } from "./components/MarbleCounter.js";
import { Store } from "./lib/Store.js";

const store = new Store({marbleAmount:0});
const marbleCounter = new MarbleCounter(store);

store.addObserver(marbleCounter)

marbleCounter.render(store.getState())

marbleCounter.startCounter()