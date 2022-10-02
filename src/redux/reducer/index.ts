import { combineReducers } from 'redux';

import dataReducer from './data';

const rootReducer = combineReducers({
  dataReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
