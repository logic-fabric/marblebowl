import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectMarbleAmount, startCounter } from "../../features/counter";

export const MainStory = () => {
  const marbleAmount = useSelector(selectMarbleAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCounter());
  }, [dispatch]);

  return (
    <p>{`Vous avez ${marbleAmount} ${
      marbleAmount <= 1 ? "bille noire" : "billes noires"
    } dans votre poche.`}</p>
  );
};
