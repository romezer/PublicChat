import React, { Component } from 'react';
import jenny from './jenny.jpg';
import lena from './lena.png';
import mark from './mark.png';
import matthew from './matthew.png';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            avatar:'',
            nickName:'',
            selected:'',
            isLoginError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAvatarClick = this.handleAvatarClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({nickName: event.target.value});
    }

    handleAvatarClick(avatarName){
         this.setState({avatar: avatarName,selected: avatarName});
    }

    isSelected(value){
        return ((value === this.state.selected)? 'active':'default')
    }


    handleSubmit(event) {
        event.preventDefault();
        document.cookie = `nickName=${this.state.nickName}`;
        document.cookie = `avatar=${this.state.avatar}`;
        if(this.state.nickName !== '' && this.state.avatar !== ''){
            this.props.onLogin();
        }
        else{
            this.setState({isLoginError:true})
        }
      }

    render() {
        return(
            <div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="header">
                    <h2 className="ui dividing header">Login</h2>
                </div>
               
                        <div className="field">
                            <label className='label'><strong>Nick Name</strong></label>
                            <input type="text" name="first-name" placeholder="Select Nick Name" onChange={this.handleInputChange}/>
                        </div>
                        <label><strong>Select Avatar</strong></label>
                        <div className="ui tiny images">
                            <img  onClick={() => this.handleAvatarClick('jenny')} className={this.isSelected('jenny')} src={jenny}/>
                            <img onClick={() => this.handleAvatarClick('lena')} className={this.isSelected('lena')} src={lena}/>
                            <img onClick={() => this.handleAvatarClick('mark')} className={this.isSelected('mark')}  src={mark}/>
                            <img onClick={() => this.handleAvatarClick('matthew')} className={this.isSelected('matthew')} src={matthew}/>
                        </div> 
                      
                        <button className="ui button primary" type="submit">Log In</button>
                        <div className={this.state.isLoginError ? 'displayError':'hideError'}>Please select a nick name and avatar</div>
                    </form>
            </div>
        )
    }
}

export default LoginPage;