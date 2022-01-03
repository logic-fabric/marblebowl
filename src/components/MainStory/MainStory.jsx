import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCounter, completeEvent } from "../../features/counter";
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

  const giveMarbleBowl = () =>
    dispatch(editInventory("marbleContainer", "Marble Bowl"));

  const displayFirstPart = useCallback(() => {
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

      dispatch(completeEvent(1));
    }
  }, [completedEvents, dispatch, marbleAmount, thrownAmount]);

  useEffect(() => {
    displayFirstPart();
  }, [completedEvents, dispatch, displayFirstPart, marbleAmount, thrownAmount]);

  return (
    <>
      <p>{SENTENCES[displayedSentenceIndex.current]}</p>
      {completedEvents.includes(1) && (
        <>
          <button onClick={giveMarbleBowl}>Oui</button>
          <button>Non</button>
        </>
      )}
    </>
  );
};

export default MainStory;
