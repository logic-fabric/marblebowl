import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  addLoadFeature,
  addSaveFeature,
  resetMarbleAmount,
  selectCounter,
  startCounter,
  stopCounter,
  throwMarbles,
} from "../../features/counter";

const MARBLE_THRESHOLDS = {
  reset: 4,
  throw1: 10,
  throw10: 20,
  addSaveAndLoad: 30,
};

export const PlayerOptionsBox = () => {
  const { loadFeature, marbleAmount, saveFeature, thrownAmount } =
    useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(stopCounter());
    dispatch(resetMarbleAmount());
    dispatch(startCounter());
  };

  const addSaveAndLoad = () => {
    if (saveFeature) dispatch(addLoadFeature(30));
    else dispatch(addSaveFeature(30));
  };

  return (
    <>
      {marbleAmount + thrownAmount >= MARBLE_THRESHOLDS.reset ? (
        <button type="button" onClick={handleReset}>
          Recommencer
        </button>
      ) : null}
      {marbleAmount + thrownAmount >= MARBLE_THRESHOLDS.throw1 ? (
        <button
          type="button"
          onClick={() => dispatch(throwMarbles(1))}
          disabled={marbleAmount < 1}
        >
          Jeter 1 bille par terre
        </button>
      ) : null}
      {marbleAmount + thrownAmount >= MARBLE_THRESHOLDS.throw10 ? (
        <button
          type="button"
          onClick={() => dispatch(throwMarbles(10))}
          disabled={marbleAmount < 10}
        >
          Jeter 10 billes par terre
        </button>
      ) : null}
      {marbleAmount >= MARBLE_THRESHOLDS.addSaveAndLoad && !loadFeature ? (
        <button
          type="button"
          onClick={addSaveAndLoad}
          disabled={marbleAmount < 30}
        >
          Augmenter l'univers des possibles
        </button>
      ) : null}
    </>
  );
};
