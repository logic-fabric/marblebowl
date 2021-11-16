import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  resetMarbleAmount,
  selectMarbleAmount,
  startCounter,
  stopCounter,
} from "../../features/counter";

export const MainPlayerAction = () => {
  const marbleAmount = useSelector(selectMarbleAmount);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(stopCounter());
    dispatch(resetMarbleAmount());
    dispatch(startCounter());
  };

  return (
    <div>
      {marbleAmount >= 4 ? (
        <button type="button" onClick={handleClick}>
          Recommencer
        </button>
      ) : null}
    </div>
  );
};
