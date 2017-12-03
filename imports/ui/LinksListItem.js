import React from 'react';
import Clipboard from 'clipboard';
import moment from 'moment';
// CREATE A BOOLEAN STATE CALLED JUSTCOPIED. DEFAULT TO false
// ON SUCCESS SWITCH JUSTCOPIED TO true
// WAIT A SECOND. SWITCH JUSTCOPIED TO false

export default class LinksListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      justCopied: false
    }
  }

  componentDidMount(){
    // create a variable
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', () => {
      // set the state of justCopied as true
      this.setState({justCopied:true});
      // after one second you change the state into false
      setTimeout(()=>{
        this.setState({justCopied: false}) }, 1000);
    }).on('error', () => {
      alert('unable to copy, please manually copy the link');
    });
  }
  componentWillUnmount(){
    this.clipboard.destroy();
  }
  renderStats(){
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;

    if(typeof this.props.lastVisitedAt === 'number'){
      visitedMessage = `(visited ${ moment(this.props.lastVisitedAt).fromNow() })`
    }

    return <p className="item__message">{this.props.visitedCount} {visitMessage} {visitedMessage}</p>
  }

  render(){
    return(
      <div className="item">
        <p>{this.props.url}</p>
        <p className="item__message">{this.props.shortUrl}</p>

        {this.renderStats()}
        <a className="button button--link button--pill" href={this.props.shortUrl} target="_blank">Visit</a>
        <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'Copied' : 'Copy'}
        </button>
        <button className="button button--pill" onClick={() => Meteor.call('links.setVisibility', this.props._id, !this.props.visible)}>
          {this.props.visible? 'Hide' : 'Unhide'}
        </button>
      </div>
    );
  }
  //   if(this.state.justCopied == false){
  //   return(
  //     <div>
  //       <p>{this.props.url}</p>
  //       <p>{this.props.shortUrl}</p>
  //       <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
  //     </div>
  //   );
  // }else{
  //   return(
  //     <div>
  //       <p>{this.props.url}</p>
  //       <p>{this.props.shortUrl}</p>
  //       <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copied</button>
  //     </div>
  //   );
  // }
};

LinksListItem.propTypes = {
  _id:React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId:React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  visitedCount: React.PropTypes.number.isRequired,
  lastVisitedAt: React.PropTypes.number
};
