import { Dispatch } from 'react';
import axios from 'axios';

import { FAIL_DATA, GET_DATA, LOAD_DATA } from '../constants/data';

import { API } from '../../config';
import { AxiosDataType } from '../../interfaces';

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

export type DataDispatchTypes = LoadDataType | ErrorDataType | GetDataType;

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
