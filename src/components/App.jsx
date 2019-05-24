import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../containers/MainPage';
import Modal from '../containers/Modal';
import Dropdown from '../containers/Dropdown';
import ContactEditor from '../containers/ContactEditor';


export default () => (
  <>
    <div className="container">
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/new' component={ContactEditor}/>
        <Route path='/edit/:id' component={ContactEditor}/>
      </Switch>
    </div>
    <Modal/>
    <Dropdown/>
  </>
);
