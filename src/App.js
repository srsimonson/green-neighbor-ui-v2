import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import './assets/styles/_buttons.scss';
import LoadingTurbine from './components/LoadingTurbine';
import EnterZip from './features/GreenPricingTool/pages/EnterZip';
import SelectUtility from './features/GreenPricingTool/pages/SelectUtility';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EnterZip} />
        <Route path="/SelectUtility/:zip" component={SelectUtility} />
        <Route path="/turbine" component={LoadingTurbine} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
