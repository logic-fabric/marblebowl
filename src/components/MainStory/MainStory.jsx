import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCounter,
  completeEvent,
  removeMarbles,
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
  "Vous me faites trop de peine avec vos billes perdues.",
  "Tenez. Prenez cet objet qui devrait vous aider.",
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
      // If we haven't started displaying the sentences, set the index to 0
      if (displayedSentenceIndex.current === null) {
        displayedSentenceIndex.current = 0;
        return;
      }

      if (displayedSentenceIndex.current < 8) {
        const intervalID = setInterval(displayedSentenceIndex.current++, 1500); // Interval to decide
        return () => clearInterval(intervalID);
      }

      dispatch(completeEvent(1));
    }
  }, [completedEvents, dispatch, marbleAmount, thrownAmount]);

  const displaySecondPart = (choice) => {
    switch (choice) {
      case "yes":
        giveMarbleBowl();
        displayedSentenceIndex.current = 9;
        setTimeout(() => {
          displayedSentenceIndex.current = null;
        }, 4000);
        break;

      case "no":
        displayedSentenceIndex.current = 10;
        setTimeout(() => {
          displayedSentenceIndex.current = 11;
        }, 180000);
        setTimeout(() => {
          displayedSentenceIndex.current = 12;
          giveMarbleBowl();
        }, 182000);
        setTimeout(() => {
          displayedSentenceIndex.current = null;
        }, 186000);
        break;

      default:
        return;
    }
    dispatch(completeEvent(2));
  };

  useEffect(() => {
    displayFirstPart();
  }, [completedEvents, dispatch, displayFirstPart, marbleAmount, thrownAmount]);

  return (
    <>
      <p>{SENTENCES[displayedSentenceIndex.current]}</p>
      {displayedSentenceIndex.current === 8 && (
        <>
          <button onClick={() => displaySecondPart("yes")}>Oui</button>
          <button onClick={() => displaySecondPart("no")}>Non</button>
        </>
      )}
      {displayedSentenceIndex.current === 10 && (
        <button onClick={() => dispatch(removeMarbles(5))}>
          Acheter un sac de piètre facture (5 billes)
        </button>
      )}
    </>
  );
};

export default MainStory;
