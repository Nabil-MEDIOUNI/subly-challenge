import { useSelector } from 'react-redux';

import SingleCard from '../SingleCard';
import CircularLoader from '../Shared/CircularLoader';

import { RootStateType } from '../../redux/reducer';

import { DataType } from '../../interfaces/index';

import { CardsListContainer } from './styles';
import { ErrorMessage } from '../../utils/styles';

export default function CardsList() {
  const { data, loading, error } = useSelector(
    (state: RootStateType) => state.dataReducer,
  );

  if (loading) {
    return <CircularLoader />;
  }

  if (error) {
    return <ErrorMessage>Error Occured!</ErrorMessage>;
  }
  console.log(data);
  return (
    <CardsListContainer>
      {data.map((media: DataType) => (
        <SingleCard key={media.id} media={media} />
      ))}
    </CardsListContainer>
  );
}
