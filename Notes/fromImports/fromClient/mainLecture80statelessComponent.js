// import { Meteor } from 'meteor/meteor';
// import ReactDOM from 'react-dom';
// // import { Tracker } from 'meteor/tracker';
//
// import { routes, onAuthChange } from '../imports/routes/routes';
// import '../imports/startup/simple-schema-configuration.js';
//
// Tracker.autorun(() => {
//   // returning truthy or falsy value, when userId is null or empty string it will return false, otherwise true
//   const isAuthenticated = !!Meteor.userId();
//   onAuthChange(isAuthenticated);
// });
//
// // Stateless functional components! REMEMBER! Stateless!!! NO STATE ALLOWED
// import React from 'react';
// const MyComponent = (props) => {
//   return (
//     <div>
//       <h1>Hello my component! {props.name}</h1>
//     </div>
//   );
// };
//
// Meteor.startup(() => {
//   // Meteor.call("greetUser", "Agus", (err, res) =>{
//   //   // this will only get fired when there is a respond from the server
//   //   // whether the server responds w/ the error or final data
//   //   console.log('Greet user argument', err, res);
//   // });
//
//   // Meteor.call("addNumbers", 8, 9, (err,res) => {
//   //   console.log('call addNumbers here', err, res);
//   // });
//   ReactDOM.render(<MyComponent name="Agus"/>, document.getElementById('app'));
// });
