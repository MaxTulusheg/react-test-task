import React from 'react';
import { Switch, Route } from 'react-router-dom';


export default () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={() => 'Home page'}/>
      <Route path='/new' component={() => 'Create page'}/>
      <Route path='/edit/:id' component={() => 'Edit page'}/>
    </Switch>
  </div>
);
