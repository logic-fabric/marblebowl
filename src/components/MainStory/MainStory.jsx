import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  resetMarbleAmount,
  selectCounter,
  startCounter,
  stopCounter,
  throwMarbles,
} from "../../features/counter";

const MAXIMUM_AMOUNT_IN_BAG = 100; // Amount to decide

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
  secondPart: [
    "Voici un objet qui devrait pouvoir vous aider.",
    "Comme vous voudrez... J'ai des sacs de piètre facture sinon.",
  ],
};

const MainStory = () => {
  const { marbleAmount, thrownAmount } = useSelector(selectCounter);
  const [displayedSentenceIndex, setDisplayedSentenceIndex] = useState(0);

  useEffect(() => {
    if (marbleAmount >= MAXIMUM_AMOUNT_IN_BAG + 5 || thrownAmount >= 40) {
      const interval = setInterval(
        () => setDisplayedSentenceIndex((index) => index + 1),
        1500
      );
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <p>{SENTENCES.firstPart[displayedSentenceIndex]}</p>
    </div>
  );
};

export default MainStory;
