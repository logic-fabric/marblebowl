import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCounter,
  startCounter,
  updateMarbleContainer,
} from "../../features/counter";

export const StoryBox = () => {
  const { marbleAmount, thrownAmount, marbleContainer } =
    useSelector(selectCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCounter());
  }, [dispatch]);

  useEffect(() => {
    if (
      marbleContainer.name === "poche" &&
      marbleAmount === marbleContainer.capacity
    )
      dispatch(updateMarbleContainer({ name: "poche percée", capacity: 0 }));
  }, [dispatch, marbleAmount, marbleContainer]);

  return (
    <>
      {thrownAmount > 0 ? (
        <p>{`Vous avez laissé tomber ${thrownAmount} ${
          thrownAmount <= 1 ? "bille" : "billes"
        } par terre.`}</p>
      ) : null}
      {marbleContainer.name === "poche" &&
      marbleAmount > marbleContainer.capacity - 10 ? (
        <p>Vous commencez à avoir beaucoup de billes dans votre poche</p>
      ) : null}
      {marbleContainer.name === "poche percée" ? (
        <p>Oups ! Votre poche s'est percée sous le poids des billes !</p>
      ) : null}
    </>
  );
};
