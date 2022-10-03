import { useDispatch, useSelector } from 'react-redux';

import { filterData, clearFiltersData } from '../../redux/actions/data';
import { RootStateType } from '../../redux/reducer';

import { FiltersContainer, StyledSelect, ClearFiltersButton } from './styles';

function Filters() {
  const dispatch: any = useDispatch();
  const { filters }: any = useSelector(
    (state: RootStateType) => state.dataReducer,
  );

  const STATUS_OPTIONS = [
    { value: '', label: 'All' },
    { value: 'ready', label: 'Ready' },
    { value: 'error', label: 'Error' },
    { value: 'transcribing', label: 'Transcribing' },
  ];

  const LANGUAGES_OPTIONS = [
    { value: '', label: 'All' },
    { value: 'en', label: 'EN' },
    { value: 'nl', label: 'NL' },
    { value: 'cz', label: 'CZ' },
  ];

  const filterBy = (event: any, key: string) => {
    dispatch(filterData(key, event.value));
  };

  const clearFilters = () => {
    dispatch(clearFiltersData());
  };

  return (
    <FiltersContainer>
      <StyledSelect
        options={STATUS_OPTIONS}
        defaultValue={filters.status}
        onChange={(event: any) => filterBy(event, 'status')}
        placeholder="Select Status"
      />
      <StyledSelect
        options={LANGUAGES_OPTIONS}
        defaultValue={filters.languages}
        onChange={(event: any) => filterBy(event, 'languages')}
        placeholder="Select Language"
      />
      <ClearFiltersButton onClick={clearFilters}>Clear</ClearFiltersButton>
    </FiltersContainer>
  );
}

export default Filters;
