import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp'; // this is middleware
import moment from 'moment';

import '../imports/api/users';
import '../imports/api/links';
import { Links } from '../imports/api/links';

import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  let now = new Date();
  console.log(now);
  // https://momentjs.com/docs/#/displaying/
  let momentNow = moment();
  //console.log(momentNow.format('MMM Do YYYY'));
  console.log(momentNow.fromNow());

  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id }); // we only want 1 document
    if(link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);

    }else{
      next();
    }
  });
});
