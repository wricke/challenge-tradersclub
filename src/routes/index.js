import React from 'react';
import { Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import Home from '../pages/Home';

export default () => (
  <Switch>
    <Wrapper path="/" exact component={Home} />
  </Switch>
);
