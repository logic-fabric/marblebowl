import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCounter, startCounter } from "../../features/counter";

export const StoryBox = () => {
  const { thrownAmount } = useSelector(selectCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCounter());
  }, [dispatch]);

  return (
    <>
      {thrownAmount > 0 ? (
        <p>{`Vous avez laissé tomber ${thrownAmount} ${
          thrownAmount <= 1 ? "bille" : "billes"
        } par terre.`}</p>
      ) : null}
    </>
  );
};
