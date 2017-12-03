import React from 'react';
import { Tracker } from 'meteor/tracker';

export default class LinkListFilters extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        showVisible: true
      };
    }

componentDidMount(){
  this.checkBoxTracker = Tracker.autorun(() => {
    //const showVisible = Session.get('showVisible');
    this.setState({
      showVisible: Session.get('showVisible')  // this way you don't need to create variable at line 14
    })
  });
}

componentWillUnmount(){
  this.checkBoxTracker.stop();
}

render(){
  return(
    <div>
      <label className="checkbox">
        <input className="checkbox__box" type="checkbox" checked={!this.state.showVisible} onChange={(e)=>{
          Session.set('showVisible', !e.target.checked);
        }} />
        show hidden links
      </label>
    </div>
  );
  }
}
