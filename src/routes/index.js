import React from 'react';
import { Switch } from 'react-router-dom';
import Wrapper from './Wrapper';

export default () => (
  <Switch>
    <Wrapper path="/" component={() => <div />} />
  </Switch>
);
