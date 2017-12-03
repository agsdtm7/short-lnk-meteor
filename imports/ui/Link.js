import React from 'react';

// import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkListFilters from './LinkListFilters';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
    <div className="page-content">
      <LinkListFilters />
      <AddLink />
      <LinksList />
    </div>
  </div>
  );
};

// set max width equal to our config value
// set margin to auto on sides to center
// padding equal to our space value

// export default class Link extends React.Component{
//   render(){
//     return(
//       <div>
//         <PrivateHeader title="Your Links"/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     );
//   }
// }
