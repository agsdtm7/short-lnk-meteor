import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  // The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
  const IsUnauthenticatedPage = unauthenticatedPages.includes(pathname); // '/','/signup'
  const isAuthenticatedPage = authenticatedPages.includes(pathname); // '/links'

  console.log('isAuthenticated', isAuthenticated);

  if(IsUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/links');
  }else if(isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};


const onEnterPublicPage = () => {
  // when user logs in do the following
  if(Meteor.userId()){
    // we replace 'push' with 'replace' in order to fix the go back problem
    browserHistory.replace('/links');
  }
};

const onEnterPrivatePage = () => {
  // when user doesn't log in do the following
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter ={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter ={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter ={onEnterPrivatePage}/>
    <Route path="/login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
