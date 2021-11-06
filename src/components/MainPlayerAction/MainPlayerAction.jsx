import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  resetCounter,
  selectCounterValue,
  startCounter,
  stopCounter,
} from "../../features/counter";

export const MainPlayerAction = () => {
  const marbleAmount = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(stopCounter());
    dispatch(resetCounter());
    dispatch(startCounter());
  };

  return (
    <>
      {marbleAmount >= 4 ? (
        <button type="button" onClick={handleClick}>
          Recommencer
        </button>
      ) : null}
    </>
  );
};
