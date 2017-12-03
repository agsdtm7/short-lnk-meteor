import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

// if(Meteor.isServer){ // only available on the server!!
//   Meteor.publish('linksDatabaseOpenToClient', () => {
//     return  Links.find({url:'1'});
//   });
// }

if(Meteor.isServer){
  Meteor.publish('linksDatabaseOpenToClient', function(){
    return Links.find({userId: this.userId});
  });
}

// insertion method with added security
Meteor.methods({
  'links.insert'(url){
    // this checks if there is a logged in user
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }

    // Validation this validates if the value of url is valid line 27 - 33
     new SimpleSchema({
       url: {
         type: String,
         label: 'Your link',
         regEx: SimpleSchema.RegEx.Url
       }
     }).validate({ url });
     // Note that the validation doesn't use try catch after we configure the simple schema error

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null
    });
  },
  'links.setVisibility'(_id, visible){
    // check if user is logged in
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    // create a simple schema to validate if _id is a string with length greater than 1
    // visible is a boolean
    new SimpleSchema({
      // first item to validate
      _id:{
        type: String,
        min: 1
      }, // then second item to validate
      visible:{
        type: Boolean
      }
    }).validate({ _id, visible });

    Links.update({
      _id,
    userId: this.userId
  }, {
    $set: {   visible: visible    }
    // Note line 67 is the non-ES6 syntax, the ES6 would be shorter $set: { visible }
  });
},
'links.trackVisit'(_id){
  new SimpleSchema({
    // first item to validate
    _id:{
      type: String,
      min: 1
    }
  }).validate({ _id});

  Links.update({_id: _id}, {
    $set: {
      lastVisitedAt: new Date().getTime()
    },
    $inc: {
      visitedCount: 1
    }
  })
}


});
