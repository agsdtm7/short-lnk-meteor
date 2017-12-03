// OCTOBER 29, 2017
// import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
// export const Links = new Mongo.Collection('links');
//
// // if(Meteor.isServer){ // only available on the server!!
// //   Meteor.publish('linksDatabaseOpenToClient', () => {
// //     return  Links.find({url:'1'});
// //   });
// // }
//
// if(Meteor.isServer){
//   Meteor.publish('linksDatabaseOpenToClient', function(){
//     return Links.find({userId: this.userId});
//   });
// }
//
// // insertion method with added security
// Meteor.methods({
//   'links.insert'(url){
//     // this checks if there is a logged in user
//     if(!this.userId){
//       throw new Meteor.Error('not-authorized');
//     }
//
//     // Validation this validates if the value of url is valid
//      try{
//        new SimpleSchema({
//          url: {
//            type: String,
//            label: 'Your link',
//            regEx: SimpleSchema.RegEx.Url
//          }
//        }).validate({ url });
//      }catch(e){
//        throw new Meteor.Error(400, e.message);
//      }
//
//     Links.insert({
//       url,
//       userId: this.userId
//     });
//   }
//
//
// });
