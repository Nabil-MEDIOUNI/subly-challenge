import Select from 'react-select';
import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  @media only screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

export const StyledSelect = styled(Select)`
  margin-left: 1rem;
  @media only screen and (max-width: 920px) {
    margin-left: 0rem;
    margin-bottom: 1rem;
    width: 95%;
  }
`;

export const ClearFiltersButton = styled.button`
  background-color: #732ef5;
  outline: none;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  @media only screen and (max-width: 920px) {
    margin-left: 0rem;
    margin-bottom: 1rem;
    width: 95%;
  }
`;
