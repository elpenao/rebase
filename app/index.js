import React from 'react';
import {render} from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Main from './containers/main';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>
), document.getElementById('app')) 
