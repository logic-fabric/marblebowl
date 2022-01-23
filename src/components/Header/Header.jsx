import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter, loadSavedCounter } from "../../features/counter";
import { store } from "../../app/store";
import { saveState } from "../../app/localstorage";

const Header = () => {
  const { saveFeature, loadFeature } = useSelector(selectCounter);
  const dispatch = useDispatch();

  const loadSave = () => {
    dispatch(loadSavedCounter());
  };

  return (
    <header>
      {saveFeature && (
        <button onClick={() => saveState(store.getState())}>Sauvegarder</button>
      )}
      {loadFeature && <button onClick={loadSave}>Charger</button>}
    </header>
  );
};

export default Header;
