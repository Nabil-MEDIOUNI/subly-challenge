import { useSelector } from 'react-redux';

import SingleCard from '../SingleCard';
import CircularLoader from '../Shared/CircularLoader';

import { RootStateType } from '../../redux/reducer';

import { DataType } from '../../interfaces/index';

import { CardsListContainer } from './styles';
import { ErrorMessage } from '../../utils/styles';

export default function CardsList() {
  const { data, loading, error, filters } = useSelector(
    (state: RootStateType) => state.dataReducer,
  );
  console.log(filters);
  if (loading) {
    return <CircularLoader />;
  }

  if (error) {
    return <ErrorMessage>Error Occured!</ErrorMessage>;
  }

  const filterData = () => {
    if (filters.languages && filters.status) {
      return data.filter(
        (oldData: DataType) =>
          oldData.status.includes(filters.status) &&
          oldData.languages.includes(filters.languages),
      );
    }

    if (filters.status) {
      return data.filter((oldData: DataType) =>
        oldData.status.includes(filters.status),
      );
    }

    if (filters.languages) {
      return data.filter((oldData: DataType) =>
        oldData.languages.includes(filters.languages),
      );
    }

    return data;
  };

  return (
    <CardsListContainer data-testid="card-list">
      {filterData().map((media: DataType) => (
        <SingleCard key={media.id} media={media} />
      ))}
    </CardsListContainer>
  );
}
