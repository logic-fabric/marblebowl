import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCounterValue, startCounter } from '../../features/counter';

export const MainStory = () => {
  const marbleAmount = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startCounter());
  }, [dispatch]);

  return (
    <p>{`Vous avez ${marbleAmount} ${
      marbleAmount <= 1 ? 'bille noire' : 'billes noires'
    } dans votre poche`}</p>
  );
};
