import { Dispatch } from 'react';
import axios from 'axios';

import {
  FAIL_DATA,
  GET_DATA,
  EDIT_DATA,
  DELETE_DATA,
  LOAD_DATA,
  FILTER_DATA,
  CLEAR_FILTER_DATA,
} from '../constants/data';

import { API } from '../../config';
import { AxiosDataType } from '../../interfaces';
import { DataType } from '../../interfaces/index';

interface LoadDataType {
  type: typeof LOAD_DATA;
}

interface ErrorDataType {
  type: typeof FAIL_DATA;
  payload: string;
}

interface GetDataType {
  type: typeof GET_DATA;
  payload: AxiosDataType;
}

interface FilterType {
  key: string;
  value: string;
}

interface EditDataType {
  type: typeof EDIT_DATA;
  payload: any;
}

interface DeleteDataType {
  type: typeof DELETE_DATA;
  payload: DataType;
}

interface FilterDataType {
  type: typeof FILTER_DATA;
  payload: FilterType;
}

interface ClearFiltersDataType {
  type: typeof CLEAR_FILTER_DATA;
  payload: {};
}

export type DataDispatchTypes =
  | LoadDataType
  | ErrorDataType
  | GetDataType
  | EditDataType
  | DeleteDataType
  | FilterDataType
  | ClearFiltersDataType;

export const getData = () => async (dispatch: Dispatch<DataDispatchTypes>) => {
  dispatch({ type: LOAD_DATA });
  try {
    const {
      data: { media: data },
    } = await axios.get(API);
    dispatch({ type: GET_DATA, payload: data });
  } catch (error: any) {
    dispatch({ type: FAIL_DATA, payload: 'Error Occured!' });
  }
};

export const editData =
  (data: any) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    dispatch({ type: LOAD_DATA });
    try {
      dispatch({ type: EDIT_DATA, payload: data });
    } catch (error: any) {
      dispatch({ type: FAIL_DATA, payload: 'Error Occured!' });
    }
  };

export const deleteData =
  (data: DataType) => async (dispatch: Dispatch<DataDispatchTypes>) => {
    dispatch({ type: LOAD_DATA });
    try {
      dispatch({ type: DELETE_DATA, payload: data });
    } catch (error: any) {
      dispatch({ type: FAIL_DATA, payload: 'Error Occured!' });
    }
  };

export const filterData =
  (key: string, value: string) => (dispatch: Dispatch<DataDispatchTypes>) => {
    dispatch({ type: LOAD_DATA });
    try {
      dispatch({ type: FILTER_DATA, payload: { key, value } });
    } catch (error: any) {
      dispatch({ type: FAIL_DATA, payload: 'Error Occured!' });
    }
  };

export const clearFiltersData =
  () => (dispatch: Dispatch<DataDispatchTypes>) => {
    dispatch({ type: LOAD_DATA });
    try {
      dispatch({ type: CLEAR_FILTER_DATA, payload: {} });
    } catch (error: any) {
      dispatch({ type: FAIL_DATA, payload: 'Error Occured!' });
    }
  };
