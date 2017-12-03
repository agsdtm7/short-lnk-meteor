// Lecture #76

// import { Meteor } from 'meteor/meteor';
// import { WebApp } from 'meteor/webapp'; // this is middleware
//
// import '../imports/api/users';
// import '../imports/api/links';
// import { Links } from '../imports/api/links';
//
// import '../imports/startup/simple-schema-configuration.js';
//
// Meteor.startup(() => {
//   // creating and registering  new middleware function
//   // set HTTP status code to a 302
//   // set 'Locaiton' header to 'http://www.google.com'
//   // end the request
//   WebApp.connectHandlers.use((req, res, next) => {
//     const _id = req.url.slice(1);
//     const link = Links.findOne({ _id }); // we only want 1 document
//
//     if(link) {
//       res.statusCode = 302;
//       res.setHeader('Location', link.url);
//       res.end();
//     }else{
//       next()
//     }
//
//     //console.log(req.url);
//
//     // next();
//   });
//
//   WebApp.connectHandlers.use((req, res, next) => {
//     console.log('This is from my custom middleware');
//     console.log(req.url, req.method, req.headers, req.query);
//     // set HTTP status code -- see httpstatuses.com to find all the number codes
//     //res.statusCode = 404;
//
//     // set HTTP headers
//     //res.setHeader('my-custom-header', 'Agus learns well');
//     // set HTTP body
//     //res.write('<h1>This is my middleware not malware</h1>');
//     // End HTTP request
//     //res.end();
//     next();
//   });
// });
//
// // request comes in
// // run our middleware one at a time
// // send them that page
