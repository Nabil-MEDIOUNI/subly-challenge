import { useSelector } from 'react-redux';

import SingleCard from '../SingleCard';
import CircularLoader from '../Shared/CircularLoader';

import { RootStateType } from '../../redux/reducer';

import { DataType } from '../../interfaces/index';

import { CardsListContainer } from './styles';
import { ErrorMessage } from '../../utils/styles';

export default function CardsList() {
  const { data, loading, error, filters }: any = useSelector(
    (state: RootStateType) => state.dataReducer,
  );

  if (loading) {
    return <CircularLoader />;
  }

  if (error) {
    return <ErrorMessage>Error Occured!</ErrorMessage>;
  }

  const filterData = () => {
    const filterBy = (key: string) =>
      data.filter((oldData: any) => oldData[key].includes(filters[key]));

    if (filters.languages && filters.status)
      return data.filter(
        (oldData: DataType) =>
          oldData.status.includes(filters.status) &&
          oldData.languages.includes(filters.languages),
      );

    if (filters.status) return filterBy('status');

    if (filters.languages) return filterBy('languages');

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
