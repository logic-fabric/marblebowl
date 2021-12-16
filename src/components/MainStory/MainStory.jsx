import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  resetMarbleAmount,
  selectCounter,
  startCounter,
  stopCounter,
  throwMarbles,
} from "../../features/counter";

const MAXIMUM_AMOUNT_IN_BAG = 100; // Amount to decide

const SENTENCES = [
  "Une silhouette se dessine dans la brume...",
  "Celle d'un mystérieux individu, engoncé dans un long manteau...",
  "... qui s'approche de vous...",
  "Le visage dissimulé par d'imposantes lunettes fumées et un chapeau au large bord...",
  "Il continue de s'approcher de vous...",
  "... encore...",
  "... et encore...",
  "Pour vous saluer :",
  "Hello l'ami ! Un problème pour conserver vos billes ?",

  "Voici un objet qui devrait pouvoir vous aider.",
  "Comme vous voudrez... J'ai des sacs de piètre facture sinon.",
];

/* Pseudocode:
    if (marbleAmount < MAXIMUM_AMOUNT_IN_BAG + 5 || thrownAmount < 40) return;

    let i;
    while (i < 8) {
        displayedSentence = sentences[i]
        i ++
    }
    
    a la fin de la boucle, affiche 2 boutons Oui et Non
    
    si oui, "Voici un objet qui devrait pouvoir vous aider." s'affiche et joueur recoit Bol à Billes

*/

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
  const dispatch = useDispatch();
  const [displayedSentenceIndex, setDisplayedSentenceIndex] = useState(null);
  const [isFirstPartOver, setIsFirstPartOver] = useState(true);

  const giveMarbleBowl = () =>
    dispatch(editInventory("marbleContainer", "Marble Bowl"));


  return (
    <>
      <p>{SENTENCES[displayedSentenceIndex.current]}</p>
      {isFirstPartOver && (
        <>
          <button onClick={giveMarbleBowl}>Oui</button>
          <button>Non</button>
        </>
      )}
    </>
  );
};

export default MainStory;
