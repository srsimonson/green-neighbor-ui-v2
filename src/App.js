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
import AboutPage from './features/GreenPricingTool/pages/AboutPage/AboutPage';
import ContributePage from './features/GreenPricingTool/pages/ContributePage/ContributePage';
import EnterZip from './features/GreenPricingTool/pages/EnterZip';
import SelectUtility from './features/GreenPricingTool/pages/SelectUtility';
import store from './store';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route exact path="/" component={EnterZip} />
        <Route path="/SelectUtility/:zip" component={SelectUtility} />
        <Route path="/turbine" component={LoadingTurbine} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contribute" component={ContributePage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;