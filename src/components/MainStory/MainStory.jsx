import React from "react";
import { useSelector } from "react-redux";

import {
  resetMarbleAmount,
  selectCounter,
  startCounter,
  stopCounter,
  throwMarbles,
} from "../../features/counter";

const SENTENCES = {
  firstPart: [
    "Une silhouette se dessine dans la brume...",
    "Celle d'un mystérieux individu, engoncé dans un long manteau...",
    "... qui s'approche de vous...",
    "Le visage dissimulé par d'imposantes lunettes fumées et un chapeau au large bord...",
    "Il continue de s'approcher de vous...",
    "... encore...",
    "... et encore...",
    "Pour vous saluer :",
    "Hello l'ami ! Un problème pour conserver vos billes ?",
  ],
};

const MainStory = () => {
  const { marbleAmount, thrownAmount } = useSelector(selectCounter);

  return <div>{thrownAmount >= 40 && SENTENCES.firstPart[0]}</div>;
};

export default MainStory;
