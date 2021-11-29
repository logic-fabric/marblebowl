import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCounter, startCounter } from "../../features/counter";

export const MainStory = () => {
  const { marbleAmount, thrownAmount } = useSelector(selectCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCounter());
  }, [dispatch]);

  return (
    <div className="mainStory">
      <p>{`Vous avez ${marbleAmount} ${
        marbleAmount <= 1 ? "bille noire" : "billes noires"
      } dans votre poche.`}</p>
      {thrownAmount > 0 ? (
        <p>{`Vous avez laissé tomber ${thrownAmount} ${
          thrownAmount <= 1 ? "bille" : "billes"
        } par terre.`}</p>
      ) : null}
    </div>
  );
};
