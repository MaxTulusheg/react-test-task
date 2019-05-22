import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../containers/MainPage';


export default () => (
  <div className="container">
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/new' component={() => 'Create page'}/>
      <Route path='/edit/:id' component={() => 'Edit page'}/>
    </Switch>
  </div>
);
