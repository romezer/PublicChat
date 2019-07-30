import React, { Component } from 'react';

class ActiveTile extends Component {



    render(){
        return(
            <div className='item'>
                            <a className="ui tiny image">
                             <img src={this.props.avatar} className="label" alt="logo"/>
                            </a>
                            <div className="content">
                                <a className="header">{this.props.avatarName}</a>
                            <div className="description">
                            {this.props.avatarName} posted:  {this.props.count} messages.
                            </div>
                            </div>
                        </div>
        )
    }
}

export default ActiveTile;