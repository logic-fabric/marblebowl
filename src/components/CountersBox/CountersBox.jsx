import { useSelector } from "react-redux";

import { selectCounter } from "../../features/counter";

export const CountersBox = () => {
  const { marbleAmount, marbleContainer } = useSelector(selectCounter);

  return (
    <>
      <p>{`Vous avez ${marbleAmount} ${
        marbleAmount <= 1 ? "bille noire" : "billes noires"
      } dans votre ${marbleContainer.name}.`}</p>
    </>
  );
};
