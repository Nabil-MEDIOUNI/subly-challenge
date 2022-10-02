import { DataType } from '../../interfaces';

// import types
const {
  GET_DATA,
  DELETE_DATA,
  LOAD_DATA,
  FAIL_DATA,
} = require('../constants/data');

// initialstate
const initialState = {
  data: [],
  loading: false,
  error: '',
};

const dataReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_DATA:
      return { ...state, loading: true };
    case GET_DATA:
      return { ...state, data: payload, loading: false };
    // eslint-disable-next-line no-duplicate-case
    case DELETE_DATA:
      const newData = state.data.filter(
        (oldData: DataType) => oldData.id !== payload.id,
      );
      return { ...state, data: newData, loading: false };
    case FAIL_DATA:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default dataReducer;
