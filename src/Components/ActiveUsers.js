import React, { Component } from 'react';
import ActiveTile from './ActiveTile.js'
import './ActiveUsers.css';
import jenny from './jenny.png';
import lena from './lena.png';
import lindsay from './lindsay.png';
import mark from './mark.png';
import matthew from './matthew.png';

class ActiveUsers extends Component {
    state={
        items:[]
    }

    componentDidMount(){
        fetch(`/api/selectActive`)
        .then(response => response.json())
        .then((result) => {
          this.setState({
            items: result
          });
        });
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

    render(){
        return(
            <div className='activeUsers'>
                <h2 className='activeUsersTitle'>Active Users</h2>
                    <div className='ui items'>
                        {this.state.items.map((item,index) => (
                            <ActiveTile key={index} avatar={this.setAvatar(item.Avatar)} avatarName={item.Avatar} count={item.Count}></ActiveTile>
                        ))}
                    </div>
            </div>


            
        )
    }
}

export default ActiveUsers;