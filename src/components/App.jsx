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
      <Route path='/new' component={props => <ContactEditor isNew={true} {...props} />}/>
      <Route path='/edit/:id' component={props => <ContactEditor {...props} />}/>
    </Switch>
  </div>
  <Modal />
  <Dropdown />
  </>
);
