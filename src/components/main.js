import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Sum from './sum';
import Timer from './timer';
import SpaceFreeText from './spaceFreeText';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/addNumber' component={Sum}/>
      <Route path='/timer' component={Timer}/>
      <Route path='/removeSpace' component={SpaceFreeText}/>
    </Switch>
  </main>
)
export default Main;