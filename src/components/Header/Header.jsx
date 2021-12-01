import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../../features/counter";

const Header = () => {
  const { saveFeature, loadFeature } = useSelector(selectCounter);

  return (
    <header>
      {saveFeature && <button>Sauvegarder</button>}
      {loadFeature && <button>Charger</button>}
    </header>
  );
};

export default Header;
