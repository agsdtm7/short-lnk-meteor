// import React from 'react';
// import { Link } from 'react-router';
//
// import { Accounts } from 'meteor/accounts-base';
//
// export default class Signup extends React.Component{
//   // STATE
//   constructor(props){
//     super(props);
//     this.state = {
//       // count: this.props.count || 0
//       error: ''
//     };
//   }
//
//   onSubmit(e){
//     e.preventDefault();
//
//     let email = this.refs.email.value.trim();
//     let password = this.refs.password.value.trim();
//
//     if(password.length < 9){
//       return this.setState({error: 'Password must be more than 8 characters long'});
//     }
//     // this is how to create an account user
//     Accounts.createUser({email, password}, (err) => {
//       // when there is error, display what the error is (refer to line #50)
//       if(err){
//         this.setState({error: err.reason});
//       }else{
//         this.setState({error: ''});
//       }
//     });
//   }
//     // #1 Meteor.loginWithPassword({email}, password, (err) => {
//     //   console.log('login callback', err);
//     // });
//     // #2 Accounts.createUser({email, password}, (err) => {
//     //   console.log('Signup callback', err);
//     // });
//
//
//
//     // this.setState({
//     //   error: 'Something went wrong.'
//     // });
//
//
//   render(){
//     return(
//         <div>
//           <h1>Sign Up page</h1>
//
//           {this.state.error ? <p>{this.state.error}</p> : undefined}
//           <form onSubmit={this.onSubmit.bind(this)} noValidate>
//               <input type="email" ref="email" name="email" placeholder="email" />
//               <input type="password" ref="password" name="password" placeholder="Password" />
//               <button>Create Account</button>
//           </form>
//
//           <Link to="/login" >Already have an account?</Link>
//         </div>
//     );
//   }
// }
