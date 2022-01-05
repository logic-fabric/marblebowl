import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../../features/counter";
import { store } from "../../app/store";
import { saveState } from "../../app/localstorage";

const Header = () => {
  const { saveFeature, loadFeature } = useSelector(selectCounter);

  return (
    <header>
      {saveFeature && (
        <button onClick={() => saveState(store.getState())}>Sauvegarder</button>
      )}
    </header>
  );
};

export default Header;
