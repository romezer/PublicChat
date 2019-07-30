import React, { Component } from 'react';
import './Dialog.css';

class Dialog extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : '',
            avatar: this.props.avatarPic
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlelick = this.handlelick.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
        this.handleKeyEnter = this.handleKeyEnter.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
      }

    handlelick(event){
        this.setState({ value: '' });
        this.handleNewMessage();
    }

    handleNewMessage(){
        fetch(`/api/insert?text=${this.state.value}&nickName=${this.props.nickName}&avatar=${this.props.avatarPic}`)
        .then(response => response.json())
        .then((result) => {
        });
       this.props.onSendMessage(this.state.value);
      
      }

      handleKeyEnter(event){
            if(event.keyCode === 13){
                this.setState({ value: '' });
                this.handleNewMessage();
            }
      }

    render() {
       return (
        <div className='disalogContainer'>
                    <div className="ui fluid action input">
                    <input onKeyUp={this.handleKeyEnter} onChange={this.handleChange} type="text" placeholder="Say somthing...." value={this.state.value}/>
                    <button onClick={this.handlelick} className="ui primary button"><i className="paper plane icon"></i></button>
                </div>
        </div>
       
      
       
     )
    }
  }
  
  export default Dialog;