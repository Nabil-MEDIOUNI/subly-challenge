import { useDispatch } from 'react-redux';

import { filterData } from '../../redux/actions/data';

import { FiltersContainer, StyledSelect } from './styles';

function Filters() {
  const dispatch: any = useDispatch();

  const STATUS_OPTIONS = [
    { value: 'ready', label: 'Ready' },
    { value: 'error', label: 'Error' },
    { value: 'transcribing', label: 'Transcribing' },
  ];

  const LANGUAGES_OPTIONS = [
    { value: 'en', label: 'EN' },
    { value: 'nl', label: 'NL' },
    { value: 'cz', label: 'CZ' },
  ];

  return (
    <FiltersContainer>
      <StyledSelect
        options={STATUS_OPTIONS}
        onChange={(selectEvent: any) => {
          dispatch(filterData('status', selectEvent.value));
        }}
        placeholder="Select Status"
      />
      <StyledSelect
        options={LANGUAGES_OPTIONS}
        onChange={(selectEvent: any) => {
          dispatch(filterData('languages', selectEvent.value));
        }}
        placeholder="Select Language"
      />
    </FiltersContainer>
  );
}

export default Filters;
