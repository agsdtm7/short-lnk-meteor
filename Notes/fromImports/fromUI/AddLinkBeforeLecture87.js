// // CHECK ON NOTES/fromUI/LinkBeforeLecture79.
// import React from 'react';
// import { Meteor } from 'meteor/meteor';
//
// export default class AddLink extends React.Component{
//
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
//   render(){
//     return(
//       <div>
//         <p>Add Link</p>
//         <form onSubmit={this.onSubmit.bind(this)}>
//           <input type="text" ref="url" placeholder="URL"/>
//           <button>Add Link</button>
//         </form>
//       </div>
//     );
//   }
// }
