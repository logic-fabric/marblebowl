export class ResetCounterButton {
  constructor(store, counter){
    this.store = store;
    this.counter = counter
    this.node = document.getElementById('reset-counter-button');
  }

  resetCounter = () => {
    this.counter.stopCounter;
    this.store.updateState({marbleAmount: 0});
    this.counter.startCounter;
  }

  render = () => {
    this.node.innerHTML = 'Remettre à zéro';
    this.node.addEventListener('click', this.resetCounter)
    this.node.type='button'
  }
}