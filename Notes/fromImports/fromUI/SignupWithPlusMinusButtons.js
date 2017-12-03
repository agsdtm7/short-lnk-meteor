// import React from 'react';
// import { Link } from 'react-router';
// export default class Signup extends React.Component{
//   // STATE
//   constructor(props){
//     super(props);
//     this.state = {
//       // count: this.props.count || 0
//       count: 0
//     };
//   }
//
//   increment(){
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   decrement(){
//     this.setState({
//       count: this.state.count - 1
//     });
//   }
//
//   render(){
//     return(
//         <div>
//           <h1>Sign Up page</h1>
//
//           <p>{this.state.count}</p>
//           <button onClick = {() => {
//             this.setState({ count: this.state.count * 2 })
//           }}>x2</button>
//           <button onClick = {this.increment.bind(this)}>+1</button>
//           <button onClick = {this.decrement.bind(this)}>-1</button>
//           <Link to="/login" >Already have an account?</Link>
//         </div>
//     );
//   }
// }
