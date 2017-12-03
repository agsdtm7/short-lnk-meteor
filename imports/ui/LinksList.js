import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';

import { Links } from '../api/links';
import Link from './Link';

import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        links: []
      };
  }

  componentDidMount(){    // this is a special method in the react lifecycle
    console.log('componentDidMount linkLIst');
    // call tracker.autorun
    // fecth all links using find method
    // print links to console using console.log
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('linksDatabaseOpenToClient');
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount(){
    console.log('componentWillUnmount linkList haha');
    this.linksTracker.stop();
  }

  renderLinksListItems(){ // important!!!
    // if statement - if there are no links in links array
    // return some static jsx
    // div p No links found

      if(this.state.links.length < 1) {
        return(
          <div className="item">
            <p className="item__status-message">No Links Found</p>
          </div>
        )
      }else{
       return this.state.links.map((link) => {
         const shortUrl = Meteor.absoluteUrl(link._id);
         return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>
         //return  <p key={link._id}>{link.url}</p>
       });
     }
  }

  render(){
    return(
      <div>
        <FlipMove maintainContainerHeight ={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>

    )
  }
}
