import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  resetMarbleAmount,
  selectCounter,
  startCounter,
  stopCounter,
  throwMarbles,
} from "../../features/counter";

export const PlayerOptionsBox = () => {
  const { marbleAmount, thrownAmount } = useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(stopCounter());
    dispatch(resetMarbleAmount());
    dispatch(startCounter());
  };

  return (
    <>
      {marbleAmount + thrownAmount >= 4 ? (
        <button type="button" onClick={handleReset}>
          Recommencer
        </button>
      ) : null}
      {marbleAmount + thrownAmount >= 10 ? (
        <button
          type="button"
          onClick={() => dispatch(throwMarbles(1))}
          disabled={marbleAmount < 1}
        >
          Jeter 1 bille par terre
        </button>
      ) : null}
      {marbleAmount + thrownAmount >= 20 ? (
        <button
          type="button"
          onClick={() => dispatch(throwMarbles(10))}
          disabled={marbleAmount < 10}
        >
          Jeter 10 billes par terre
        </button>
      ) : null}
    </>
  );
};
