import { combineReducers } from 'redux';
import greenPricingToolReducer from './features/GreenPricingTool/reducer';

const rootReducer = combineReducers({
  GreenPricingTool: greenPricingToolReducer,
});

export default rootReducer;
