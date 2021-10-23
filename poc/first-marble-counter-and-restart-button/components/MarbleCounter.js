import { Observer } from "../lib/Observer.js";

export class MarbleCounter extends Observer {
  constructor(store){
    super();
    this.store = store;
    this.node = document.getElementById('marble-counter');
    this.interval = null;
  }

  startCounter = () => {
    this.interval = setInterval(() => {
      let state = this.store.getState();
      this.store.updateState({marbleAmount: state.marbleAmount+1});
    }, 1000);
  }

  stopCounter = () => {
    clearInterval(this.interval);
  } 

  render = (state) => {
    this.node.innerHTML = `Vous avez ${state.marbleAmount} ${state.marbleAmount <= 1 ? 'bille noire' : 'billes noires'} dans votre poche.`;
  }

  update(state) {
    this.render(state);
  }
}