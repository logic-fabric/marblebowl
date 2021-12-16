import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  throwMarbles,
  selectCounter,
  completeEvent,
} from "../../features/counter";
import { editInventory } from "../../features/playerSlice";

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

const MainStory = () => {
  const { marbleAmount, thrownAmount, completedEvents } =
    useSelector(selectCounter);
  const dispatch = useDispatch();
  const displayedSentenceIndex = useRef(null);
  const [isFirstPartOver, setIsFirstPartOver] = useState(false);

  const giveMarbleBowl = () =>
    dispatch(editInventory("marbleContainer", "Marble Bowl"));

  useEffect(() => {
    if (completedEvents.includes(1)) return;
    if (marbleAmount >= MAXIMUM_AMOUNT_IN_BAG + 5 || thrownAmount >= 40) {
      if (displayedSentenceIndex.current === null) {
        displayedSentenceIndex.current = 0;
        return;
      }

      if (displayedSentenceIndex.current < 8) {
        const interval = setInterval(displayedSentenceIndex.current++, 1500);
        return () => clearInterval(interval);
      }

      if (displayedSentenceIndex.current === 8) {
        setIsFirstPartOver(true);
      }
      dispatch(completeEvent(1));
    }
  }, [completedEvents, dispatch, marbleAmount, thrownAmount]);

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
