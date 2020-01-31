import React from 'react';
import { Switch } from 'react-router-dom';

import Wrapper from './Wrapper';

import Home from '../pages/Home';
import List from '../pages/List';

export default () => (
  <Switch>
    <Wrapper path="/" exact component={Home} />
    <Wrapper path="/list" exact component={List} />
  </Switch>
);
