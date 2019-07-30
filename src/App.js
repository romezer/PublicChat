import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Modal from 'simple-react-modal';
import './App.css';
import Dialog from './Components/Dialog.js';
import MainFrame from './Components/MainFrame.js';
import LoginPage from './Components/LoginPage.js';
import ActiveUsers from './Components/ActiveUsers.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      messages: [],
      isLogedIn: false,
      show: true,
      avatar: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleLoadLess = this.handleLoadLess.bind(this);
  }


  componentDidMount(){

  }

  componentWillMount() {
    if(Cookies.get('nickName') !== '' && Cookies.get('nickName') !== undefined && Cookies.get('avatar') !=='' && Cookies.get('avatar') !== undefined){
      this.setState({isLogedIn: true, name: Cookies.get('nickName'), avatar:Cookies.get('avatar')})
  }
    fetch(`/api/select`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          messages: result
        });
      });
  }

  handleNewMessage(msg){
    fetch(`/api/select`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          messages: result
        });
      });
  }

  handleLoadMore(){
    fetch(`/api/selectAll`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          messages: result
        });
      });
  }

  handleLoadLess(){
    fetch(`/api/select`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          messages: result
        });
      });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleLogin(){
    if(Cookies.get('nickName') !== '' && Cookies.get('nickName') !== undefined && Cookies.get('avatar') !=='' && Cookies.get('avatar') !== undefined){
      this.setState({isLogedIn: true, name: Cookies.get('nickName'), avatar:Cookies.get('avatar')})
  }
    this.setState({ isLogedIn: true });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      
      <div className="App">
      {this.state.isLogedIn? (
        <div>
            <ActiveUsers/>
            <MainFrame avatar={this.state.avatar} onLoadLess={this.handleLoadLess} onLoadMore={this.handleLoadMore} items={this.state.messages.reverse()} temp='temp'></MainFrame>
            <Dialog avatarPic={this.state.avatar} nickName={this.state.name} onSendMessage={this.handleNewMessage}></Dialog>
        </div>
            ) : (
              <div>
                <Modal show={this.state.show} onClose={this.hideModal} transitionSpeed={1000} closeOnOuterClick={true}>
                  <div><LoginPage onLogin={this.handleLogin}/></div>
                </Modal>
                <MainFrame avatarPic={this.state.avatar} onLoadLess={this.handleLoadLess} onLoadMore={this.handleLoadMore} items={this.state.messages.reverse()} temp='temp'></MainFrame>
              </div>
              
            )}
        
         
        {/* <header className="App-header">
      
        </header> */}
      </div>
    );
  }
}

export default App;
