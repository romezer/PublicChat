import React, { Component } from 'react';
import jenny from './jenny.jpg';
import lena from './lena.png';
import lindsay from './lindsay.png';
import mark from './mark.png';
import matthew from './matthew.png';

class MsgItem extends Component {
    constructor(props){
        super(props)
        this.state={
            avatarPic: this.props.avatar,
            date:  this.props.timeStamp
            
        }
        
        this.setAvatar = this.setAvatar.bind(this);
    }

    setAvatar(avatarName){
        switch(avatarName) {
            case 'jenny':
              return jenny;
            case 'lena':
              return lena ;
            case 'lindsay':
              return lindsay;
            case 'mark':
                return mark;
            case 'matthew':
                return matthew;
            default:
              return jenny;
          }
    }
    
    render() {
        return(
            
            <div className="ui feed">
            <div className="event">
                <div className="label">
                <img src={this.setAvatar(this.props.avatar)} className="label" alt="logo" />
                </div>
              <div className="content">
                <div className="date" >
                  {this.state.date}}
                </div>
                <div className="summary" key={this.props.Id}>
                  {this.props.nickName}: {this.props.text}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default MsgItem;