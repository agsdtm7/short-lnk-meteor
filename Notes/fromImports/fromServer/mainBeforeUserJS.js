// import { Meteor } from 'meteor/meteor';
// import SimpleSchema from 'simpl-schema';
// import { Accounts } from 'meteor/accounts-base';
//
// Meteor.startup(() => {
//   // code to run on server at startup
//   Accounts.validateNewUser((user) => {
//     const email = user.emails[0].address;
//     //console.log('this is the user', user);
//     try{
//       new SimpleSchema({
//         email:{
//           type: String,
//           regEx: SimpleSchema.RegEx.Email
//         }
//       }).validate({ email })
//     }catch(e){
//       // using try - catch, if there is an error, meteor system will throw an error coming out from the simple schema
//       throw new Meteor.Error(400, e.message)
//     }
//     return true;
//   });
//
//   // try{
//   //   throw new Meteor.Error(400,'Enter a valid email!');
//   // } catch(e){
//   //   console.log(e);
//   // }
//
// // https://github.com/aldeed/node-simple-schema#regex
//   // employee SimpleSchema
//   // name - a required string between 1 and 200 chars
//   // hourlyWage - a number great than zero
//   // email -should be email format
//   // const employeeSchema = new SimpleSchema({
//   //   name: {
//   //     type: String,
//   //     min: 1,
//   //     max: 200
//   //   },
//   //   hourlyWage: {
//   //     type: Number,
//   //     min: 1
//   //   },
//   //   email: {
//   //     type: String,
//   //     regEx: SimpleSchema.RegEx.Email
//   //   }
//   // });
//   //   employeeSchema.validate({
//   //      name: 'maoge',
//   //      hourlyWage: 120,
//   //     email: 'maoge@maoge.com'
//   //   });
//
// });
