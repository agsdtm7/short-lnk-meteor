// import { Meteor } from 'meteor/meteor';
// import SimpleSchema from 'simpl-schema';
//
// Meteor.startup(() => {
//   // code to run on server at startup
//
// // https://github.com/aldeed/node-simple-schema#regex
//   // employee SimpleSchema
//   // name - a required string between 1 and 200 chars
//   // hourlyWage - a number great than zero
//   // email -should be email format
//   const employeeSchema = new SimpleSchema({
//     name: {
//       type: String,
//       min: 1,
//       max: 200
//     },
//     hourlyWage: {
//       type: Number,
//       min: 1
//     },
//     email: {
//       type: String,
//       regEx: SimpleSchema.RegEx.Email
//     }
//   });
//     employeeSchema.validate({
//        name: 'maoge',
//        hourlyWage: 120,
//       email: 'maoge@maoge.com'
//     });
//
//   //  const petSchema = new SimpleSchema({
//   //    name: {
//   //      type: String,
//   //      min: 1,
//   //      max: 200,
//   //      // optional is for making the attribute not required
//   //      optional: true
//   //    },
//   //    age: {
//   //      type: Number,
//   //      min:0
//   //    },
//   //    contactNumber:{
//   //      type: String,
//   //      optional: true,
//   //      regEx: SimpleSchema.RegEx.Phone
//   //    }
//   //  });
//    //
//   //  petSchema.validate({
//   //    name: 'Spot',
//   //    age: 3,
//   //    contactNumber: 'ab234#'
//   //  });
//
//
//
// });
