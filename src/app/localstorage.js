const KEY = "redux";

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    console.error("Error while saving state", e);
  }
}
