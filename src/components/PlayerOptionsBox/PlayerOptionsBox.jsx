import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  resetMarbleAmount,
  selectCounter,
  startCounter,
  stopCounter,
  throwMarbles,
  addLoadFeature,
  addSaveFeature,
} from "../../features/counter";

export const PlayerOptionsBox = () => {
  const { marbleAmount, thrownAmount, saveFeature, loadFeature } =
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
      {marbleAmount >= 30 && !loadFeature ? (
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
