// import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';
//
// //import { browserHistory } from 'react-router';
// //import Login from '../ui/Login';
//
// import { Links } from '../api/links';
// import LinksList from './LinksList';
//
// export default class Link extends React.Component{
//   onLogout(e){
//     Accounts.logout();
//   }
//   onSubmit(e){
//     const url = this.refs.url.value.trim();
//
//     e.preventDefault();
//     // to check if the text is empty or not
//     if(url){
//       Meteor.call('links.insert', url);
//       //Links.insert({ url, userId: Meteor.userId() });
//       this.refs.url.value = '';
//     }
//   }
//
//   render(){
//     return(
//       <div>
//       <p>this is home button</p>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//         <LinksList/>
//         <p>Add Link</p>
//         <form onSubmit={this.onSubmit.bind(this)}>
//           <input type="text" ref="url" placeholder="URL"/>
//           <button>Add Link</button>
//         </form>
//       </div>
//     );
//   }
// }
