// import { Meteor } from 'meteor/meteor';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
// import { Tracker } from 'meteor/tracker';
//
// import Signup from '../imports/ui/Signup';
// import Link from '../imports/ui/Link';
// import NotFound from '../imports/ui/NotFound';
// import Login from '../imports/ui/Login';
//
// const unauthenticatedPages = ['/','/signup'];
// const authenticatedPages = ['/links'];
//
//
// const onEnterPublicPage = () => {
//   // when user logs in do the following
//   if(Meteor.userId()){
//     // we replace 'push' with 'replace' in order to fix the go back problem
//     browserHistory.replace('/links');
//   }
// };
//
// const onEnterPrivatePage = () => {
//   // when user doesn't log in do the following
//   if(!Meteor.userId()){
//     browserHistory.replace('/');
//   }
// };
//
// const routes = (
//   <Router history={browserHistory}>
//     <Route path="/" component={Login} onEnter ={onEnterPublicPage}/>
//     <Route path="/signup" component={Signup} onEnter ={onEnterPublicPage}/>
//     <Route path="/links" component={Link} onEnter ={onEnterPrivatePage}/>
//     <Route path="/login" component={Login}/>
//     <Route path="*" component={NotFound}/>
//   </Router>
// );
//
// window.browserHistory = browserHistory;
//
// Tracker.autorun(() => {
//   // returning truthy or falsy value, when userId is null or empty string it will return false, otherwise true
//   const isAuthenticated = !!Meteor.userId();
//   const pathname = browserHistory.getCurrentLocation().pathname;
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//   // The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
//   const IsUnauthenticatedPage = unauthenticatedPages.includes(pathname); // '/','/signup'
//   const isAuthenticatedPage = authenticatedPages.includes(pathname); // '/links'
//
//   console.log('isAuthenticated', isAuthenticated);
//   // if on unauthenticated page and logged in, redirect to /links
//   // browserHistory.push
//   // if on authenticated page and not logged in, redirect to /
//   // browserHistory.push
//   if(IsUnauthenticatedPage && isAuthenticated){
//     browserHistory.replace('/links');
//   }else if(isAuthenticatedPage && !isAuthenticated) {
//     browserHistory.replace('/');
//   }
// });
//
// Meteor.startup(() => {
//   ReactDOM.render(routes, document.getElementById('app'));
// });
