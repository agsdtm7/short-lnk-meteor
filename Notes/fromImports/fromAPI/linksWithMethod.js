// import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';
//
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
// Meteor.methods({
//   greetUser(name){
//     console.log("this is greet user there");
//     if(!name){
//       throw new Meteor.Error('invalid-arguments', 'Name is required');
//     }
//     return `hello ${name}!`;
//   },
//   addNumbers(num1, num2){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//       console.log(num1+num2);
//       return `successfully call addNumbers`;
//     }else{
//       throw new Meteor.Error('invalid-arguments', 'arguments must be numbers');
//       return `call addNumbers but wrong arguments`;
//     }
//   }
//
//
// });
