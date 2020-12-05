import { combineReducers } from 'redux';
import selectUtility from './features/SelectUtility/reducer';

const rootReducer = combineReducers({
  SelectUtility: selectUtility,
});

export default rootReducer;
